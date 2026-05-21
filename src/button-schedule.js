const button = document.getElementById("schedule-button")
const modal = document.getElementById("modal-id")

 button.onsubmit = (event) => {

   const formsPlaces = ["User", "Pet", "Phone", "Services", "Calendar", "Clock"]

    const newModal = document.createElement("div");
    const popup = document.createElement("div");

    newModal.classList.add("modal")
    popup.classList.add("popup")

    popup.setAttribute("id") = "form-schedule"



    for(i = 0; i <= 6; i++){

    }
 }