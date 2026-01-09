'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10),
});

export async function sendContactEmail(formData: FormData) {
    const apiKey = process.env.RESEND_API_KEY;

    // Debug logging
    console.log('Server Action: sendContactEmail started');
    // console.log('API Key:', apiKey);
    // console.log('Contact Email:', process.env.CONTACT_EMAIL);


    if (!apiKey || !apiKey.startsWith('re_')) {
        console.error('Configuration Error: Invalid or missing RESEND_API_KEY');
        console.error('Current Key:', apiKey ? `${apiKey.substring(0, 5)}...` : 'undefined');
        return { error: 'Configuration Error: Missing API Key' };
    }

    const resend = new Resend(apiKey);
    const contactEmail = process.env.CONTACT_EMAIL || 'onboarding@resend.dev';
    const recipients = contactEmail.split(',').map(email => email.trim());

    console.log(`Attempting to send email to: ${recipients.join(', ')}`);

    const validatedFields = formSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        console.error('Validation Error:', validatedFields.error);
        return { error: 'Invalid fields' };
    }

    const { name, email, phone, service, message } = validatedFields.data;

    try {
        const data = await resend.emails.send({
            from: 'Eden Construction Services <contact@mail.benred.co.za>',
            to: recipients,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not provided'}
 
Message:
${message}
      `,
        });

        if (data.error) {
            console.error('Resend API Error:', data.error);
            return { error: data.error.message };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Server Action Error:', error);
        return { error: 'Failed to send email' };
    }
}
