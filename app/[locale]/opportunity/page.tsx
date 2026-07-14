"use client"

import { useState } from 'react';
import '@/app/globals.css';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Opportunity() {
    const t = useTranslations('Opportunity');
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const sliderItems = [
        {
            title: t('slider.certTitle'),
            description: t('slider.certDesc'),
            image: "/opportunity/profcer.png",
            titleClass: "w-50",
            descClass: "w-80",
        },
        {
            title: t('slider.diplomaTitle'),
            description: t('slider.diplomaDesc'),
            image: "/opportunity/excedip.png",
            titleClass: "w-50",
            descClass: "w-70",
        },
        {
            title: t('slider.degreeTitle'),
            description: t('slider.degreeDesc'),
            image: "/opportunity/degpro.png",
            titleClass: "w-30",
            descClass: "w-80",
        }
    ];

    const totalItems = sliderItems.length;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalItems);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }
    };

    return (
        <div>
            <Container>
                {/* Header */}
                <div className='flex flex-col mt-11 pb-20 gap-8 border-b-1 border-brand-grey lg:flex-row lg:items-center lg:pb-25 lg:border-b-2'>
                    <h1 className='text-h1'>
                        {t.rich('title', {
                            br: () => <br />,
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h1>
                    <img className='relative h-[250px] object-cover overflow-x-visible lg:h-full lg:overflow-x-hidden' src="/opportunity/head.png?v=2" alt="" />
                </div>

                {/* Map */}
                <div className='mt-20 lg:mt-25'>
                    <div className='flex flex-col gap-7 mb-5 lg:flex-row lg:justify-between lg:items-end'>
                        <img className='relative h-[300px] object-cover overflow-x-visible lg:w-220 lg:h-full' src="/opportunity/maps.svg?v=2" alt="" />
                        <h2 className='text-h2'>
                            {t.rich('intro.title', {
                                br: () => <br />,
                                grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                            })}
                        </h2>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-p font-medium text-brand-grey lg:w-[60vw]'>{t('intro.desc1')}</p>
                        <p className='text-p font-medium p-3 bg-brand-light lg:w-[60vw]'>{t('intro.desc2')}</p>
                    </div>
                </div>

                {/* Build Experts */}
                <div className='flex flex-col mt-25 gap-8'>
                    <h2 className='text-h1 lg:text-[42px]'>
                        {t.rich('experts.title', {
                            br: () => <br />,
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h2>
                    <img className='relative h-[297px] object-cover overflow-x-visible lg:h-[347px]' src="/opportunity/expert.png?v=2" alt="" />
                    <div className='flex flex-col gap-3 lg:flex-row'>
                        <p className='text-p font-medium text-brand-grey'>{t('experts.desc1')}</p>
                        <p className='text-p font-medium text-brand-grey'>{t('experts.desc2')}</p>
                    </div>
                </div>
            </Container>
            {/* Radar Love */}
            <div className='flex flex-col justify-center items-center'>
                <img className='w-full object-cover object-center h-[516px] mt-25 overflow-x-visible lg:h-[684px]' src="/opportunity/radar.png?v=2" alt="" />
                <div className='absolute flex flex-col items-center text-center gap-20 pt-50 lg:gap-25 lg:pt-55'>
                    <p className='text-h4 w-50 font-semibold md:w-70'>
                        {t.rich('radar.item1', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </p>
                    <p className='text-h4 w-50 font-semibold pb-5 md:w-70'>
                        {t.rich('radar.item2', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </p>
                    <p className='text-h4 w-70 font-semibold md:w-120'>
                        {t.rich('radar.item3', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </p>
                    <img className='w-20' src="/opportunity/love.svg" alt="" />
                </div>
            </div>
            {/* List */}
            <div className='mt-25 flex flex-col gap-5 lg:px-[48px]'>
                <div className='relative overflow-hidden w-full'>
                    {/* Fixed Arrows inside the viewport container, positioned top-right on mobile */}
                    <div className='absolute top-5 right-5 z-10 flex gap-2 lg:hidden'>
                        <button
                            onClick={handlePrev}
                            className='cursor-pointer active:scale-95 transition-transform'
                            aria-label="Previous slide"
                        >
                            <img src="/opportunity/arrowleft.svg?v=2" alt="Previous" />
                        </button>
                        <button
                            onClick={handleNext}
                            className='cursor-pointer active:scale-95 transition-transform'
                            aria-label="Next slide"
                        >
                            <img src="/opportunity/arrowright.svg?v=2" alt="Next" />
                        </button>
                    </div>

                    <div
                        className='flex transition-transform duration-500 ease-in-out lg:w-full lg:!transform-none lg:flex-row lg:gap-5'
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {sliderItems.map((item, index) => (
                            <div
                                key={index}
                                className='w-full shrink-0 bg-brand-light flex flex-col justify-between lg:flex-1 lg:shrink lg:w-auto'
                            >
                                <div className='flex flex-col gap-4 p-5'>
                                    <div className='flex justify-between gap-4'>
                                        <h3 className={`text-h3 pr-[72px] lg:pr-0 ${item.titleClass}`}>{item.title}</h3>
                                    </div>
                                    <p className={`text-p text-brand-grey ${item.descClass}`}>{item.description}</p>
                                </div>
                                <img className='w-full object-cover h-[341px]' src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Choosing The Right */}
            <div className='mt-15 lg:mt-35'>
                <Container>
                    <h2 className='text-h2 w-70 pb-8 lg:w-120 lg:pb-15'>
                        {t.rich('challenge.title', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h2>
                </Container>
                <div className='flex flex-col justify-end pb-5 w-full bg-cover bg-center bg-right lg:bg-center h-[591px] relative bg-[url("/opportunity/righcom.png?v=2")] lg:h-[812px] lg:pb-[3vw]'>
                    <Container>
                        <div className='flex flex-col gap-5'>
                            <p className='font-medium p-5 bg-brand-light text-brand-grey lg:w-155'>{t('challenge.desc1')}</p>
                            <p className='font-medium p-5 bg-brand-light lg:w-155'>{t('challenge.desc2')}</p>
                        </div>
                    </Container>
                </div>
            </div>
            <Container>
                <div className='flex flex-col items-center py-65 lg:py-60'>
                    <h2 className='text-h1 text-center w-80 lg:w-250'>
                        {t.rich('cta.title', {
                            grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                        })}
                    </h2>
                    <p className='text-center pt-9 pb-12 lg:w-190 text-brand-grey'>{t('cta.desc')}</p>
                    <Button className='text-p'>
                        <Link href="/contact">{t('cta.button')}</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}