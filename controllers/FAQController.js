import FAQ from "../models/FAQModels.js";

export const getFAQ = async(req, res) =>{
    try {
        const response = await FAQ.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFAQById = async(req, res) =>{
    try {
        const response = await FAQ.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFAQ = async(req, res) =>{
    try {
        await FAQ.create(req.body);
        res.status(201).json({msg: "FAQ Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFAQ = async(req, res) =>{
    try {
        await FAQ.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "FAQ Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFAQ = async(req, res) =>{
    try {
        await FAQ.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "FAQ Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}