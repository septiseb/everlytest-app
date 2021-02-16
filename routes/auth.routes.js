//Importaciones
const express = require("express");
const router = express.Router();
const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

//Variables
const roundSalt = 10;
const positionArray = [
  "Analista de Reclutamiento",
  "Gerente de RH",
  "Reclutador Jr",
  "Recultador Sr",
  "Otros",
];
const sectorArray = [
  "Educación",
  "Agricultura y Ganadería",
  "Legal",
  "Alimentos",
  "Comercio",
  "Construcción",
  "Energía y Agua",
  "Seguros",
  "Hosteleria y Turismo",
  "Tecnología",
  "Telecomunicaciones",
  "Transporte",
  "Automotriz",
  "Otros",
];

//Rutas
router.get("/signup", (req, res, next) => {
  res.render("auth/signup", { position: positionArray, sector: sectorArray });
});

router.post("/signup", async (req, res, next) => {
  const {
    name,
    email,
    password,
    lastName,
    company,
    sector,
    position,
  } = req.body;
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (!name || !email || !password || !lastName || !company) {
    res.render("auth/signup", {
      errorMessage:
        "Todos los campos son mandatorios.Por favor, introducir usario, email y contraseña.",
      position: positionArray,
      sector: sectorArray,
    });
    return;
  }

  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      errorMessage:
        "Contraseña debe tener mínimo 6 carácteres, y por lo menos un número, una minúscula y una mayúscula.",
      position: positionArray,
      sector: sectorArray,
    });
    return;
  }

  try {
    const saltPass = await bcrypt.genSalt(roundSalt);
    const passwordHash = await bcrypt.hash(password, saltPass);

    const user = await User.create({
      name,
      email,
      password: passwordHash,
      lastName,
      company,
      sector,
      position,
    });
    req.session.currentUser = user;

    res.redirect("/user-profile");
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      res.status(500).render("auth/signup", { errorMessage: error.message });
    } else if (e.code === 11000) {
      res.status(500).render("auth/signup", {
        errorMessage:
          "Usuario y correo deben ser unicos. El usuario o contraseña ya estan registrados",
        position: positionArray,
        sector: sectorArray,
      });
    }
    next(e);
  }
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email });
    
  if (!foundUser) {
    res.render("auth/login", {
      errorMessage:
        "El Correo no fue encontrado. Por favor, ir al apartado de registro.",
    });
  } else if (bcrypt.compare(password, foundUser.password)) {
    req.session.currentUser = foundUser;
    res.redirect("/user-profile");
  } else {
    res.render("auth/login", { errorMessage: "Contraseña Incorrecta" });
  }
});

router.get("/user-profile", (req, res, next) => {
  const userLog = req.session.currentUser;
  res.render("user/dashboard", {userLog});
});

module.exports = router;
