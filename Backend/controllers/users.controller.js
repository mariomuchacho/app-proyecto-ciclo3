const UserSchema = require('../models/user')


const getUser = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            let usuario = await UserSchema.findById(req.body.id);
            res.json({ usuario });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede obtener el usuario sin el id" })
    }
}

const getUsers = async (req, res) => {
    try {
        let usuarios = await UserSchema.find();
        res.json({ usuarios });
    }
    catch (err) {
        console.log(err);
    }
}

const createUser = async (req, res) => {
    if (typeof req.body != 'undefined') {
        let user = new UserSchema(req.body);
        try {
            await user.save();
            res.json({ msg: 'Se ha creado el usuario ' + user.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede crear el usuario, revisar los parametros" })
    }
}

const updateUser = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await UserSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                   nombreUsuario: req.body.nombreUsuario,
                   rollUsuario: req.body.rollUsuario,
                   estadoUsuario: req.body.estadoUsuario
                }
            );
            res.json({ msg: 'Se ha actualizado el usuario ' + req.body.id })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede actualizar el usuario, revisar los parametros" })
    }
}


const deleteUser = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            await UserSchema.findOneAndRemove(req.body.id);
            res.json({ msg: 'Se ha eliminado el usuario ' + req.body.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede eliminar el usuario sin el id" })
    }
}

module.exports.getUser = getUser;
module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
