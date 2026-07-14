"use client"

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Services() {
    const t = useTranslations('Services');

    const bpmCards = [
        {
            img: "/services/card/aurora.png",
            price: "US$44.50",
            name: t('bpm.products.aurora.name'),
            desc: t('bpm.products.aurora.desc'),
        },
        {
            img: "/services/card/akg.png",
            price: "US$89.50",
            name: t('bpm.products.akg.name'),
            desc: t('bpm.products.akg.desc'),
        },
        {
            img: "/services/card/super.png",
            price: "US$56.00",
            name: t('bpm.products.super.name'),
            desc: t('bpm.products.super.desc'),
        },
    ];
    const [bpmSlide, setBpmSlide] = useState(0);

    const prevBpm = () => setBpmSlide((prev) => (prev - 1 + bpmCards.length) % bpmCards.length);
    const nextBpm = () => setBpmSlide((prev) => (prev + 1) % bpmCards.length);

    const stemCards = [
        {
            label: t('stem.options.firstTime'),
            img: "/services/timevisitor.png?v=2",
            price: "US$ 7,500",
            desc: t('stem.options.firstTimeDesc'),
        },
        {
            label: t('stem.options.returnVisitor'),
            img: "/services/card/2nd.png?v=2",
            price: "US$ 5,000",
            desc: t('stem.options.returnVisitorDesc'),
        },
    ];
    const [stemSlide, setStemSlide] = useState(0);
    const prevStem = () => setStemSlide((prev) => (prev - 1 + stemCards.length) % stemCards.length);
    const nextStem = () => setStemSlide((prev) => (prev + 1) % stemCards.length);

    return (
        <div>
            <img className="w-full h-[376px] object-cover lg:h-[300px]" src="/services/head.png?v=2" alt="" />
            <Container>
                <div className="flex flex-col my-15 gap-6 lg:flex-row lg:items-center">
                    <h1 className="text-h1 w-60 lg:w-240">
                        {t.rich('title', {
                            br: () => <br />,
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h1>
                    <p className="text-p font-medium lg:w-90">{t('subtitle')}</p>
                </div>
            </Container>
            <div className="border-b-1 border-brand-grey"></div>
            <Container>
                <div className="flex flex-col gap-8 my-15 md:flex-row md:items-start md:gap-[10vw] md:my-30">
                    <img className="w-40" src="/home/card/bpmlogo.svg?v=2" alt="" />
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center">
                            <h2 className="text-h2 w-50 md:w-[40vw]">
                                {t.rich('bpm.title', {
                                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                                })}
                            </h2>
                            <p className="text-p text-brand-grey font-medium md:w-full">{t('bpm.desc')}</p>
                        </div>
                        {/* Mobile: slider — Desktop: row */}
                        <div className="block lg:hidden">
                            <div className="flex flex-col bg-brand-light p-5 w-full">
                                <img className="mb-5" src={bpmCards[bpmSlide].img} alt="" />
                                <div>
                                    <h3 className="text-h3 mb-5 font-semibold">{bpmCards[bpmSlide].price}</h3>
                                    <div>
                                        <p className="text-p font-semibold mb-2">{bpmCards[bpmSlide].name}</p>
                                        <p className="text-p font-medium text-brand-grey">{bpmCards[bpmSlide].desc}</p>
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
                                    <img className="w-10" src="/opportunity/arrowleft.svg?v=2" alt="Arrow Left" />
                                </button>
                                <button onClick={nextBpm} aria-label="Next">
                                    <img className="w-10" src="/opportunity/arrowright.svg?v=2" alt="Arrow Right" />
                                </button>
                            </div>
                            <Button>
                                <a href="https://www.bpmlife.com/">{t('bpm.learnMore')}</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="py-15 bg-[linear-gradient(180deg,#F1F1F1_0%,#F1F1F1_62.07%,#FFF_94.96%)]">
                <div className="px-[18px] md:px-[3vw] ">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-[10vw]">
                        <img className="w-40" src="/home/card/38fulelogo.svg?v=2" alt="" />
                        <div className="flex flex-col gap-10 lg:w-full">
                            <div className="flex flex-col gap-3 md:gap-10">
                                <h2 className="text-h2 w-80 md:w-100">
                                    {t.rich('fule.title', {
                                        br: () => <br />,
                                        grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                                    })}
                                </h2>
                                <div className="flex flex-col gap-3 md:flex-row lg:w-full">
                                    <p className="text-p text-brand-grey font-medium w-85 md:w-full">{t('fule.desc1')}</p>
                                    <p className="text-p text-brand-grey font-medium w-85 md:w-full">{t('fule.desc2')}</p>
                                </div>
                            </div>
                            <img className="mt-10 w-full object-cover h-[304px] md:h-[450px] lg:mt-0" src="/services/empowering.png?v=2" alt="" />
                            <div>
                                <Button className="flex flex-col w-full text-p md:w-auto">
                                    <a href="https://www.38fule.com/">{t('fule.learnMore')}</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="flex flex-col gap-8 my-15 lg:flex-row md:items-start md:gap-[10vw]">
                    <img className="w-45" src="/home/card/zhonghailogo.png?v=2" alt="" />
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-h2 w-60 md:w-150">
                                {t.rich('stem.title', {
                                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                                })}
                            </h2>
                            <img className="mt-4 w-full object-cover h-[304px] overflow-x-visible lg:h-full md:mt-10" src="/services/elitestem.png?v=2" alt="" />
                            <p className="text-p text-brand-grey font-medium mt-6 md:py-5">{t('stem.desc')}</p>
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
                            <p className="text-p text-brand-grey-dark font-medium md:w-[50vw]">{t('stem.privilege')}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4 md:hidden">
                                    <button onClick={prevStem} aria-label="Previous">
                                        <img className="w-10" src="/opportunity/arrowleft.svg?v=2" alt="Arrow Left" />
                                    </button>
                                    <button onClick={nextStem} aria-label="Next">
                                        <img className="w-10" src="/opportunity/arrowright.svg?v=2" alt="Arrow Right" />
                                    </button>
                                </div>
                                <Button className="">
                                    <a href="https://zhonghaiyinglian.com/">{t('stem.learnMore')}</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="flex items-end h-[663px] my-30 bg-[url('/services/experience.png')] bg-center bg-cover md:h-[871px] md:my-50">
                <div className="flex flex-col relative top-6 backdrop-blur-sm py-10 bg-[linear-gradient(180deg,rgba(153,153,153,0)-10.12%,#FFF_62.95%)] md:w-full md:py-20">
                    <div className="flex flex-col md:px-[3vw] items-center gap-10">
                        <h1 className="text-h1 text-center lg:w-[80vw]">{t('cta.title')}</h1>
                        <p className="text-p text-center w-90 md:w-200">{t('cta.desc')}</p>
                        <div className="flex gap-4">
                            <Button className="text-p">
                                <a href="https://login.pnl-intl.com/Login_m.aspx">{t('cta.buttonJoin')}</a>
                            </Button>
                            <Button className="text-p">
                                <Link href="/contact">{t('cta.buttonPurchase')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}