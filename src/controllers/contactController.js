    const { create, getAll, exist, update, deleteC} = require("../repository/contactRepository");
    const yup = require("yup");

async function createContact(req, res) {
    const contact = req.body;
    const schemaValidate = schema();
    try {
        await schemaValidate.validate(contact);
    } catch (error) {
        return res.status(400).json({ "Error": "Schema validation failed", "details": error.errors });
    }

    try {
        const newContact = await create(contact, req.user.id);
        if (!newContact.id) {
            return res.status(400).json({ "Error": "Error creating contact" });
        }

        res.status(201).json(newContact);
    } catch (error) {
        return res.status(500).json({ "Error": "Internal server error", "details": error.message });
    }
}

async function getAllContacts(req, res) {
    try {
        const contacts = await getAll(req.user.id);
        res.status(200).json(contacts);
    } catch (error) {
        return res.status(500).json({ "Error": "Internal server error", "details": error.message });
    }
}

async function updateContact(req, res) {
    const id = Number(req.params.id);

    try {
        const existContact = await exist(id, req.user.id);

        if(!existContact){
            return res.status(404).json({"Error": "Contact not found"})
        }

    } catch (error) {
        return res.status(500).json({"Error": "Internal server error", "details": error.message})
    }

    const contact = req.body;
    const schemaValidate = schema();

    try {
        await schemaValidate.validate(contact);
    } catch (error) {
        return res.status(400).json({ "Error": "Schema validation failed", "details": error.errors });
    }

    try {
        const newContact = await update(id,contact);
        return res.status(200).json(newContact);
    } catch (error) {
        return res.status(400).json({ "Error": "Schema validation failed", "details": error.errors });

    }

}

async function deleteContact (req, res) {
    const id = Number(req.params.id);

    try {
        const existContact = await exist(id, req.user.id);

        if(!existContact){
            return res.status(404).json({"Error": "Contact not found"})
        }

    } catch (error) {
        return res.status(500).json({"Error": "Internal server error", "details": error.message})
    }

    try {
        await deleteC(id);
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({"Error": "Internal server error", "details": error.message})
    }
}

function schema() {
    return yup.object().shape({
        name: yup.string().required(),
        phone: yup.string().matches(/^\(\d{2}\)\d{5}-\d{4}$/, "Erro no formato do telefone. Exemplo: (xx)xxxxx-yyyy"),
        email: yup.string().email().required()
    })
}

module.exports = {
    createContact,
    getAllContacts,
    updateContact,
    deleteContact
}