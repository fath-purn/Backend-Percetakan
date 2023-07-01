import bcrypt from "bcrypt";
import User from "../models/UserModels.js";

// export const getUsers = async(req, res) => {
//     try {
//         const users = await User.findAll();
//         const decryptedUsers = await Promise.all(
//             users.map(async (user) => {
//                 const { id, username, password } = user;
//                 const decryptedPassword = await bcrypt.compare(
//                     req.body.password,
//                     password
//                 );
//                 return {
//                     id,
//                     username,
//                     password: decryptedPassword ? req.body.password : "********",
//                 };
//             })
//         );
//         res.status(200).json(decryptedUsers);
//     } catch (error) {
//             console.log("haiii" + error.message);
//     }
// };

// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findOne({
//         where: {
//             id: req.params.id,
//         },
//         });
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         const isPasswordMatch = await bcrypt.compare(
//         req.body.password,
//         user.password
//         );
//         if (!isPasswordMatch) {
//             return res.status(401).json({ error: "Invalid password" });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ error: "Server error" });
//     }
// };

// export const createUser = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const saltRounds = 10; // Number of hashing rounds
//         const hashedPassword = await bcrypt.hash(password, saltRounds);
//         const user = {
//             username,
//             password: hashedPassword,
//         };
//         await User.create(user);
//         res.status(201).json({ msg: `User Created ${username}` });
//         } catch (error) {
//             console.log(error.message);
//     }
// };

// export const updateUser = async(req, res) =>{
//     try {
//         const user = await User.findOne({
//           where: {
//             id: req.params.id,
//           },
//         });
//          if (!user) {
//           return res.status(404).json({ error: "User not found" });
//         }
//          await User.update(req.body, {
//           where: {
//             id: req.params.id,
//           },
//         });
//          res.status(200).json({ msg: "User Updated" });
//       } catch (error) {
//             console.log(error.message);
//       }
//     };
// export const deleteUser = async (req, res) => {
//     try {
//         const user = await User.findOne({
//             where: {
//                 id: req.params.id,
//         },
//     });
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//     }
//         await User.destroy({
//             where: {
//                 id: req.params.id,
//         },
//     });
//         res.status(200).json({ msg: "User Deleted" });
//     } catch (error) {
//         onsole.log(error.message);
//     }
// }


export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}