import express from "express";
const router = express.Router();
export default router;
import { createFiles, getFiles } from "#db/queries/files";

router
    .route("/")
    .get(async (req,res)=> { 
        const files = await getFiles();
        res.send(files);
    })
      .post(async (req, res) => {
    if (!req.body) return res.status(400).send("Request body required.");}
    const {fileId, file_name} = req.body
    if(!file_name|| !fileId){
        return res
        .status(400)
        .send("Request body needs: fileId, file_name");
    }
    const files = await createFiles( name,size, folder_id);
    res.status(201).send(files); 
