const { prisma } = require("./prisma");

const createContact = async (contact) => {
    return await prisma.contacts.create({
        data: contact
    });
}       

const getAllContacts = async () => {
    return await prisma.contacts.findMany();
}

module.exports = {
    create: createContact,
    getAll: getAllContacts
}