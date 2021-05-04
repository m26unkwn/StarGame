import "./App.css";
import { useState } from "react";
import { Footer } from "./screen";
import { StarGame } from "./components/StarGame";
import { GameTrue } from "./screen/GameTrue";

function App() {
  const [startGame, setStartGame] = useState(false);

  const onClickHandler = () => {
    setStartGame(!startGame);
  };

  return (
    <>
      {startGame ? <StarGame /> : <GameTrue onClickHandler={onClickHandler} />}

      <Footer />
    </>
  );
}
export default App;
