import Container from "./Container";

export default function Footer() {
    return (
        <footer className="bg-brand-secondary font-sans text-brand-white py-[26px] mt-auto md:py-[62px]">
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between gap-[193px] md:gap-[0px]">
                    <div className="flex flex-col gap-10">
                        <div>
                            <a href="/about" className="text-h1 md:text-[42px] font-medium text-brand-white">
                                About
                            </a>
                        </div>
                        <div>
                            <a href="/opportunity" className="text-h1 md:text-[42px] font-medium text-brand-white">
                                Opportunity
                            </a>
                        </div>
                        <div>
                            <a href="/services" className="text-h1 md:text-[42px] font-medium text-brand-white">
                                Services
                            </a>
                        </div>
                        <div>
                            <a href="/contact" className="text-h1 md:text-[42px] font-medium text-brand-white">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[43px] md:gap-[44px]">
                        <div className="border-b-[1.2px] border-b-white flex justify-between pb-[24px] md:pb-[44px]">
                            <p className="text-brand-white text-h3 md:text-h1 w-[42.71] leading-[24.48px] self-center md:text-[70px] md:leading-[102%]">Bloom Globaly.</p>
                            <img src="./peacelove_mainlogo_gold.svg?v=2" alt="Footer-Logo" />
                        </div>

                        <div className="flex flex-col gap-[18px] md:flex-row md:pb-[153px]">
                            <div className="w-[244px] md:w-[30vw] text-brand-white flex flex-col gap-[18px] md:gap-[64px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h4 className="text-small font-semibold text-brand-white">Admin Office</h4>
                                    <p className="text-small text-brand-white md:w-[25vw]">VA-02-06 No.1, Jalan Setia Murni U13/51, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor Darul Ehsan</p>
                                </div>
                            </div>
                            <div className="w-[244px] md:w-[30vw] text-brand-white flex flex-col gap-[18px] md:gap-[64px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h4 className="text-small font-semibold text-brand-white">Marketing Office</h4>
                                    <p className="text-small text-brand-white md:w-[22vw]">One Avenue 2-13A, Dataran Pelangi Utama, Jalan Masjid, PJU6A, Bandar Utama, Petaling Jaya, 47400, Selangor Darul Ehsan.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[12px] md:text-[14px] tracking-[-0.48px] text-brand-primary">©2026 Peace&Love</p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}