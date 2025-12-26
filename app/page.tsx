import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20">
      <Header />

      <main className="flex-1">
        <Hero />

        <ServicesSection />

        {/* About / Why Choose Us Section Placeholder/Simple Implementation */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Why Choose Eden Construction?</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    With years of experience in the construction industry, we pride ourselves on delivering high-quality workmanship and exceptional customer service.
                  </p>
                  <p>
                    From the initial consultation to the final handover, we work closely with you to ensure your vision becomes a reality. Our team of skilled professionals specializes in all aspects of construction, ensuring every detail is perfect.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-3xl font-bold text-primary mb-1">15+</h4>
                    <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-3xl font-bold text-primary mb-1">100%</h4>
                    <p className="text-sm text-gray-500 font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Provide fallback or use a nice project image from public/project_images */}
                {/* Let's use specific images from the list: 'project_images/drone_shots/DJI_0016.JPG' or generic */}
                <img
                  src="/project_images/drone_shots/DJI_0016.JPG"
                  alt="Construction Site Overview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Background pattern or overlay if needed */}
          <div className="absolute inset-0 bg-[url('/branding/ECS-banner.png')] bg-cover bg-center opacity-10" />

          <div className="container relative mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-300">
                Contact us today for a free consultation and quote. Let's discuss how we can bring your ideas to life.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
