import { hoursLoad } from "../models/schedules-home";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export async function createSchedule({id, name, pet, phone, services, day, time}) {
  const morning = document.getElementById("manha");
  const afternoon = document.getElementById("tarde");
  const night = document.getElementById("noite");
    const li = document.createElement("li");
    li.classList.add("schedule");
    li.id = `${id}`;
    const div = document.createElement("div");
    div.classList.add("schedule-details");

    const strong = document.createElement("strong");
    strong.classList.add("label-medium", "hour-scheduled");
    strong.textContent = `${time}`;

    const span = document.createElement("paragraph-medium", "name");
    span.innerHTML = `<strong class ="label-medium">${pet}</strong> / ${name}`;
    span.classList.add("paragraph-medium", "name");

    const p = document.createElement("p");
    p.classList.add("paragraph-medium", "details");
    p.textContent = `${services}`;

    const cancelbtn = document.createElement("p");
    cancelbtn.classList.add("cancel-btn");
    cancelbtn.textContent = "Remover agendamento";
    cancelbtn.id = `${id}`;

    div.append(strong, span, p, cancelbtn);
    li.append(div);
    const hour = dayjs(`${time}`, "HH:mm").hour();
    if (hour <= 12) {
      morning.append(li);
    } else if (hour <= 18) {
      afternoon.append(li);
    } else {
      night.append(li);
    }
  }

