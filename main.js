function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
       <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
           </li>
  `
}

let delay = -0.4
function createCard(date, day, games, group) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
         <h2>${date}<span>${day}</span></h2>
         <h1><span>${group}</span></h1>
          <ul>
          ${games}  
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("qatar", "13:00", "ecuador"),
    "grupo - a"
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("unitedstates", "16:00", "wales"),
    "grupo -  B"
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudiarabia") +
      createGame("dennamark", "07:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia"),
    "grupo - C"
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costarica") +
      createGame("belgium", "16:00", "canada"),
    "grupo - D"
  )
