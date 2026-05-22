import { formsObject } from "../objects/forms-object";

export function createModal(formsObject) {
  const newModal = document.createElement("div");
  const popup = document.createElement("div");
  const closeBtn = document.createElement("img");
  const tittle = document.createElement("h2");
  const paragraph = document.createElement("p");
  const forms = document.createElement("form");
  const divDate = document.createElement("div");
  const dateLabel = document.createElement("div");

  newModal.classList.add("modal");
  popup.classList.add("popup");
  popup.setAttribute("id", "form-schedule");

  tittle.innerHTML = "Agende um atendimento";
  tittle.classList.add("tittle");

  paragraph.innerHTML =
    "Preencha os dados do cliente para realizar o agendamento:";

  paragraph.classList.add("paragraph-medium");

  closeBtn.src = "src/assets/close.svg";
  closeBtn.classList.add("close-btn");

  closeBtn.addEventListener("click", (event) => {
    newModal.remove();
  });
  forms.classList.add("schedule-form");

  newModal.append(popup);
  popup.append(closeBtn, tittle, paragraph, forms);
  document.body.append(newModal);

  for (let i of formsObject) {
    const formDiv = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const img = document.createElement("img");

    formDiv.classList.add("input-form-container");
    console.log(i.label)
    label.innerHTML = `${i.label}`;
    input.placeholder = `${i.placeHolder}`;
    input.type = `${i.type}`;
    if (i.name != "Services") {
      img.src = `src/assets/${i.name}.svg`;
      img.alt = "Imagem representando `${formsPlaces[i]}`";
      img.classList.add("img-forms");
    }
    if (i.id == 4) {
      formDiv.classList.add("description-container");
    } 
    if (i.id == 5) {
      formDiv.classList.add("date-container");
      formDiv.append(img, input);
      divDate.append(formDiv);
      dateLabel.append(label);
    } 
    else if (i.id == 6) {
      formDiv.classList.add("date-container");
      formDiv.append(img, input);
      divDate.append(formDiv);
      dateLabel.append(label);
      forms.append(dateLabel, divDate);
    } 
    else {
      formDiv.append(img, input);
      forms.append(label, formDiv);
    }
    label.classList.add("label-medium");
    input.classList.add("input");

    input.id = i.name;
    dateLabel.classList.add("date-computer-container");
    divDate.classList.add("date-computer-container");
  }
  const submitButton = document.createElement("button");
  submitButton.classList.add("submit-schedule-btn", "label-large");
  submitButton.type = "submit";
  submitButton.myFormRef = "form-schedule";
  submitButton.innerHTML = "AGENDAR";

  forms.append(submitButton);
}
