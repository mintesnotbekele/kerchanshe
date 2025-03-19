import React, { useRef, useEffect, useState } from "react";
import LogoPt from "../../../../assets/images/logo/logo-dark.svg";
import LogoKerchanshe from "../../../../assets/images/logo/logo.webp";
import { useReactToPrint } from "react-to-print";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getMe, 
    viewGajiSinglePegawaiByName,
} from "../../../../config/redux/action";
import { ButtonOne, ButtonTwo } from "../../../atoms";

const PrintPdfDataGajiPegawai = () => {
    const componentRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const month = searchParams.get("month");
    const year = searchParams.get("year");
    const [bulan, setBulan] = useState("");
    const [tahun, setTahun] = useState("");

    const { isError, user } = useSelector((state) => state.auth);
    const { nama_pegawai } = useSelector((state) => state.auth.user) || {};
    const dataGajiPegawai = useSelector((state) => state.dataGajiPegawaiPrint.dataGajiPegawaiPrint);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Slip_Gaji_Pegawai_PT. Humpuss Karbometil Selulosa",
    });

    useEffect(() => {
        if (nama_pegawai && typeof nama_pegawai === "string" && nama_pegawai.trim() !== "") {
            dispatch(viewGajiSinglePegawaiByName(nama_pegawai));
        }
    }, [dispatch, nama_pegawai]);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/login");
        }
        if (user && user.hak_akses !== "pegawai") {
            navigate("/dashboard");
        } else {
            handlePrint();
        }
    }, [isError, user, navigate, handlePrint]);

    useEffect(() => {
        const today = new Date();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const currentMonth = monthNames[today.getMonth()];
        const currentYear = today.getFullYear();
        setBulan(currentMonth);
        setTahun(currentYear);
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row w-full gap-3 text-center p-6 bg-white dark:bg-meta-4">
                <div>
                    <ButtonOne onClick={handlePrint}>
                        <span>Print</span>
                    </ButtonOne>
                </div>
                <Link to="/data-gaji-pegawai">
                    <ButtonTwo>
                        <span>Cancel</span>
                    </ButtonTwo>
                </Link>
            </div >
            <div ref={componentRef} >
                {dataGajiPegawai.map((data, index) => {
                    return (
                        <div key={index} className="w-200% h-100% p-10 bg-white dark:bg-meta-4">
                            <div className="flex items-center gap-24 object-cover border-b-4 border-black dark:border-white">
                                <img className="w-35"
                                    src={LogoKerchanshe}
                                    title="Logo Kerchanshe"
                                    alt="Logo Kerchanshe" />
                                <h1 className="text-black text-2xl font-bold boder  dark:text-white">
                                    PT. Humpuss Karbometil Selulosa
                                </h1>
                                <img className="w-35"
                                    src={LogoPt}
                                    title="Logo PT.Humpuss Karbometil Selulosa"
                                    alt="Logo PT.Humpuss Karbometil Selulosa"
                                />
                            </div>
                            <h1 className="text-center text-black dark:text-white my-4 text-xl font-medium boder py-2">
                                Daftar Gaji Pegawai
                            </h1>
                            <div className="w-full md:text-lg">
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Name Pegawai</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {data.nama_pegawai}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">NIK</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {data.nik}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Position</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {data.jabatan}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Month</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {month}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Year</span>
                                    <span className="inline-block w-7">:</span>
                                    {year}
                                    <span className="pl-[-8] md:pl-0"></span>
                                </h2>
                            </div>

                            <div className="max-w-full overflow-x-auto py-4">
                                <table className='w-full table-auto'>
                                    <thead>
                                        <tr className='bg-white text-left dark:bg-meta-4'>
                                            <th className='py-4 border-t border-l font-medium text-center text-black dark:text-white'>
                                                No
                                            </th>
                                            <th className='py-4 px-4 border-t border-l text-center font-medium text-black dark:text-white'>
                                                Keterangan
                                            </th>
                                            <th className='py-4 px-4 border-t text-center border-l border-r font-medium text-black dark:text-white'>
                                                Jumlah
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 1}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Basic salary
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                 {data.gaji_pokok}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 2}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Transportation Allowance
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                 {data.tj_transport}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 3}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Meal allowance
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                 {data.uang_makan}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 4}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Potongan
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                 {data.potongan}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                            </td>
                                            <td className='font-medium border-b border-black dark:border-white py-5 px-2 text-right text-black dark:text-white'>
                                                Total Salary :
                                            </td>
                                            <td className='font-medium border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                 {data.total}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-6 flex justify-between items-center">
                                <div className="font-medium text-black dark:text-white">
                                    <span className="p-6">Pegawai</span>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <span>{nama_pegawai}</span>
                                </div>
                                <div className="font-medium text-black dark:text-white">
                                    <span className="text-right">Karawang, {`${new Date().getDate()} ${bulan} ${tahun}`}</span>
                                    <br />
                                    <span>Finance</span>
                                    <br />
                                    <br />
                                    <span className="p-8 italic text-black dark:text-white">Tanda Tangan</span>
                                </div>
                            </div>
                            <div className="italic text-black dark:text-white mt-30">
                                Dicetak Pada : {`${new Date().getDate()} ${bulan} ${tahun}`}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PrintPdfDataGajiPegawai;
