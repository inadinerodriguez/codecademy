const team = {
    _players: [
      {firstName: "Micah", lastName: "Wilson", age: 22},
      {firstName: "Willow", lastName: "Lopez", age: 24},
      {firstName: "Lou", lastName: "Rogers", age: 26}
    ],
    _games: [
      {opponent: "Patriots", teamPoints: 46, opponentPoints: 37},
      {opponent: "Bruins", teamPoints: 12, opponentPoints: 14},
      {opponent: "Bucks", teamPoints: 55, opponentPoints: 31}
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
    };
     this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
     let game = {
       opponent: newOpponent,
       teamPoints: newTeamPoints,
       opponentPoints: newOpponentPoints
     };
     this.games.push(game);
    }
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  
  console.log(team.players);
  
  team.addGame("Titans", 100, 98);
  console.log(team.games);