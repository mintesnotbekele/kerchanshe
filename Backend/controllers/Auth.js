import DataPegawai from "../models/DataPegawaiModel.js";
import argon2 from "argon2";
import { verifyUser } from "../middleware/AuthUser.js";

export const Login = async (req, res) => {

  let user = {};
  const pegawai = await DataPegawai.findOne({
    where: {
      username: req.body.username
    }
  });
  

  if (!pegawai) {
    return res.status(404).json({ msg: "Data Employee Not Found" });
  }

  const match = await argon2.verify(pegawai.password, req.body.password);
  
  if (!match) {
    return res.status(400).json({ msg: "Wrong Password" });
  }



console.log("pegawai.id_pegawai")
console.log(pegawai.id_pegawai)
req.session.userId = pegawai.id_pegawai;


  user = {
    id_pegawai: pegawai.id,
    nama_pegawai: pegawai.nama_pegawai,
    username: pegawai.username,
    hak_akses: pegawai.hak_akses
  }

  res.status(200).json({
    id_pegawai: user.id_pegawai,
    nama_pegawai: user.nama_pegawai,
    username: user.username,
    hak_akses: user.hak_akses,
    msg: "Login Successful"
  });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Please Login to Your Account!" });
  }
  const pegawai = await DataPegawai.findOne({
    attributes: ['id', 'nik', 'nama_pegawai', 'username', 'hak_akses'],
    where: {
      id_pegawai: req.session.userId
    }
  });
  if (!pegawai) return res.status(404).json({ msg: "User Not Found" });
  res.status(200).json(pegawai);
}

export const LogOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Cannot log out" });
    res.status(200).json({ msg: "You have logged out" });
  });
}

export const changePassword = async (req, res) => {
  await verifyUser(req, res, () => { });

  const userId = req.userId;

  const user = await DataPegawai.findOne({
    where: {
      id: userId
    }
  });

  const { password, confPassword } = req.body;

  if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password Do Not Match" });

  try {
    const hashPassword = await argon2.hash(password);

    await DataPegawai.update(
      {
        password: hashPassword
      },
      {
        where: {
          id: user.id
        }
      }
    )
    res.status(200).json({ msg: "Password Successfully Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};