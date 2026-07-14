"use client";

import Container from "@/components/layout/Container";
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <div>
            <img className="h-[137px] w-full object-cover md:h-[308px] md:object-start" src="/about/head.svg?v=2" alt="" />
            <Container>
                <div className="flex flex-col py-10 gap-4 md:flex-row md:gap-20 md:py-20">
                    <h1 className="text-h1">
                        {t.rich('title', {
                            br: () => <br />,
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h1>
                    <p className="text-p w-50 font-medium md:w-90">{t('subtitle')}</p>
                </div>
            </Container>
            <div className="bg-brand-secondary border-b-20 border-brand-light md:py-15">
                <Container className="p-4 ">
                    <p className="text-h2 w-[80vw] leading-[140%] text-brand-light md:w-[90vw]">
                        {t.rich('intro', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </p>
                </Container>
            </div>
            <div className="flex flex-col my-15 md:my-25 md:gap-13">
                <Container>
                    <h2 className="text-h2 w-30 mb-8 md:w-80 md:mb-12">
                        {t.rich('philosophy.title', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h2>
                </Container>
                <div className="flex flex-col gap-8 bg-brand-light md:flex-row md:gap-0 lg:gap-20 md:items-center md:mx-[3vw]">
                    <div className="">
                        <img className="md:h-[452px] object-cover lg:w-full" src="/about/philosophy.png?v=2" alt="" />
                    </div>
                    <Container>
                        <p className="text-p w-85 text-brand-grey lg:w-120 ">{t('philosophy.description')}</p>
                    </Container>
                </div>
                <div className="bg-brand-light border-b-1 border-brand-grey md:mx-[3vw]">
                    <div className="flex flex-col items-center justify-center bg-[url('/about/circle.png')] h-[522px] bg-cover bg-center md:h-[820px]">
                        <img className="h-[80px]" src="/about/love.svg?v=2" alt="" />
                        <div className="absolute flex flex-col gap-12 w-55 md:w-90 md:gap-20">
                            {/* Teks 1: Animasi normal */}
                            <p className="text-h4 font-semibold leading-[102%] animate-float-slow">
                                {t.rich('milestones.years', {
                                    br: () => <br />,
                                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                                })}
                            </p>

                            {/* Teks 2: Ditambah delay agar geraknya tidak bersamaan dengan Teks 1 */}
                            <p className="text-h4 font-semibold leading-[102%] self-end -mr-8 animate-float-slow delay-1000">
                                {t.rich('milestones.trust', {
                                    br: () => <br />,
                                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                                })}
                            </p>

                            {/* Teks 3: Ditambah delay lebih lama */}
                            <p className="text-h4 font-semibold leading-[102%] self-center animate-float-slow delay-2000">
                                {t.rich('milestones.foundation', {
                                    br: () => <br />,
                                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="my-20 md:my-40">
                    <h2 className="text-h1 mb-10 md:text-[42px]">
                        {t.rich('leadership.title', {
                            br: () => <br />,
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h2>
                    <div className="flex flex-col md:h-[full] md:flex-row md:justify-center">
                        <img className="md:w-[651px] md:h-[371px] md:object-top md:object-cover" src="/about/leader.png?v=2" alt="" />
                        <div className="bg-brand-light font-medium p-5 md:w-full md:p-10">
                            <p className="text-h4 w-[80vw] md:w-full">{t('leadership.bio')}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}