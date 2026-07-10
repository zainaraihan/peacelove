"use client"

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Services() {
    const bpmCards = [
        {
            img: "./services/card/aurora.png",
            price: "US$44.50",
            name: "Aurora",
            desc: "A skin whitening product that can block melanin from the source.",
        },
        {
            img: "./services/card/akg.png",
            price: "US$89.50",
            name: "AKG Evolution",
            desc: "AKG Evolution dietary capsules promote cell energy and longevity.",
        },
        {
            img: "./services/card/super.png",
            price: "US$56.00",
            name: "Super Antioxidant",
            desc: "Provide powerful cellular antioxidant support.",
        },
    ];
    const [bpmSlide, setBpmSlide] = useState(0);

    const prevBpm = () => setBpmSlide((prev) => (prev - 1 + bpmCards.length) % bpmCards.length);
    const nextBpm = () => setBpmSlide((prev) => (prev + 1) % bpmCards.length);

    const stemCards = [
        {
            label: "1st Time Visitor",
            img: "./services/timevisitor.png?v=2",
            price: "US$ 7,500",
            desc: "Includes 5500 CV for Business Members",
        },
        {
            label: "2nd Time & Above",
            img: "./services/card/2nd.png?v=2",
            price: "US$ 5,000",
            desc: "Includes 3500 CV for Business Members",
        },
    ];
    const [stemSlide, setStemSlide] = useState(0);
    const prevStem = () => setStemSlide((prev) => (prev - 1 + stemCards.length) % stemCards.length);
    const nextStem = () => setStemSlide((prev) => (prev + 1) % stemCards.length);

    return (
        <div>
            <img className="w-full h-[376px] object-cover lg:h-[300px]" src="./services/head.png?v=2" alt="" />
            <Container>
                <div className="flex flex-col my-15 gap-6 lg:flex-row lg:items-center">
                    <h1 className="text-h1 w-60 lg:w-240"><span className='text-brand-grey'>Exclusive</span> Products <br /> <span className='text-brand-grey'>&</span> Services</h1>
                    <p className="text-p font-medium w-90 lg:w-90">Your gateway to the world’s most advanced cellular nutrition, health innovations, and elite regenerative medicine.</p>
                </div>
            </Container>
            <div className="border-b-1 border-brand-grey"></div>
            <Container>
                <div className="flex flex-col gap-8 my-15 md:flex-row md:items-start md:gap-[10vw] md:my-30">
                    <img className="w-40" src="./home/card/bpmlogo.svg?v=2" alt="" />
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center">
                            <h2 className="text-h2 w-50 md:w-[40vw]"><span className='text-brand-grey'>The</span> Peak <span className='text-brand-grey'>of</span> Cellular Nutrition</h2>
                            <p className="text-p text-brand-grey font-medium md:w-full">Sourced and manufactured in the USA, BPM Wellness utilizes the latest nanotechnology to deliver world-class cellular nutrition.</p>
                        </div>
                        {/* Mobile: slider — Desktop: row */}
                        <div className="block lg:hidden">
                            <div className="flex flex-col bg-brand-light p-5 w-full">
                                <img className="mb-5" src={bpmCards[bpmSlide].img} alt="" />
                                <div>
                                    <h3 className="text-h3 mb-5 font-semibold">{bpmCards[bpmSlide].price}</h3>
                                    <div>
                                        <p className="text-p font-semibold mb-2">{bpmCards[bpmSlide].name}</p>
                                        <p className="text-p font-medium text-brand-grey w-80">{bpmCards[bpmSlide].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-row gap-5">
                            {bpmCards.map((card, i) => (
                                <div key={i} className="flex flex-col bg-brand-light p-5 w-full">
                                    <img className="mb-5" src={card.img} alt="" />
                                    <div>
                                        <h3 className="text-h3 mb-5 font-semibold">{card.price}</h3>
                                        <div>
                                            <p className="text-p font-semibold mb-2">{card.name}</p>
                                            <p className="text-p font-medium text-brand-grey">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-4 lg:hidden">
                                <button onClick={prevBpm} aria-label="Previous">
                                    <img className="w-10" src="./opportunity/arrowleft.svg?v=2" alt="Arrow Left" />
                                </button>
                                <button onClick={nextBpm} aria-label="Next">
                                    <img className="w-10" src="./opportunity/arrowright.svg?v=2" alt="Arrow Right" />
                                </button>
                            </div>
                            <Button>
                                <a href="https://www.bpmlife.com/">Learn More</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="py-15 bg-[linear-gradient(180deg,#F1F1F1_0%,#F1F1F1_62.07%,#FFF_94.96%)]">
                <div className="px-[18px] md:px-[3vw] ">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-[10vw]">
                        <img className="w-40" src="./home/card/38fulelogo.svg?v=2" alt="" />
                        <div className="flex flex-col gap-10 lg:w-full">
                            <div className="flex flex-col gap-3 md:gap-10">
                                <h2 className="text-h2 w-80 md:w-100"><span className='text-brand-grey'>Empowering</span> <br /> Women’s Wellness</h2>
                                <div className="flex flex-col gap-3 md:flex-row lg:w-full">
                                    <p className="text-p text-brand-grey font-medium w-85 md:w-full">With over 34 years of glorious history, the 38Fule Group from Shaanxi, China, is a legally licensed and highly respected pioneer in women's health.</p>
                                    <p className="text-p text-brand-grey font-medium w-85 md:w-full">We bring you deeply trusted, premium healthcare solutions specifically designed to nurture and protect women's well-being at every stage of life.</p>
                                </div>
                            </div>
                            <img className="mt-10 w-full object-cover h-[304px] md:h-[450px] lg:mt-0" src="./services/empowering.png?v=2" alt="" />
                            <div>
                                <Button className="flex flex-col w-full text-p md:w-auto">
                                    <a href="https://www.38fule.com/">Learn More</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="flex flex-col gap-8 my-15 lg:flex-row md:items-start md:gap-[10vw]">
                    <img className="w-45" src="./home/card/zhonghailogo.png?v=2" alt="" />
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-h2 w-60 md:w-150"><span className='text-brand-grey'>Elite</span> Stem Cell Medical <span className='text-brand-grey'>Tourism in</span> Hainan</h2>
                            <img className="mt-4 w-full object-cover h-[304px] overflow-x-visible lg:h-full md:mt-10" src="./services/elitestem.png?v=2" alt="" />
                            <p className="text-p text-brand-grey font-medium mt-6 md:py-5">Travel for health, travel for life. Through our partnership with Zhonghai Yinglian—a scientist-led, world-class regenerative medicine enterprise—we offer an exclusive medical tourism experience in the Boao Lecheng Pilot Zone, Hainan. Experience state-of-the-art immune and stem cell therapies designed to transform your vitality.</p>
                        </div>
                        {/* Mobile: slider — Desktop: row */}
                        <div className="block md:hidden">
                            <div className="flex flex-col gap-7 p-5 bg-brand-light py-6">
                                <h3 className="text-h3 w-30">{stemCards[stemSlide].label}</h3>
                                <img className="w-full object-cover h-[250px]" src={stemCards[stemSlide].img} alt="" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-h3">{stemCards[stemSlide].price}</h3>
                                    <p className="text-p w-70 font-medium text-brand-grey">{stemCards[stemSlide].desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-row gap-5">
                            {stemCards.map((card, i) => (
                                <div key={i} className="flex flex-col gap-7 p-5 bg-brand-light py-6 w-full">
                                    <h3 className="text-h3 w-30">{card.label}</h3>
                                    <img className="w-full object-cover h-[250px]" src={card.img} alt="" />
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-h3">{card.price}</h3>
                                        <p className="text-p w-70 font-medium text-brand-grey">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-between md:items-center md:py-10">
                            <p className="text-p text-brand-grey-dark font-medium md:w-[50vw]">*Special Privilege : Every package comes with a Free Masterpay Card worth US$100.</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4 md:hidden">
                                    <button onClick={prevStem} aria-label="Previous">
                                        <img className="w-10" src="./opportunity/arrowleft.svg?v=2" alt="Arrow Left" />
                                    </button>
                                    <button onClick={nextStem} aria-label="Next">
                                        <img className="w-10" src="./opportunity/arrowright.svg?v=2" alt="Arrow Right" />
                                    </button>
                                </div>
                                <Button className="">
                                    <a href="https://zhonghaiyinglian.com/">Learn More</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="flex items-end h-[663px] my-30 bg-[url('/services/experience.png')] bg-center bg-cover md:h-[871px] md:my-50">
                <div className="flex flex-col relative top-6 backdrop-blur-sm py-10 bg-[linear-gradient(180deg,rgba(153,153,153,0)-10.12%,#FFF_62.95%)] md:w-full md:py-20">
                    <div className="flex flex-col px-[18px] md:px-[3vw] items-center gap-10">
                        <h1 className="text-h1 text-center lg:w-[80vw]">Experience the Ultimate Health & Wealth</h1>
                        <p className="text-p text-center w-90 md:w-200">Unlock world-class health and join P&L's 100-Billion Global Business Platform with our premium packages. Start building your lifelong career today.</p>
                        <div className="flex gap-4">
                            <Button className="text-p">
                                <a href="https://login.pnl-intl.com/Login_m.aspx">Join Member</a>
                            </Button>
                            <Button className="text-p">
                                <a href="/contact">Contact to Purchase</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}