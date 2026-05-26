import { openHours } from "../hours";
import { url } from "./api-config";


export async function schedule({id, name, pet, phone, services, day, time}) {
    const open = openHours
    try{
         const responte = await fetch(`${url.baseUrl}/schedules`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, pet, phone, services, day, time}),
        })
    }catch(error){
        console.log(error)
    }

}