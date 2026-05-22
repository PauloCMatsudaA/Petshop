const button = document.getElementById("schedule-button");
const modal = document.getElementById("modal-id");

 button.onclick = (event) => {
   event.preventDefault() 
   const formsPlaces = ["User", "Pet", "Phone", "Services", "Calendar", "Clock"]

    const newModal = document.createElement("div");
    const popup = document.createElement("div");
    const closeBtn = document.createElement("img");
    const tittle = document.createElement("h2");
    const paragraph = document.createElement("p");
    const forms = document.createElement("form");

    newModal.classList.add("modal");
    popup.classList.add("popup");
    popup.setAttribute("id", "form-schedule");

    tittle.innerHTML = "Agende um atendimento"
    tittle.classList.add("tittle")

    paragraph.innerHTML = "Preencha os dados do cliente para realizar o agendamento:"  
    

    paragraph.classList.add("paragraph-medium")
    
    closeBtn.src = "src/assets/close.svg";
    closeBtn.classList.add("close-btn")

    closeBtn.addEventListener("click", (event) => {
      newModal.remove(); 
    }) 
    
    
    forms.classList.add("schedule-form")

    newModal.append(popup)
    popup.append(closeBtn, tittle, paragraph, forms)
    document.body.append(newModal)
    for (let i in formsPlaces){
      
      const formDiv = document.createElement("div");
      const label = document.createElement("label");
      const img = document.createElement("img");
      const input = document.createElement("input");

      let element = formsPlaces[i]

      formDiv.classList.add("input-form-container")

      if(i == 0){
        label.innerHTML = "Nome do tutor"
        input.placeholder = "Helen Souza"
        input.type = "text"  
      }
      else if(i == 1){
        label.innerHTML = "Nome do Pet"
        input.placeholder = "Cheddar"  
        input.type = "text"
      }
      else if(i == 2){
        label.innerHTML = "Telefone"
        input.placeholder = "(00) 0 0000-0000"
        input.type = "text"  
      }
      else if(i == 3){
        label.innerHTML = "Descrição do serviço"
        input.placeholder = "Banho e tosa" 
        input.type = "text" 
        formDiv.classList.add("description-container")
      }
      else if(i == 4){
        label.innerHTML = "Data"
        input.classList.add("description-form")
        input.type = "date"
      }
      else if(i == 5){
        label.innerHTML = "Hora"
        input.type = "time"
      }


      label.for = element
      label.classList.add("label-medium")

      input.classList.add("input")
      input.id = element
      

      if(element != "Services"){
        img.src = `src/assets/${element}.svg`
        img.alt = "Imagem representando `${formsPlaces[i]}`"
        img.classList.add("img-forms")
      }  
      formDiv.append(img, input)
      forms.append(label, formDiv)
    }
    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-schedule-btn", "label-large");
    submitButton.type = "submit"
    submitButton.form = "form-schedule"
    submitButton.innerHTML = "AGENDAR"
  
    forms.append(submitButton)

 }