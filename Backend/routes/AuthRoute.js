import express from 'express';
import { Login, LogOut, Me} from "../controllers/Auth.js";

const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and session management
 */

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get authenticated user details
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 username:
 *                   type: string
 *                   example: johndoe@example.com
 *       401:
 *         description: Unauthorized, user not logged in
 */

router.get('/me', Me);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: mintesnot
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id_pegawai:
 *                      type: string
 *                      example: 1
 *                  nama_pegawai: 
 *                      type: string
 *                      example: 1
 *                  username:
 *                      type: string
 *                      example: 1
 *                  hak_akses:
 *                      type: string
 *                      example: 1
 *                  msg:  
 *                      type: string
 *                      example: 1
 *                      
 *       400:
 *         description: Invalid email or password
 */
router.post('/login', Login);
/**
 * @swagger
 * /logout:
 *   delete:
 *     summary: User logout
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       401:
 *         description: Unauthorized, user not logged in
 */
router.delete('/logout', LogOut);

export default router;