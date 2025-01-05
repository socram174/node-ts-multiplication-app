
const currentTicketLbl = document.querySelector('span');
const createTicketBtn = document.querySelector('button');






async function getLastTicket() {
  const res = await fetch("http://localhost:3000/api/ticket/last");
  const lastTicket = await res.json();

  //const lastTicket = document.querySelector("#lbl-new-ticket");

  currentTicketLbl.innerText = lastTicket;
}

async function createTicket() {
    const newTicket = await fetch("http://localhost:3000/api/ticket", {
        method: 'POST',
    }).then(res => res.json());

    currentTicketLbl.innerText = newTicket.number;
}

createTicketBtn.addEventListener('click', createTicket);

getLastTicket();