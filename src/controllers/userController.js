const yup = require("yup");
const { create, exist } = require("../repository/userRepository");
const bcrypy = require("bcrypt");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
    const user = req.body;
    const schemaValidate = schema();

    try {
        await schemaValidate.validate(user);

    } catch (error) {
        return res.status(400).json({ "Error": "Schema validation failed", "details": error.errors });
    }

    try {
        const existUser = await exist(user.email);

        if(existUser){
            return res.status(400).json({"Error": "User exist"});
        }

        const password = bcrypy.hashSync(user.password, 10);
        user.password = password;

        const newUser = await create(user);

        if(!newUser.id){
            return res.status(400).json({ "Error": "User not created" });
        }

        delete newUser.password;
        return res.status(201).json(newUser);

    } catch (error) {
        return res.status(500).json({ "Error": "Internal server error", "details": error.message });
    }
}

async function loginUser(req, res) {
    const user = req.body;
    
   try {
        const existUser = await exist(user.email);

        if(!existUser){
            return res.status(401).json({ "Error": "invalid credential" });
        }

        const isPasswordTheSame = bcrypy.compareSync(user.password, existUser.password);

        if(!isPasswordTheSame){
            return res.status(401).json({ "Error": "invalid credential" });
        }

        const token = jwt.sign({
            id: existUser.id,
            email: existUser.email
        }, "shhh");

        return res.status(200).json({"token": token});

   } catch (error) {
        return res.status(500).json({"Error": "Internal server error", "details": error.message});
   }

}

function schema (){
    return yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });
}

module.exports = {
    createUser,
    loginUser  
}
