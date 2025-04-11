const footballTeam = {
  
    team: "UP warriors",
    year: 2025,
    headCoach: "Manjesh",
    players: [
      {
        name: "Ashish",
        position: "defender",
        isCaptain: false
      },
      {
        name: "Ranjan",
        position: "forward",
        isCaptain: true
      },
      {
        name: "Monty",
        position: "midfielder",
        isCaptain: false
      },
      {
        name: "Neta",
        position: "goalkeeper",
        isCaptain: false
      },
      {
        name: "Rohan",
        position: "defender",
        isCaptain: false
      },
      {
        name: "Vikram",
        position: "midfielder",
        isCaptain: false
      },
      {
        name: "Priyansh",
        position: "forward",
        isCaptain: false
      },
      {
        name: "Arjun",
        position: "defender",
        isCaptain: false
      },
      {
        name: "Suresh",
        position: "midfielder",
        isCaptain: false
      },
      {
        name: "Deepak",
        position: "defender",
        isCaptain: false
      },
      {
        name: "Karan",
        position: "midfielder",
        isCaptain: false
      }
    ]
}
document.getElementById("head-coach").innerText = footballTeam.headCoach;
document.getElementById("team").innerText = footballTeam.team;
document.getElementById("year").innerText = footballTeam.year;

function renderPlayers(players){
  const playerCardContainer = document.getElementById("player-cards");
  playerCardContainer.innerHTML = "";

  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    card.innerHTML = `
      <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
      <p>Position: ${player.position}</p>
    `;

    playerCardContainer.appendChild(card);
  });
}


const filterPlayers = document.getElementById("players");

filterPlayers.addEventListener("change", function ()  {
  const value = this.value;

  if(value === "all"){
    renderPlayers(footballTeam.players);
  } else {
    const filtered = footballTeam.players.filter(player => player.position === value);
    renderPlayers(filtered);
  }
});
renderPlayers(footballTeam.players);
