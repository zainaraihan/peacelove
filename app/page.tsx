"use client";

import { useState } from 'react';
import Container from '@/components/layout/Container';
import './globals.css';
import Button from '@/components/ui/Button';

const faqData = [
  {
    question: "What makes BPM products different from other anti-aging brands?",
    answer: "The expert team consists of two members: Dr. Ricardo.G.Correa (Principal Scientific Advisor) and Dr. Itay Shafat (Principal Technical Advisor), who work together to lay a solid scientific foundation for product development."
  },
  {
    question: "Where are BPM products manufactured and tested?",
    answer: "The expert team consists of two members: Dr. Ricardo.G.Correa (Principal Scientific Advisor) and Dr. Itay Shafat (Principal Technical Advisor), who work together to lay a solid scientific foundation for product development."
  },
  {
    question: "Are your health supplements safe for daily consumption?",
    answer: "The expert team consists of two members: Dr. Ricardo.G.Correa (Principal Scientific Advisor) and Dr. Itay Shafat (Principal Technical Advisor), who work together to lay a solid scientific foundation for product development."
  },
  {
    question: "Who can truly benefit from P&L's advanced nutritional solutions?",
    answer: "The expert team consists of two members: Dr. Ricardo.G.Correa (Principal Scientific Advisor) and Dr. Itay Shafat (Principal Technical Advisor), who work together to lay a solid scientific foundation for product development."
  }
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <Container>
        {/* ------------Header------------ */}
        <div className='flex flex-col mt-5 relative h-[142vw] overflow-hidden lg:h-[80vh] lg:mt-15'>
          <div className='flex flex-col gap-[14px] relative lg:gap-[28px]'>
            <h1 className='text-h1 w-[10vw]'>Bloom Globally.</h1>
            <p className='text-h4 w-[60vw] font-semibold lg:w-[40vw]'> <span className='text-brand-grey'>A</span> premier cross-border modern <span className='text-brand-grey'>retail</span>  platform <span className='text-brand-grey'>dedicated to</span> ultimate health, anti-aging, <span className='text-brand-grey'>and</span> lifelong wellness.</p>
          </div>
        </div>
        <img
          className='absolute inset-0 w-full h-[172vw] object-cover object-right -z-10 pt-55 lg:h-full lg:object-top lg:pt-25'
          src="./home/head.png"
          alt="Header Background"
        />

        {/* ------------Group Chairman------------ */}
        <div className='mt-16 flex flex-col md:mt-21'>
          <h2 className='text-h2 w-[45vw] mb-10 lg:w-[23vw] md:mb-16' >Redefining <br />  <span className='text-brand-grey'>Global</span> Wellness & <span className='text-brand-grey'>Wealth</span></h2>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='mb-10 relative md:mb-16'>
              <div className='absolute top-1
              bg-[linear-gradient(180deg,rgba(164,147,112,0)_8.2%,rgba(202,193,176,0.49)_51.07%,#E8E6E2_81.95%,#FFF_100%)]
              w-full h-full overflow-x-hidden
              md:top-0
              md:bg-[linear-gradient(90deg,rgba(164,147,112,0)_8.2%,rgba(202,193,176,0.49)_51.07%,#E8E6E2_81.95%,#FFF_100%)]'></div>
              <img src="./home/mryuan.png" alt="" />
            </div>
            <div className='text-center md:text-left md:w-[35vw]'>
              <p className='text-h4 mb-2 text-brand-grey md:text-[18px]'>Group Chairman</p>
              <h2 className='text-h2 font-semibold mb-6 md:mb-12 md:text-[28px]'>Mr. Yuan XiaoFeng</h2>
              <p className='text-p font-medium mb-4'>At Peace&Love, we believe in bringing the best of science, nature, and innovation directly to you. Adhering to the principles of peace and love, we connect high-end customers worldwide with elite healthcare solutions and a life-changing global business platform.</p>
            </div>
          </div>
        </div>
        <img className='relative w-full h-34 object-cover object-center overflow-x-visible mb-25' src="./home/line.svg" alt="" />

        {/* ------------Core Partners------------ */}
        <div className='mb-25 lg:mb-40'>
          <h2 className='text-h1 w-[80vw] mb-10 md:text-center md:w-full md:mb-16'><span className='text-brand-grey'>Our</span> Core Partners <span className='text-brand-grey'>&</span> Premier <span className='text-brand-grey'>Solutions</span> </h2>
          <p className='text-h2 w-[55vw] mb-10 font-semibold md:text-center md:w-full md:mb-16'>World-Class <br />Innovations for Your Health</p>
          {/* Card */}
          <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
            {/* Card 38Fule */}
            <div className='bg-brand-light h-[325px] flex flex-col justify-between p-5 lg:w-full'>
              <div className='flex justify-between items-center'>
                <div className='p-3 bg-white rounded-lg'><img src="./home/card/bpm.svg" alt="" /></div>
                <img className='h-9' src="./home/card/bpmlogo.svg" alt="" />
              </div>
              <div>
                <p className='text-h3 w-50 font-semibold'>BPM Wellness <span className='text-brand-grey'>(USA)</span> </p>
              </div>
            </div>
            {/* Card 38Fule */}
            <div className='bg-brand-light h-[325px] flex flex-col justify-between p-5 lg:w-full'>
              <div className='flex justify-between items-center'>
                <div className='p-3 bg-white rounded-lg'><img src="./home/card/38fule.svg" alt="" /></div>
                <img className='h-8' src="./home/card/38fulelogo.svg" alt="" />
              </div>
              <div>
                <p className='text-h3 w-50 font-semibold'>38Fule Group <span className='text-brand-grey'>(China)</span> </p>
              </div>
            </div>
            {/* Card 38Fule */}
            <div className='bg-brand-light h-[325px] flex flex-col justify-between p-5 lg:w-full'>
              <div className='flex justify-between items-center'>
                <div className='p-3 bg-white rounded-lg'><img src="./home/card/zhonghai.svg" alt="" /></div>
                <img className='h-12' src="./home/card/zhonghailogo.png" alt="" />
              </div>
              <div>
                <p className='text-h3 w-50 font-semibold'>Stem Cell <span className='text-brand-grey'>Medical Center</span> </p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------Global Platform------------ */}
        <div className='flex flex-col lg:flex-row lg:gap-8'>
          <h1 className='text-h1 mb-10 lg:w-full'><span className='text-brand-grey'>The</span> 100-Billion <span className='text-brand-grey'>Global Platform</span></h1>
          <div className='h-[390px] relative lg:w-full'>
            <div className='absolute top-1 w-full h-full bg-[linear-gradient(180deg,rgba(164,147,112,0)_5.28%,rgba(220,214,201,0.62)_81.06%,#FFF_95.26%)]'></div>
            <img className='h-full w-full object-cover mb-10' src="./home/100global.png" alt="" />
          </div>
          <div className='flex items-end pb-8 border-b-[2px] border-brand-grey justify-between lg:w-full '>
            <p className='text-p w-80 lg:w-85'>P&L International is more than just a business; it is a lifelong career. We offer a unique, legally compliant, and highly rewarding direct-selling and modern retail compensation plan. Make friends worldwide, do business globally, and create sustainable wealth with us.</p>
            <Button className='h-fit'>
              <a href="/opportunity"><img className='py-1 lg:w-6' src="./home/arrow.svg" alt="" /></a>
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
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />
              {/* Duplicate list to fill space on wider screens */}
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />
            </div>

            {/* Second identical set for seamless looping */}
            <div className='flex gap-16 items-center animate-marquee shrink-0 min-w-full justify-around pr-16' aria-hidden="true">
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />
              {/* Duplicate list to fill space on wider screens */}
              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />

              <img className='h-7 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/38fulelogo.svg" alt="38Fule Logo" />
              <img className='h-13 md:h-13 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/bpmlogo.png" alt="BPM Logo" />
              <img className='h-9 md:h-9 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300' src="./home/card/zhonghailogo.png" alt="Zhong Hai Logo" />
            </div>
          </div>
        </div>

      </Container>

      {/* ------------Empowering------------ */}
      <img className='w-full object-cover object-center h-[389px] lg:h-[680px]' src="./home/empowering.png" alt="Empowering" />

      <Container>
        <div className='relative -top-20 lg:w-150'>
          <div className='flex flex-col p-4 bg-brand-light lg:p-6 lg:gap-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-h2 w-50'>Empowering <span className='text-brand-grey'>Future</span> <br /> Leaders</h2>
              <Button className='h-fit'>
                <a href="/opportunity"><img className='py-1 lg:w-6' src="./home/arrow.svg" alt="" /></a>
              </Button>
            </div>
            <p className='text-p lg:w-120 text-brand-grey'>We don't just build businesses; we build industry experts. Through our exclusive university partnerships and talent development programs, our members can achieve certified nutritionist coaching and higher education degrees.</p>
          </div>
        </div>

        {/* ------------Ready------------ */}
        <div className='flex flex-col items-center py-45 lg:py-60'>
          <h2 className='text-h1 text-center lg:w-250'><span className='text-brand-grey'>Ready</span> To Transform <span className='text-brand-grey'>Your</span> Life?</h2>
          <p className='text-center pt-9 pb-12 lg:w-190 text-brand-grey'>Join the P&L family today. Whether you are seeking premium health products or a lucrative global business, your journey to a better tomorrow starts right here.</p>
          <Button className='text-p'>
            <a href="/contact">Contact Us Now</a>
          </Button>
        </div>

        {/* ------------FAQ------------ */}
        <div className='flex flex-col gap-8 w-full mx-auto mb-30'>
          <p className="text-h2 text-brand-grey self-center lg:self-start">FAQ</p>
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
                        src={isOpen ? "./home/minus.svg" : "./home/plus.svg"}
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