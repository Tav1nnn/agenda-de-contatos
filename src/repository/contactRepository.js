const { prisma } = require("./prisma");

const createContact = async (contact, userid) => {
    return await prisma.contacts.create({
        data: {
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            user: {
                connect: {
                    id: userid
                }
            }
        }
    });
}       

const getAllContact = async (id) => {
    return await prisma.contacts.findMany({
        where: {
            usersId:id
        }
    });
}

const existContact = async (id, userid) => {
    return await prisma.contacts.findUnique({
        where: {
            id:id,
            usersId: userid
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