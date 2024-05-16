const { create, getAll } = require("../repository/contactRepository");
const yup = require("yup");

async function createContact(req, res) {
    const contact = req.body;
    const schemaInstance = schema(); 
    try {
        await schemaInstance.validate(contact); 
    } catch (error) {
        return res.status(400).json({ "Error": "Schema validation failed", "details": error.errors });
    }

    const newContact = await create(contact);

    if (newContact.id === null) {
        return res.status(400).json({ "Error": "Error creating contact" });
    }

    res.status(201).json(newContact);
}

async function getAllContacts(req, res) {
    const contacts = await getAll();

    res.status(200).json(contacts);
}

function schema () {
    return schema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.string().matches(/^\(\d{2}\)\d{4}-\d{4}$/, "Erro no formato do telefone. Exemplo: (xx)xxxx-yyyy"),
        email: yup.string().email().required()
    })
}

module.exports = {
    createContact,
    getAllContacts
}