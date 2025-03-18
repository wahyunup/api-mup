import userModel from "../models/userModel.js";

export const getUser = async (req, res) => {
try {
    const response = await userModel.findAll()
    res.status(200).json(response)
} catch (error) {
    console.log(error.message);
}
}


export const getUserById = async (req, res) => {
try {
    const response = await userModel.findOne({
        where : {
            id : req.params.id
        }
    })
    res.status(200).json(response)
} catch (error) {
    console.log(error.message);
}
}

export const createUser = async (req, res) => {
try {
    await userModel.create(req.body)
    res.status(201).json({msg: "user created"})
} catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message })
}
}

export const updateUser = async (req, res) => {
try {
    await userModel.update(req.body, {
        where : {
            id : req.params.id
        }
    })
    res.status(200).json({msg: "user updated"})
} catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message })
}
}

export const deleteUser = async (req, res) => {
try {
    await userModel.destroy({
        where : {
            id : req.params.id
        }
    })
    res.status(200).json({msg: "user deleted"})
} catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message })
}
}