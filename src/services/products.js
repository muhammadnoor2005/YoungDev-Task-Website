import fs from "fs";
import path from "path"

const filePath = path.join(process.cwd(),"src","data","products.json");

//returning all products on website
export async function getProducts(){
    const data = fs.readFileSync(filePath);
    return(JSON.parse(data));
}

