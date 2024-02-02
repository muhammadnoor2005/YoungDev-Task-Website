import {save} from "@/services/users";

export default async function handler(req,res){
    //if method ont POST thenn 404
    if (req.method !== "POST"){
        res.status(404).send();
    }

    // if method is POST 
    const {fullName,email,password} = req.body;

    try{
        const resp = await save(fullName,email,password);
        res.status(201).send(resp);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}
