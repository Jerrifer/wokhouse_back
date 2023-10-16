const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate");
const UserModel = require("../models/user.model");

const validateUser = [

  check("first_name")
    .exists().withMessage("Debe ingresar el nombre del usuario")
    .isLength({max:50}).withMessage("El nombre del usuario no puede tener más de 50 digitos"),

  check("last_name")
    .exists().withMessage("Debe ingresar los apellidos del usuario")
    .isLength({max:50}).withMessage("El apellidos del usuario no puede tener más de 50 digitos"),

  check("password")
    .exists().withMessage("Debe ingresar una contraseña")
    .isLength({max:16}).withMessage("La contraseña del usuario no puede tener más de 16 digitos")
    .isLength({min:8}).withMessage("La contraseña del usuario no puede tener menos de 8 digitos"),

  check("email")
    .exists().withMessage("Debe ingresar un correo electrónico")
    .isEmail().withMessage("Debe ingresar un correo electrónico válido")
    .isLength({max:50}).withMessage("El acorreo electrónico no puede tener más de 50 digitos"),

  check("contact_number")
    .exists().withMessage("Debe ingresar un número de contacto")
    .isLength({max:10}).withMessage("El apellidos del usuario no puede tener más de 10 digitos"),

  check("document_number")
    .exists().withMessage("Debe ingresar un número de identificación")
    .isLength({max:10}).withMessage("El número de identificación no puede tener más de 10 digitos"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUserById = [
  param("id").custom((value) => {
    return UserModel.findById(value).then((user) => {
      if (!user) {
        return Promise.reject(
          "El usuario no está registrado"
        );
      }
    });
  }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateUser, validateUserById };
