const { prisma } = require("./prisma");

const createUser = async (user) => {
    return await prisma.users.create({
        data: user
    });
}

const existUser = async (email) => {
    return await prisma.users.findUnique({
        where: {
            email: email
        }
    });
}

module.exports = {
    create: createUser,
    exist: existUser
}