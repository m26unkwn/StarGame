import { useState } from "react";
import Game from "../screen/Game";

export const StarGame = () => {
  const [gameId, setGameId] = useState(1);

  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};
