"use client"

import Container from "@/components/layout/Container"

export default function about() {

    return (
        <div>
            <img className="h-[137px] w-full object-cover md:h-[308px] md:object-start" src="./about/head.svg" alt="" />
            <Container>
                <div className="flex flex-col py-10 gap-4 md:flex-row md:gap-20 md:py-20">
                    <h1 className="text-h1"><span className='text-brand-grey'>About</span> <br /> P&L International</h1>
                    <p className="text-p w-50 font-medium md:w-90">Empowering Global Wellness, Inspiring Lifelong Wealth.</p>
                </div>
            </Container>
            <div className="bg-brand-secondary border-b-20 border-brand-light md:py-15">
                <Container className="p-4 ">
                    <p className="text-h2 w-[80vw] leading-[140%] text-brand-light md:w-[90vw]">
                        Peace&Love (P&L) International <span className='text-brand-grey'>is a modern</span> global retail platform dedicated <span className='text-brand-grey'>to providing</span> the world’s high-end <span className='text-brand-grey'>customers with</span> ultimate health solutions. We seamlessly <span className='text-brand-grey'>bridge borders</span> to bring you BPM Ultimate Anti-Aging products <span className='text-brand-grey'>from the</span> United States, trusted women's health innovations from China's 38Fule Group, <span className='text-brand-grey'>and</span> exclusive stem cell medical tourism in Boao, Hainan <span className='text-brand-grey'>provided by</span> Zhonghai Yinglian.
                    </p>
                </Container>
            </div>
            <div className="flex flex-col my-15 md:my-25 md:gap-13">
                <Container>
                    <h2 className="text-h2 w-30 mb-8 md:w-80 md:mb-12"><span className='text-brand-grey'>Our</span> Philosophy <span className='text-brand-grey'>& Heritage</span></h2>
                </Container>
                <div className="flex flex-col gap-8 bg-brand-light md:flex-row md:gap-0 lg:gap-20 md:items-center md:mx-[3vw]">
                    <div className="">
                        <img className="md:h-[452px] object-cover lg:w-full" src="./about/philosophy.png" alt="" />
                    </div>
                    <Container>
                        <p className="tex-p w-85 text-brand-grey lg:w-120 ">Adhering to our core principles of peace and love, we are committed to providing every customer with only the best products and services. We do not just build a business; we build a lifelong career for our partners.</p>
                    </Container>
                </div>
                <div className="bg-brand-light border-b-1 border-brand-grey md:mx-[3vw]">
                    <div className="flex flex-col items-center justify-center bg-[url('/about/circle.png')] h-[522px] bg-cover bg-center md:h-[820px]">
                        <img className="h-[80px]" src="./about/love.svg" alt="" />
                        <div className="absolute flex flex-col gap-12 w-55 md:w-90 md:gap-20">
                            {/* Teks 1: Animasi normal */}
                            <p className="text-h4 font-semibold leading-[102%] animate-float-slow">
                                34 <span className="text-brand-grey">Glorious</span> <br /> Years
                            </p>

                            {/* Teks 2: Ditambah delay agar geraknya tidak bersamaan dengan Teks 1 */}
                            <p className="text-h4 font-semibold leading-[102%] self-end -mr-8 animate-float-slow delay-1000">
                                <span className="text-brand-grey">Building</span> <br /> Trust
                            </p>

                            {/* Teks 3: Ditambah delay lebih lama */}
                            <p className="text-h4 font-semibold leading-[102%] self-center animate-float-slow delay-2000">
                                <span className="text-brand-grey">Solid</span> Global <br /> Foundation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-20 md:my-40">
                    <h2 className="text-h1 mb-10 md:text-[42px]"><span className='text-brand-grey'>Visionary</span> <br /> Leadership</h2>
                    <div className="flex flex-col md:h-[full] md:flex-row md:justify-center">
                        <img className="md:w-[651px] md:h-[371px] md:object-top md:object-cover" src="./about/leader.png" alt="" />
                        <div className="bg-brand-light font-medium p-5 md:w-full md:p-10">
                            <p className="text-h4 w-[80vw] md:w-full">P&L International was founded by renowned Malaysian entrepreneur, Dr. M Alvin Hiew, serving as the International CEO. With over 35 years of successful experience in direct selling management and global network expansion, Dr. Hiew brings unparalleled expertise to the platform. Working closely with Group Chairman Mr. Yuan Xiaofeng, and backed by the full support of our parent group, P&L is driven by a leadership team dedicated to global market excellence and the ultimate well-being of humanity.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}