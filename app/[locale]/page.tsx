"use client";

import { useState } from 'react';
import Container from '@/components/layout/Container';
import '@/app/globals.css';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('Home');

  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ];

  return (
    <div>
      <Container>
        {/* ------------Header------------ */}
        <div className='flex flex-col mt-5 relative h-[142vw] overflow-hidden lg:h-[80vh] lg:mt-15'>
          <div className='flex flex-col gap-[14px] relative lg:gap-[28px]'>
            <h1 className='text-h1 w-[10vw]'>{t('hero.title')}</h1>
            <p className='text-h4 w-[60vw] font-semibold lg:w-[40vw]'>
              {t.rich('hero.description', {
                grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
              })}
            </p>
          </div>
        </div>
        <img
          className='absolute inset-0 w-full h-[172vw] object-cover object-right -z-10 pt-55 lg:h-full lg:object-top lg:pt-25'
          src="/home/head.png?v=2"
          alt="Header Background"
        />

        {/* ------------Group Chairman------------ */}
        <div className='mt-16 flex flex-col md:mt-21'>
          <h2 className='text-h2 w-[45vw] mb-10 lg:w-[23vw] md:mb-16' >
            {t.rich('chairman.title', {
              br: () => <br />,
              grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
            })}
          </h2>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='mb-10 relative md:mb-16'>
              <div className='absolute top-1
              bg-[linear-gradient(180deg,rgba(164,147,112,0)_8.2%,rgba(202,193,176,0.49)_51.07%,#E8E6E2_81.95%,#FFF_100%)]
              w-full h-full overflow-x-hidden
              md:top-0
              md:bg-[linear-gradient(90deg,rgba(164,147,112,0)_8.2%,rgba(202,193,176,0.49)_51.07%,#E8E6E2_81.95%,#FFF_100%)]'></div>
              <img src="/home/mryuan.png?v=2" alt="" />
            </div>
            <div className='text-center md:text-left md:w-[35vw]'>
              <p className='text-h4 mb-2 text-brand-grey md:text-[18px]'>{t('chairman.role')}</p>
              <h2 className='text-h2 font-semibold mb-6 md:mb-12 md:text-[28px]'>{t('chairman.name')}</h2>
              <p className='text-p font-medium mb-4'>{t('chairman.message')}</p>
            </div>
          </div>
        </div>
        <img className='relative w-full h-34 object-cover object-center overflow-x-visible mb-25' src="/home/line.svg?v=2" alt="" />

        {/* ------------Core Partners------------ */}
        <div className='mb-25 lg:mb-40'>
          <h2 className='text-h1 w-[80vw] mb-10 md:text-center md:w-full md:mb-16'>
            {t.rich('partners.title', {
              grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
            })}
          </h2>
          <p className='text-h2 w-[55vw] mb-10 font-semibold md:text-center md:w-full md:mb-16'>
            {t.rich('partners.subtitle', {
              br: () => <br />
            })}
          </p>
          {/* Card */}
          <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
            {/* Card BPM */}
            <div className='bg-brand-light gap-5 lg:gap-10 flex flex-col justify-between p-5 lg:w-full'>
              <div className='flex justify-between items-center'>
                <div className='p-3 bg-white rounded-lg'><img src="/home/card/bpm.svg?v=2" alt="" /></div>
                <img className='h-9' src="/home/card/bpmlogo.svg?v=2" alt="" />
              </div>
              <img className='object-cover object-bottom' src="/home/card/bpm.png" alt="" />
              <div>
                <p className='text-h3 w-50 font-semibold'>
                  {t.rich('partners.bpm', {
                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                  })}
                </p>
              </div>
            </div>
            {/* Card 38Fule */}
            <div className='bg-brand-light gap-5 lg:gap-10 flex flex-col justify-between p-5 lg:w-full'>
              <div className='flex justify-between items-center'>
                <div className='p-3 bg-white rounded-lg'><img src="/home/card/38fule.svg?v=2" alt="" /></div>
                <img className='h-8' src="/home/card/38fulelogo.svg?v=2" alt="" />
              </div>
              <img className='object-cover object-bottom' src="/home/card/38fule.png" alt="" />
              <div>
                <p className='text-h3 w-50 font-semibold'>
                  {t.rich('partners.fule', {
                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                  })}
                </p>
              </div>
            </div>
            {/* Card Zhonghai */}
            <div className='bg-brand-light gap-5 lg:gap-10 flex flex-col justify-between p-5 lg:w-full'>
              <div className='flex justify-between items-center'>
                <div className='p-3 bg-white rounded-lg'><img src="/home/card/zhonghai.svg?v=2" alt="" /></div>
                <img className='h-12' src="/home/card/zhonghailogo.png?v=2" alt="" />
              </div>
              <img className='object-cover object-bottom' src="/home/card/zhonghai.png" alt="" />
              <div>
                <p className='text-h3 w-50 font-semibold'>
                  {t.rich('partners.stem', {
                    grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------Global Platform------------ */}
        <div className='flex flex-col lg:flex-row lg:gap-8'>
          <h1 className='text-h1 mb-10 lg:w-full'>
            {t.rich('platform.title', {
              grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
            })}
          </h1>
          <div className='h-[390px] relative lg:w-full'>
            <div className='absolute top-1 w-full h-full bg-[linear-gradient(180deg,rgba(164,147,112,0)_5.28%,rgba(220,214,201,0.62)_81.06%,#FFF_95.26%)]'></div>
            <img className='h-full w-full object-cover mb-10' src="/home/100global.png?v=2" alt="" />
          </div>
          <div className='flex items-end pb-8 border-b-[2px] border-brand-grey justify-between lg:w-full '>
            <p className='text-p w-80 lg:w-85'>{t('platform.description')}</p>
            <Button className='h-fit'>
              <Link href="/opportunity"><img className='py-1 lg:w-6' src="/home/arrow.svg?v=2" alt="" /></Link>
            </Button>
          </div>
        </div>

        {/* ------------Logos Running------------ */}
        <div className='relative w-full overflow-hidden py-10 border-t border-brand-light lg:py-20'>
          {/* Gradient Masks for a premium fading effect */}
          <div className='absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none' />
          <div className='absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none' />

          <div className='flex whitespace-nowrap pause-on-hover overflow-hidden'>
            <div className='flex gap-16 items-center animate-marquee shrink-0 min-w-full justify-around pr-16'>
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />
            </div>

            {/* Second identical set for seamless looping */}
            <div className='flex gap-16 items-center animate-marquee shrink-0 min-w-full justify-around pr-16' aria-hidden="true">
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/38fulelogo.svg?v=2" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/bpmlogo.png?v=2" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="/home/card/zhonghailogo.png?v=2" alt="Zhong Hai Logo" />
            </div>
          </div>
        </div>

      </Container>

      {/* ------------Empowering------------ */}
      <img className='w-full object-cover object-center h-[389px] lg:h-[680px]' src="/home/empowering.png?v=2" alt="Empowering" />

      <Container>
        <div className='relative -top-20 lg:w-150'>
          <div className='flex flex-col p-4 bg-brand-light lg:p-6 lg:gap-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-h2 w-50'>
                {t.rich('empower.title', {
                  br: () => <br />,
                  grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
                })}
              </h2>
              <Button className='h-fit'>
                <Link href="/opportunity"><img className='py-1 lg:w-6' src="/home/arrow.svg" alt="" /></Link>
              </Button>
            </div>
            <p className='text-p lg:w-120 text-brand-grey'>{t('empower.description')}</p>
          </div>
        </div>

        {/* ------------Ready------------ */}
        <div className='flex flex-col items-center py-45 lg:py-60'>
          <h2 className='text-h1 text-center lg:w-250'>
            {t.rich('cta.title', {
              grey: (chunks) => <span className='text-brand-grey'>{chunks}</span>
            })}
          </h2>
          <p className='text-center pt-9 pb-12 lg:w-190 text-brand-grey'>{t('cta.description')}</p>
          <Button className='text-p'>
            <Link href="/contact">{t('cta.button')}</Link>
          </Button>
        </div>

        {/* ------------FAQ------------ */}
        <div className='flex flex-col gap-8 w-full mx-auto mb-30'>
          <p className="text-h2 text-brand-grey self-center lg:self-start">{t('faq.title')}</p>
          <div className='flex flex-col w-full gap-4'>
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className='p-4 bg-brand-light cursor-pointer select-none transition-all duration-300'
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className='flex items-center justify-between gap-4'>
                    <p className='text-p w-60 md:w-full font-medium leading-[120%]'>{item.question}</p>
                    <div className='p-2 bg-brand-secondary shrink-0'>
                      <img
                        className='w-3 h-3 transition-transform duration-300'
                        src={isOpen ? "/home/minus.svg?v=2" : "/home/plus.svg?v=2"}
                        alt={isOpen ? "Minus" : "Plus"}
                      />
                    </div>
                  </div>
                  <div
                    className='grid transition-all duration-300 ease-in-out'
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className='overflow-hidden'>
                      <p className='text-p pt-7 text-brand-grey'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}