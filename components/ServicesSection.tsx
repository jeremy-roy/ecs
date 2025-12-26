import { services } from '@/lib/data';
import { ServiceCard } from '@/components/ServiceCard';

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Expertise</h2>
                    <p className="text-lg text-gray-600">
                        We offer a comprehensive range of construction services, tailored to meet the unique needs of every project with precision and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
