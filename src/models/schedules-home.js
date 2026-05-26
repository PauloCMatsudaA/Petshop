import { url } from "../services/api-config";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { cards } from "../objects/forms-object";
dayjs.extend(customParseFormat);

export async function hoursLoad() {
  const hours = await fetch(`${url.baseUrl}/schedules`).then((response) =>
    response.json(),
  );

  return hours;
}

document.addEventListener("DOMContentLoaded", async () => {
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
    sectionCard.append(ul)
    ul.classList.add("schedule-list")
  }
   await hoursLoad().then((data) => {
      const morning = document.getElementById("manha");
      const afternoon = document.getElementById("tarde");
      const night = document.getElementById("noite");

      for (let i of data) {
        const li = document.createElement("li");
        li.classList.add("schedule");

        const div = document.createElement("div");
        div.classList.add("schedule-details");

        const strong = document.createElement("strong");
        strong.classList.add("label-medium", "hour-scheduled");
        strong.textContent = `${i.time}`;

        const span = document.createElement("paragraph-medium", "name");
        span.innerHTML = `<strong class ="label-medium">${i.pet}</strong> / ${i.name}`
        span.classList.add("paragraph-medium", "name")
        
        const p = document.createElement("p");
        p.classList.add("paragraph-medium", "details");
        p.textContent = `${i.services}`

        const cancelbtn = document.createElement("p")
        cancelbtn.classList.add("cancel-btn")
        cancelbtn.textContent = "Remover agendamento"

        div.append(strong, span, p, cancelbtn)
        li.append(div)
        const hour = dayjs(`${i.time}`, "HH:mm").hour();
        if(hour <= 12){
            morning.append(li)
        }else if(hour <=18){
            afternoon.append(li)
        }else{
            night.append(li)
        }    
      }
    });
});
