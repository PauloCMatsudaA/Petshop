import { nowDay } from "./actualday";
import { hoursLoad } from "../models/schedules-home";
import { createSchedule } from "./create-schedule";
const calendar = document.getElementById("date");

calendar.value = nowDay();
calendar.min = nowDay();
const selected = nowDay();
console.log(selected)
export async function selectedDate(selected) {
  await hoursLoad().then((Response) => {
    for (let i of Response) {
      const id = i.id;
      const name = i.name;
      const pet = i.pet;
      const phone = i.phone;
      const services = i.services;
      const day = i.day;
      const time = i.time;
      if (day === selected) {
        try {
            createSchedule({ id, name, pet, phone, services, day, time });
            console.log("Aqui")
        } catch (error) {
            console.log(error)
        }
      } else if (day != selected) {
        const element = document.getElementById(`${id}`);
        if(element === null){
            continue
        } else{
        element.remove();
      }}
    }
  });
}

calendar.addEventListener("input", async (event) => {
     
    const date = event.target.value

        selectedDate(date)
});