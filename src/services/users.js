import fs from "fs";
import path from "path"
import { hash,compare} from "bcrypt";
import { v4 as uuid } from "uuid";

const filePath = path.join(process.cwd(),"src","data","users.json");

// getting all the users
export function getAll(){
    const data = fs.readFileSync(filePath);
    return(JSON.parse(data));
}

// comparing the user provided email with stored emails in our json file
export function getByEmail(email){
    const data = getAll();
    return data.find(p=>p.email === email);
}

// signups and saves the user in json file
export async function save(fullName,email,password){
    const found = getByEmail(email);

    if(found){
        return("User already exists");
    };
    
    const data = getAll();
    const hashedPass = await hash(password,12);
    
    data.push({
        fullName,
        email,
        password:hashedPass,
        id:uuid(),
    })

    fs.writeFileSync(filePath,JSON.stringify(data));
    return "Signup succesfull";
}

// compares the user provied password and password stoed in json file on login
export async function verifyPass(password,hashedpass){
    const isValid = await compare(password,hashedpass);
    return isValid;
}