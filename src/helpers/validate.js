const { validationResult } = require("express-validator");
const resposeApi = require("../helpers/responseApi");

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    const structureApi = new resposeApi();

    structureApi.setState("403", "info", "Error con validaciones");
    structureApi.setResult( error.array()[0].msg );
    return res.json(structureApi.toResponse());
  }
};

module.exports = { validateResult };
