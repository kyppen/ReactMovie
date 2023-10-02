
import express from "express";

export const userHandler = express.Router();

export const userList = [
    {
    username: "Fam",
    password: "flavor"
    }
]

function AuthenticateLogin(credentials){

    for(let i = 0; i < userList.length; i++){
        if(userList[i].username.toLowerCase() == credentials.username.toLowerCase()){
            console.log("username accepted")
            if(userList[i].password.toLowerCase() == credentials.password.toLowerCase()){
                console.log("password accepted")
                return true;
            }
        }
    }
    return false;
}

userHandler.post("", (req, res) =>{
    console.log("userApi.get activated or smth?")
    //console.log(req.body)
    if(AuthenticateLogin(req.body)){
        console.log("access granted")
        
    }

})