const express = require("express");
const router = express.Router();
const { createContact, getAllContacts,  updateContact, deleteContact} = require("../controllers/contactController");

router.post("/v1/contact", createContact);
router.get("/v1/contact", getAllContacts);
router.put("/v1/contact/:id", updateContact);
router.delete("/v1/contact/:id", deleteContact)

module.exports = { router };