import Image from "next/image"

export function Hero() {
    return (
        <section id="home" className="relative pt-32 lg:pt-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Mobile Banner */}
                    <Image
                        src="/branding/ECSlogotransparentdoor.png"
                        alt="Eden Construction Services - Building Your Dream"
                        width={853}
                        height={392}
                        className="w-full h-auto md:hidden"
                        priority
                    />
                    {/* Desktop Banner */}
                    <Image
                        src="/branding/ECS-banner.png"
                        alt="Eden Construction Services - Building Your Dream"
                        width={1600}
                        height={800}
                        className="w-full h-auto hidden md:block"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}