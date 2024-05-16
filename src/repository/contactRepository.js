const { prisma } = require("./prisma");

const createContact = async (contact) => {
    return await prisma.contacts.create({
        data: contact
    });
}       

const getAllContact = async () => {
    return await prisma.contacts.findMany();
}

const existContact = async (id) => {
    return await prisma.contacts.findUnique({
        where: {
            id:id
        },
    });
}

const updateContact = async (id, contact) => {
    return await prisma.contacts.update({
       data: contact,
       where: {
        id:id
       }
    });
}

const deleteContact = async (id) => {
    return await prisma.contacts.delete({
        where: { id:id}
    });
}

module.exports = {
    create: createContact,
    getAll: getAllContact,
    exist: existContact,
    update: updateContact,
    deleteC: deleteContact
}