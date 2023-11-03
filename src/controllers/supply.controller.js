const SupplyModel = require("../models/supply.model");
const resposeApi = require("../helpers/responseApi");

// list all supplies
const getSupplies = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const listSupplies = await SupplyModel.find();
    if (listSupplies.length > 0) {
      structureApi.setState("200", "success", "Insumos encontrados");
      structureApi.setResult(listSupplies);
    } else {
      structureApi.setState("200", "success", "No hay usuarios registrados");
      structureApi.setResult(listSupplies);
    }
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// list one supply
const getSupply = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const Supply = await SupplyModel.findById(req.params.id).populate()
    structureApi.setState("200", "success", "Insumo encontrado");
    structureApi.setResult(Supply);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

//  create a supply
const createSupply = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const newSupply = await SupplyModel.create(req.body);
    structureApi.setState("200", "success", "Insumo registrado con éxito");
    structureApi.setResult(newSupply);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// update a supply
const updateSupply = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const Supply = await SupplyModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    structureApi.setState("200", "success", "Insumo actualizado con éxito");
    structureApi.setResult(Supply);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};

// delete a supply
const deleteSupply = async (req, res) => {
  const structureApi = new resposeApi();
  try {
    const Supply = await SupplyModel.findByIdAndDelete(req.params.id);
    await contractModel.deleteMany({Supply: req.params.id});
    structureApi.setState("200", "success", "Insumo eliminado con éxito");
    structureApi.setResult(Supply);
  } catch (error) {
    structureApi.setState("500", "error", "Error en la solicitud");
    structureApi.setResult(error);
  }
  res.json(structureApi.toResponse());
};


module.exports = { getSupplies, getSupply, createSupply, updateSupply, deleteSupply };
