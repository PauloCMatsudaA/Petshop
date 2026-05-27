import { hoursLoad } from "./schedules-home";
import dayjs from "dayjs";
import { cards } from "../objects/forms-object";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { createSchedule } from "../services/create-schedule";
dayjs.extend(customParseFormat);
import { selectedDate } from "../services/selectdate";

export async function homeLoad() {
  try {
    for (let i of cards) {
      const sectionCard = document.createElement("section");
      const headerCard = document.createElement("header");
      const img = document.createElement("img");
      const tittle = document.createElement("h3");
      const span = document.createElement("span");

      sectionCard.classList.add("schedules-cards");
      headerCard.classList.add("schedule-tittles");

      img.src = `src/assets/${i.image[0]}.svg`;
      img.alt = `${i.image[1]}`;

      tittle.classList.add("period-name", "label-large");
      tittle.textContent = `${i.name}`;

      span.classList.add("label-large", "tittle-hour");
      span.innerHTML = `${i.time}`;

      headerCard.append(img, tittle, span);
      sectionCard.append(headerCard);

      document.body.append(sectionCard);

      const ul = document.createElement("ul");
      ul.id = `${i.id}`;
      sectionCard.append(ul);
      ul.classList.add("schedule-list");
    }
    const calendar = document.getElementById("date");
    const selected = calendar.value;
    await selectedDate(selected);
    const sectionBtn = document.createElement("section");
    const divBtn = document.createElement("div");
    const btn = document.createElement("button");

    sectionBtn.classList.add("btn-section");
    divBtn.classList.add("btn-container");
    btn.classList.add("btn");
    btn.type = "submit";
    btn.innerHTML = "NOVO AGENDAMENTO";
    btn.id = "schedule-button";

    divBtn.append(btn);
    sectionBtn.append(divBtn);
    document.body.append(sectionBtn);
  } catch (error) {
    alert("Erro ao carregar popup, por favor tente novamente mais tarde", error)
  }
}
