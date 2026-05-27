import { hoursLoad } from "../models/schedules-home";
import { url } from "./api-config";
import { homeLoad } from "./home-load";


window.addEventListener("click", async (event) => {
    const cancel = event.target.id   

    const response = await fetch(`${url.baseUrl}/schedules/${cancel}`,{
        method: "DELETE",
    })
    console.log(`${url.baseUrl}/schedules/${cancel}`)
    console.log(cancel)
    
})

