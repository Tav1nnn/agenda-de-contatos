const express = require("express");
const router = express.Router();
const { createContact, getAllContacts,  updateContact, deleteContact} = require("../controllers/contactController");

router.post("/contact", createContact);
router.get("/contact", getAllContacts);
router.put("/contact/:id", updateContact);
router.delete("/contact/:id", deleteContact)

module.exports = { router };