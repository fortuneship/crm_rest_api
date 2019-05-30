/* import express from "express";
import db from "../../db/database";
import Client from "../../model/Client"; */

//import ClientModel from "../../model/Clientmodel";

const router = express.Router();

// const express = require("express");
// const router = express.Router();

// Handle incoming GET requests to /clients
router.get("/", (req, res, next) => {
  /* get all client from array */
  /*  const clients = ClientModel.findAll();
  return res.status(200).send(clients); */
  // return res.status(200).json({
  //   message: "Handling GET requests to /clients",
  //   allClient: clients
  // });
  /* Get all client from mysql database */
  /* db.query(Client.getAllClient(), (err, data) => {
    if (!err) {
      res.status(200).json({
        message: "Clients listed from mysql database.",
        clientId: data
      });
    }
  }); */
});

// Handle incoming POST requests to /clients
router.post("/", (req, res, next) => {
  /** test post request creating an object */
  // const client = {
  //   name: req.body.name,
  //   phone: req.body.phone,
  //   email: req.body.email,
  //   dob: req.body.dob
  // };
  // return res.status(201).json({
  //   message: "Handling POST requests to /clients",
  //   body: "A new client is created successfully",
  //   createdClient: client
  // });
  /** Saving post request in an array */
  /**
       if (!req.body.name && !req.body.phone && !req.body.email && !req.body.dob) {
    return res.status(400).send({ message: "All fields are required" });
  } else {
    const client = ClientModel.create(req.body);
    return res.status(201).send(client);
   
  }
     */
  /**Post request with mysql database */
  /*  //read product information from request
  let client = new Client(
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.dob
  );

  db.query(client.createClient(), (err, data) => {
    res.status(200).json({
      message: "Client created and posted to mysql database.",
      clientId: data
    });
  }); */
});

// Handle incoming GET requests to /clients/clientId
router.get("/:clientId", (req, res, next) => {
  /* Get client by id from array */
  /* const id = ClientModel.findOne(req.params.clientId);

  if (!id) {
    return res.status(404).send({ message: "client not found" });
  } else {
    return res.status(200).send(id);
  } */
  // const id = req.params.clientId;
  // if (id === "special") {
  //   res.status(200).json({
  //     message: "You discovered a special id id",
  //     id: id
  //   });
  // } else {
  //   res.status(200).json({
  //     message: "You passed an id"
  //   });
  // }
  /* Get client by id from mysql database */
  /* let id = req.params.clientId;

  db.query(Client.getClientById(id), (err, data) => {
    if (!err) {
      if (data && data.length > 0) {
        res.status(200).json({
          message: "Client found.",
          client: data
        });
      } else {
        res.status(200).json({
          message: "Client Not found."
        });
      }
    }
  });
});

router.patch("/:clientId", (req, res, next) => {
  const client = ClientModel.findOne(req.params.clientId);
  if (!client) {
    return res.status(404).send({ message: "client not found" });
  } else {
    const updatedClient = ClientModel.update(req.params.clientId, req.body);
    return res.status(200).send(updatedClient);
  } */
  // res.status(200).json({
  //   message: "Updated client"
  // });
});

// Handle incoming DELETE requests to /clients/clientId
router.delete("/:clientId", (req, res, next) => {
  /* Delete client from array */
  /*  const client = ClientModel.findOne(req.params.clientId);
  if (!client) {
    return res.status(404).send({ message: "reflection not found" });
  }
  const ref = ClientModel.delete(req.params.clientId);
  return res.status(204).send(ref); */
  // res.status(200).json({
  //   message: "Deleted client"
  // });
  /* Delete client by id from mysql database */
  /*let id = req.body.clientId;

   db.query(Client.deleteClientById(id), (err, data) => {
    if (!err) {
      if (data && data.affectedRows > 0) {
        res.status(200).json({
          message: `Client deleted with id = ${id}.`,
          affectedRows: data.affectedRows
        });
      } else {
        res.status(200).json({
          message: "Client Not found."
        });
      }
    }
  }); */
});

export default router;
//  module.exports = router;
