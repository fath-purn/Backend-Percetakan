import Layanan from "../models/LayananModels.js";
import path from "path";
import fs from "fs";

export const getLayanan = async(req, res)=>{
    try {
        const response = await Layanan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getLayananById = async(req, res)=>{
    try {
        const response = await Layanan.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createLayanan = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.nama;
    const deskripsi = req.body.deskripsi;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/layanan/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/layanan/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Layanan.create({
                nama: name, 
                deskripsi: deskripsi,
                image: fileName, 
                url: url
            });
            res.status(201).json({msg: "Layanan Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateLayanan = async(req, res)=>{
    const layanan = await Layanan.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!layanan) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = layanan.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/layanan/${layanan.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/layanan/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.nama;
    const deskripsi = req.body.deskripsi;
    const url = `${req.protocol}://${req.get("host")}/images/layanan/${fileName}`;
    
    try {
        await layanan.update({
            nama: name, 
            deskripsi: deskripsi,
            image: fileName, 
            url: url
        },{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "layanan Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLayanan = async(req, res)=>{
    const layanan = await Layanan.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!layanan) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/layanan/${layanan.image}`;
        fs.unlinkSync(filepath);
        await Layanan.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Layanan Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}
