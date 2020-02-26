import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GameBoards = props => {
  const clearCardsInPlay = () => {
    props.clearCardsInPlay();
  };

  function checkIfThingCoCapt(array){
    for (var player of props.players){
      if(player.coCaptain === true && player.role === "The Thing"){
        return true;
      }
    }
  }

  function checkForWinner(condition) {
    checkIfThingCoCapt();
    let arrayOfPlayers = props.players;
    let aliensScore4AndThingCoCapt = arrayOfPlayers.filter((player, index) => {
    })
    return (
      (props.imitationsPassBoard.length === 4 && checkIfThingCoCapt() && "Aliens Have 4 imitations and The Thing is Co-Captain! Aliens Win!") ||
      (props.imitationsPassBoard.length === 5 && "Aliens reached 5 imitations. Aliens Win!") ||
      (props.imitationsBlockedBoard.length === 5 && "Humans blocked 5 imitations. Humans Win!") ||
      null
    );
  }

  return (
    <Fragment>
      <div className="score-board">
        <h1>
          <u>Score</u>
        </h1>
        <h2>Imitations Passed:{props.imitationsPassBoard.length}</h2>
        <h2>Imitations Blocked:{props.imitationsBlockedBoard.length}</h2>
        <Link to="/thething/captain">
          <button onClick={clearCardsInPlay} type="button">
            Next Round
          </button>
        </Link>
        <div className="win-message">
          <h1>{checkForWinner()}</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default GameBoards;
