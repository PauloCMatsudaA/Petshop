import { createModal } from "../services/modal-create";
import { formsObject } from "../objects/forms-object";
import { schedule } from "../services/schedule";


const button = document.getElementById("schedule-button");
const modal = document.getElementById("modal-id");

button.onclick = async (event) => {
  event.preventDefault();
  createModal(formsObject);
  const scheduleBtn = document.getElementById("schedule-send");
  scheduleBtn.onclick = async (event) => {
    
    event.preventDefault();
    const nameInput = document.getElementById("User");
    const petInput = document.getElementById("Pet");
    const numberInput = document.getElementById("Phone");
    const servicesInput = document.getElementById("Services");
    const dateInput = document.getElementById("Calendar");
    const hourInput = document.getElementById("Clock");

    const id = new Date().getTime().toString();
    const name = nameInput.value.trim();
    const pet = petInput.value.trim();
    const phone = numberInput.value.trim();
    const services = servicesInput.value.trim();
    const day = dateInput.value;
    const time = hourInput.value;

    
    try {
      await schedule({id, name, pet, phone, services, day, time})
    } catch (error) {
      console.log(error)
    }


}}
