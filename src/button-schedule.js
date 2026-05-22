import { createModal } from "./services/modal-create";
import { formsObject } from "./objects/forms-object";
const button = document.getElementById("schedule-button");
const modal = document.getElementById("modal-id");

button.onclick = (event) => {
  event.preventDefault();
  createModal(formsObject);
  const date = document.getElementById("date")
  console.log(date.value)

};
