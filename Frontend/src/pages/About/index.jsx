import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./About.css";
import aboutImg from '../../assets/images/aboutKerchanshe.svg'
import '../../shared/Shared.css'
import { BottomLine } from "../../components/atoms";
import { Footer, Navbar } from "../../components";

const About = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <Navbar />
            <div className="dark:bg-boxdark">
                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h3 className="text-neutral text-center dark:text-white">What is The job ?</h3>
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                            About  <span className="text-primary">Us</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={aboutImg}
                                    alt="About Kerchanshe"
                                    className="w-100 h-100 transform translate-y-[-12%]"
                                    title="About Kerchanshe"
                                />

                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                Kerchanshe Coffee’s journey began with the passion of our CEO’s grandfather, whose deep connection to the land and love for coffee farming took root in the fertile soils of southern Ethiopia. His family's coffee-growing tradition originated with Mr. Israel Degefa's grandmother, Mrs. Wagayehu Bekele Debela, who instilled sustainable farming values at Bale Mountain Farm.  </p>
                                <br />
                                {/* <p className="font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Dalam Kerchanshe, informasi karyawan seperti data pribadi, jabatan, dan tingkat gaji disimpan secara terpusat.
                                    Setiap bulan, sistem akan mengambil data absensi karyawan dan melakukan perhitungan gaji berdasarkan informasi yang ada.
                                    Hal ini mencakup faktor-faktor seperti jam kerja, cuti, lembur, dan potongan yang relevan.
                                </p> */}
                            </motion.div>
                        </div>
                    </div>
                </div>
                {!isHomePage && <Footer />}
            </div>
        </>
    );
};

export default About;
