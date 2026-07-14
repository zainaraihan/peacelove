import Container from "./Container";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-brand-secondary font-sans text-brand-white py-[26px] mt-auto md:py-[62px]">
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between gap-[193px] md:gap-[0px]">
                    <div className="flex flex-col gap-10">
                        <div>
                            <Link href="/about" className="text-h1 md:text-[42px] font-medium text-brand-white hover:text-brand-white/60 transition-colors">
                                {t('about')}
                            </Link>
                        </div>
                        <div>
                            <Link href="/opportunity" className="text-h1 md:text-[42px] font-medium text-brand-white hover:text-brand-white/60 transition-colors">
                                {t('opportunity')}
                            </Link>
                        </div>
                        <div>
                            <Link href="/services" className="text-h1 md:text-[42px] font-medium text-brand-white hover:text-brand-white/60 transition-colors">
                                {t('services')}
                            </Link>
                        </div>
                        <div>
                            <Link href="/contact" className="text-h1 md:text-[42px] font-medium text-brand-white hover:text-brand-white/60 transition-colors">
                                {t('contact')}
                            </Link>
                        </div>
                        <div>
                            <a href="https://login.pnl-intl.com/Login_m.aspx" className="text-h1 md:text-[42px] font-medium text-brand-white hover:text-brand-white/60 transition-colors">
                                {t('login')}
                            </a>
                        </div>
                        <div>
                            <a href="https://twmember.bouleglobal.com/PnL/PnLMarketplace" className="text-h1 md:text-[42px] font-medium text-brand-primary hover:text-brand-primary/60 transition-colors">
                                {t('mall')}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[43px] md:gap-[44px] md:justify-between">
                        <div className="border-b-[1.2px] border-b-white flex justify-between pb-[24px] md:pb-[44px]">
                            <p className="text-brand-white text-h3 md:text-h1 w-[42.71] leading-[24.48px] self-center md:text-[70px] md:leading-[102%]">{t('bloom')}</p>
                            <img src="/peacelove_mainlogo_gold.svg?v=2" alt="Footer-Logo" />
                        </div>

                        <div className="flex flex-col gap-[18px] md:flex-row">
                            <div className="w-[244px] md:w-[30vw] text-brand-white flex flex-col gap-[18px] md:gap-[64px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h4 className="text-small font-semibold text-brand-white">{t('adminOffice')}</h4>
                                    <p className="text-small text-brand-white md:w-[25vw]">{t('adminAddress')}</p>
                                </div>
                            </div>
                            <div className="w-[244px] md:w-[30vw] text-brand-white flex flex-col gap-[18px] md:gap-[64px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h4 className="text-small font-semibold text-brand-white">{t('marketingOffice')}</h4>
                                    <p className="text-small text-brand-white md:w-[22vw]">{t('marketingAddress')}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[12px] md:text-[14px] tracking-[-0.48px] text-brand-primary">{t('copyright')}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}