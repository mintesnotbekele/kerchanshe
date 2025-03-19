import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/molecules/NotFound'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';
import {
  FormAddDataJabatan,
  FormEditDataJabatan,
  FormAddDataKehadiran,
  FormEditDataKehadiran,
  FormAddDataPegawai,
  EmployeeDataEditForm,
  FormAddDataPotongan,
  FormEditDataPotongan,
  PrintPdfLaporanGaji,
  DetailDataGaji,
  PrintPdfSlipGaji,
  PrintPdfLaporanAbsensi,
  PrintPdfDataGajiPegawai
} from '../../components';
import {
  DataPegawai,
  DataJabatan,
  DataKehadiran,
  DataGaji,
  SalaryReport,
  ResportAbscence,
  
  UbahPasswordAdmin,
  DataGajiPegawai,
  UbahPasswordPegawai,
  DataPotongan,
  SalarySlip
} from '../../pages'

const AppRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />

      {/* Route Admin */}
      {/* Master Data Admin */}
      <Route
        path='/data-pegawai'
        element={<DataPegawai />}
      />
      <Route
        path='/data-pegawai/form-data-pegawai/add'
        element={<FormAddDataPegawai />}
      />
      <Route
        path='/data-pegawai/form-data-pegawai/edit/:id'
        element={<EmployeeDataEditForm />}
      />
      <Route
        path='/job-data'
        element={<DataJabatan />}
      />
      <Route
        path='/job-data/form-job-data/add'
        element={<FormAddDataJabatan />}
      />
      <Route
        path='/job-data/form-job-data/edit/:id'
        element={<FormEditDataJabatan />}
      />

      {/* Transaksi Admin */}
      <Route
        path='/attendance-data'
        element={<DataKehadiran />}
      />
      <Route
        path='/attendance-data/form-data-kehadiran/add'
        element={<FormAddDataKehadiran />}
      />
      <Route
        path='/attendance-data/form-data-kehadiran/edit/:id'
        element={<FormEditDataKehadiran />}
      />
      <Route
        path='/data-potongan'
        element={<DataPotongan />}
      />
      <Route
        path='/data-potongan/form-data-potongan/add'
        element={<FormAddDataPotongan />} />
      <Route
        path='/data-potongan/form-data-potongan/edit/:id'
        element={<FormEditDataPotongan />} />
      <Route
        path='/data-gaji'
        element={<DataGaji />}
      />
      <Route
        path='/data-gaji/detail-data-gaji/name/:name'
        element={<DetailDataGaji />}
      />
      <Route
        path='/data-gaji/cetak-gaji/slip-gaji/name/:name'
        element={<PrintPdfSlipGaji />}
      />

      {/* Report Admin */}
      <Route
        path='/report/salary'
        element={<SalaryReport />}
      />
      <Route
        path='/report/salary/print-page'
        element={<PrintPdfLaporanGaji />}
      />
      <Route
        path='/report/absence'
        element={<ResportAbscence />}
      />
      <Route
        path='/report/absence/print-page'
        element={<PrintPdfLaporanAbsensi />}
      />
      <Route
        path='/report/pay-slip'
        element={<SalarySlip />}
      />
      <Route
        path='/report/slip-gaji/print-page'
        element={<PrintPdfSlipGaji />}
      />

      {/* Settings Admin */}
      <Route
        path='/change-password'
        element={<UbahPasswordAdmin />}
      />

      {/* Route Pegawai */}
      {/* Dashboard Employee Salary Data */}
      <Route
        path='/data-gaji-pegawai'
        element={<DataGajiPegawai />}
      />
      <Route
        path='/data-gaji-pegawai/print-page'
        element={<PrintPdfDataGajiPegawai />}
      />
      <Route
        path='/change-employee-password'
        element={<UbahPasswordPegawai />}
      />

      {/* Route Not Found 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default AppRoutes;
