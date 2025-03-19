import express from 'express';

/* === import Middleware === */
import { adminOnly, verifyUser } from '../middleware/AuthUser.js';

/* === import Controllers === */
import {
    getDataPegawai,
    getDataPegawaiByID,
    createDataPegawai,
    updateDataPegawai,
    deleteDataPegawai,
    getDataPegawaiByNik,
    getDataPegawaiByName,
} from '../controllers/DataPegawai.js';

import {
    getDataJabatan,
    createDataJabatan,
    updateDataJabatan,
    deleteDataJabatan,
    getDataJabatanByID
} from "../controllers/DataJabatan.js";

import {
    viewDataKehadiran,
    createDataKehadiran,
    updateDataKehadiran,
    deleteDataKehadiran,
    viewDataKehadiranByID,
    viewDataGajiByName,
} from "../controllers/TransaksiController.js";

import {
    createDataPotonganGaji,
    deleteDataPotongan,
    viewDataPotonganByID,
    updateDataPotongan,
    viewDataPotongan
} from "../controllers/TransaksiController.js";

import {
    viewDataGajiPegawai,
    viewDataGajiPegawaiByMonth,
    viewDataGajiPegawaiByYear
} from "../controllers/TransaksiController.js";

import {
    viewLaporanAbsensiPegawaiByMonth,
    viewLaporanAbsensiPegawaiByYear,
    viewLaporanGajiPegawai,
    viewLaporanGajiPegawaiByMonth,
    viewLaporanGajiPegawaiByName,
    viewLaporanGajiPegawaiByYear,
    viewSlipGajiByMonth,
    viewSlipGajiByName,
    viewSlipGajiByYear,
} from "../controllers/LaporanController.js";

import { LogOut, changePassword } from '../controllers/Auth.js';
import {
    dashboardPegawai,
    viewDataGajiSinglePegawaiByMonth,
    viewDataGajiSinglePegawaiByYear
} from '../controllers/Pegawai.js';

const router = express.Router();

// Admin Route :

/* ==== Master Data ==== */


/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management APIs
 */

/**
 * @swagger
 * /employee_data:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of employees retrieved successfully
 *       401:
 *         description: Unauthorized
 */

// Data Pegawai
router.get('/employee_data', verifyUser, adminOnly, getDataPegawai);

/**
 * @swagger
 * /data_pegawai/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     tags: [Employees]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee data retrieved successfully
 *       404:
 *         description: Employee not found
 */

router.get('/employee_data/id/:id', verifyUser, adminOnly, getDataPegawaiByID);

/**
 * @swagger
 * /employee_data:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               nik:
 *                 type: string
 *                 example: "12345678"
 *               position:
 *                 type: string
 *                 example: Manager
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Bad request
 */

router.get('/employee_data/nik/:nik', verifyUser, adminOnly, getDataPegawaiByNik);
/**
 * @swagger
 * /employee_data/{id}:
 *   patch:
 *     summary: Update employee details
 *     tags: [Employees]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               position:
 *                 type: string
 *                 example: Supervisor
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *       404:
 *         description: Employee not found
 */

router.get('/employee_data/name/:name', verifyUser, getDataPegawaiByName);
router.post('/employee_data',verifyUser, adminOnly, createDataPegawai);
router.patch('/employee_data/:id', verifyUser, adminOnly, updateDataPegawai);
/**
 * @swagger
 * /employee_data/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employees]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 */

router.delete('/employee_data/:id', verifyUser, adminOnly, deleteDataPegawai);
router.patch('/employee_data/:id/change_password', verifyUser, adminOnly, changePassword);
// Data Jabatan
router.get('/data_jabatan', verifyUser, adminOnly, getDataJabatan);
router.get('/data_jabatan/:id', verifyUser, adminOnly, getDataJabatanByID);
router.post('/data_jabatan', verifyUser, adminOnly, createDataJabatan);
router.patch('/data_jabatan/:id', verifyUser, adminOnly, updateDataJabatan);
router.delete('/data_jabatan/:id', verifyUser, adminOnly, deleteDataJabatan);

/* ==== Transaksi  ==== */
// Data Kehadiran
router.get('/data_kehadiran', verifyUser, adminOnly, viewDataKehadiran);
router.get('/data_kehadiran/:id', verifyUser, adminOnly, viewDataKehadiranByID);
router.post('/data_kehadiran',verifyUser, adminOnly, createDataKehadiran);
router.patch('/data_kehadiran/update/:id',verifyUser, adminOnly, updateDataKehadiran);
router.delete('/data_kehadiran/:id', verifyUser, adminOnly, deleteDataKehadiran);
// Data Potongan
router.get('/data_potongan', adminOnly, verifyUser, viewDataPotongan);
router.get('/data_potongan/:id', adminOnly, verifyUser, viewDataPotonganByID);
router.post('/data_potongan', adminOnly, verifyUser, createDataPotonganGaji);
router.patch('/data_potongan/update/:id', adminOnly, verifyUser, updateDataPotongan);
router.delete('/data_potongan/:id', adminOnly, verifyUser, deleteDataPotongan);
// Data Gaji
router.get('/data_gaji_pegawai', viewDataGajiPegawai);
router.get('/data_gaji/name/:name', verifyUser, viewDataGajiByName);
router.get('/data_gaji_pegawai/month/:month', viewDataGajiPegawaiByMonth);
router.get('/data_gaji_pegawai/year/:year', viewDataGajiPegawaiByYear);

/* ====  Laporan  ==== */
// laporan Gaji Pegawai
router.get('/laporan/gaji',verifyUser, adminOnly, viewLaporanGajiPegawai);
router.get('/laporan/gaji/name/:name',verifyUser, adminOnly, viewLaporanGajiPegawaiByName);
router.get('/laporan/gaji/month/:month', verifyUser, adminOnly,viewLaporanGajiPegawaiByMonth);
router.get('/laporan/gaji/year/:year', verifyUser, adminOnly,viewLaporanGajiPegawaiByYear);
// Laporan Absensi Pegawai
router.get('/laporan/absensi/month/:month', verifyUser, adminOnly,viewLaporanAbsensiPegawaiByMonth);
router.get('/laporan/absensi/year/:year', verifyUser, adminOnly,viewLaporanAbsensiPegawaiByYear);
// Slip Gaji Pegawai
router.get('/laporan/slip_gaji/name/:name', verifyUser, adminOnly,viewSlipGajiByName);
router.get('/laporan/slip_gaji/month/:month',verifyUser, adminOnly, viewSlipGajiByMonth);
router.get('/laporan/slip_gaji/year/:year',verifyUser, adminOnly, viewSlipGajiByYear);

/* ==== Ubah Password ==== */
router.patch('/change_password', verifyUser, changePassword);

/* ==== Logout ==== */
router.delete('/logout', LogOut);

// Pegawai Route :
/* ==== Dashboard ==== */
router.get('/dashboard', verifyUser, dashboardPegawai);
/* ==== Data Gaji ==== */
router.get('/data_gaji/month/:month', verifyUser, viewDataGajiSinglePegawaiByMonth);
router.get('/data_gaji/year/:year', verifyUser, viewDataGajiSinglePegawaiByYear);
/* ==== Ubah Password ==== */
router.patch('/change_password', verifyUser, changePassword);
/* ==== Logout ==== */
router.delete('/logout', LogOut);


export default router;