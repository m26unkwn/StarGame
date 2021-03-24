//Importing All the dependecies
import { useState, useEffect } from "react";
import "./StarGame.css";
import { SumNumber } from "../components/Number";
import { utils } from "../util";
import { StarDisplay } from "../components/StarDisplay";
import { PlayAgain } from "../components/PlayAgain";
//Creating the StarGame Component

export const StarGame = () => {
  const [stars, setStars] = useState(utils.random(1, 9)); //stars state
  const [availableNumber, setAvailableNumber] = useState(utils.range(1, 9));
  const [candidateNum, setCandidateNum] = useState([]);
  const [secondLeft, setSecondLeft] = useState(10);

  useEffect(() => {
    if (secondLeft > 0) {
      const timerId = setTimeout(() => {
        setSecondLeft(secondLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const candidatesAreWrong = utils.sum(candidateNum) > stars;

  const gameIsDone = availableNumber.length === 0;

  const status = (number) => {
    if (!availableNumber.includes(number)) {
      return "used";
    }
    if (candidateNum.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used") {
      return;
    }

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNum.concat(number)
        : candidateNum.filter((cn) => cn !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNum(newCandidateNums);
    } else {
      const newAvailableNums = availableNumber.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNumber(newAvailableNums);
      setCandidateNum([]);
    }
  };

  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNumber(utils.range(1, 9));
    setCandidateNum([]);
  };
  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {gameIsDone ? (
            <PlayAgain onClick={resetGame} />
          ) : (
            <StarDisplay stars={stars} />
          )}
        </div>
        <div className='right'>
          {utils.range(1, 9).map((number) => (
            <SumNumber
              key={number}
              status={status(number)}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};
