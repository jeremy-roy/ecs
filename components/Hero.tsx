import Image from "next/image"

export function Hero() {
    return (
        <section id="home" className="relative pt-32 lg:pt-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <Image
                        src="/branding/ECS-banner-2.png"
                        alt="Eden Construction Services - Building Your Dream"
                        width={1600}
                        height={800}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}