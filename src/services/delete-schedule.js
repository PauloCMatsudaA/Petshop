import { hoursLoad } from "../models/schedules-home";
import { url } from "./api-config";
import { homeLoad } from "../models/home-load";


window.addEventListener("click", async (event) => {
    const cancel = event.target.id   
    const cancelBtnClass = event.target.className
    if(cancelBtnClass === "cancel-btn"){
        const li = document.getElementById(`${cancel.toString()}`)
        try {
            const response = await fetch(`${url.baseUrl}/schedules/${cancel}`,{
            method: "DELETE",
        })
        } catch (error) {
            console.log(error)
        }
       
        li.remove()
        
    }


})

