const express = require("express");
import db from "../../config/database2";
const Client2 = require("../../model/Clients2");

const router = express.Router();

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", async (req, res) => {
  const clients = await Client2.findAll();
  return res.status(200).send(clients);
});

router.post("/", async (req, res, next) => {
  if (!req.body.name && !req.body.phone && !req.body.email && !req.body.dob) {
    return res.status(400).send({ message: "All fields are required" });
  } else {
    const client = await Client2.create(req.body);
    return res.status(201).send(client);
  }
});

router.get("/:clientId", async (req, res, next) => {
  /* Get client by id from array */
  const id = await Client2.findByPk(req.params.clientId);

  if (!id) {
    return res.status(404).send({ message: "client not found" });
  } else {
    return res.status(200).send(id);
  }
});

router.patch("/:clientId", async (req, res, next) => {
  const client =  req.params.clientId;

  const { name } = req.body;

  if (!client) {
    return res.status(404).send({ message: "client not found" });
  } 
     const updatedClient = await Client2.update(
      { name: name}, 
      {
      
      where: {id: client}
    });
    return res.status(200).send(updatedClient);


  /*  const updatedClient = await Client2.update({ where: { client } });
      return res.status(200).send(updatedClient); */

  /* if (!client) {
    return res.status(404).send({ message: "client not found" });
  } else {
    const updatedClient = Client2.update(req.params.clientId, req.body);
    return res.status(200).send(updatedClient);
  }
 */
  // res.status(200).json({
  //   message: "Updated client"
  // });
});

router.delete("/:clientId", async (req, res, next) => {
  
  const client = req.params.clientId;
  if (!client) {
    return res.status(404).send({ message: "client not found" });
  }
  const ref = Client2.destroy({
    where: {id: client}
  });
  return res.status(204).send(ref);

  // res.status(200).json({
  //   message: "Deleted client"
  // });
});

module.exports = router;
