import { useEffect, useState, useRef } from "react";
import heart from "../x.gif";

export default function CatchMe() {
  const [item, setItem] = useState();
  const [location, setLocation] = useState();
  const [start, setStart] = useState(false);
  const [con, setCon] = useState(3);
  const [pause, setPause] = useState(false);
  const [pic, setPic] = useState(heart);
  const [score, setScore] = useState(0);

  const [bestToLocal, setBestToLocal] = useState(0);
  const [bestFromLocal, setBestFromLocal] = useState(0);
  const [interval1, setInterval1] = useState(null);
  const [interval2, setInterval2] = useState(null);
  const startButton = useRef();
  const displayHeart = useRef();
  const scoreWiew = useRef();
  const bestScoreView = useRef();
  const pauseRef = useRef();

  const startGame = () => {
    setStart(true);
    if ((interval1 && interval2) === null) {
      setInterval1(
        setInterval(() => {
          setStart(false);
        }, 1000)
      );

      setInterval2(
        setInterval(() => {
          setStart(true);
        }, 2000)
      );
    }
  };

  const change = () => {
    if (start) {
      setPause(true);
      setStart(false);

      setScore(score + 1);
      setCon(5);
    }
  };
  useEffect(() => {
    console.log("w", window.innerWidth);
    console.log("h", window.innerHeight);
    let elHeight = document.getElementById("border").clientHeight;
    let elWidth = document.getElementById("border").clientWidth;
    console.log("elHeight", elHeight);
    console.log("elWidth", elWidth);
    let posX = Math.floor(Math.random() * (elWidth - 50));
    let posY = Math.floor(Math.random() * (elHeight - 50));

    console.log(posX, "posX");
    console.log(posY, "posY");

    if (start) {
      startButton.current.style.display = "none";
      displayHeart.current.style.display = "block";
      displayHeart.current.style.position = "relative";
      if (posX > elWidth) {
        console.log("out of border");
        posX = window.innerWidth - 50;
        // displayHeart.current.style.left=posX+'px';
        displayHeart.current.style.width = "50px";
        displayHeart.current.style.heigth = "30px";
      } else {
        displayHeart.current.style.top = posY + "px";
        displayHeart.current.style.left = posX + "px";
      }
    }

    if (con > 0) {
      setCon(con - 1);
    } else if (con == 0) {
      alert("you have lost");
      setScore(0);
      setCon(3);
      clearInterval(interval1);
      clearInterval(interval2);
      setInterval1(null);
      setInterval2(null);
      setPause(false);

      startButton.current.style.display = "block";
    }

    console.log(con);

    if (!start) {
      displayHeart.current.style.display = "none";
    }
    scoreWiew.current = "Score: " + score;
  }, [start]);

  const pauseGame = () => {
    setStart(true);

    clearInterval(interval1);
    clearInterval(interval2);
    setInterval1(null);
    setInterval2(null);
    setPause(false);
    startButton.current.style.display = "block";
  };

  console.log(window.innerWidth);

  useEffect(() => {
    if (score > bestToLocal) {
      setBestToLocal(score);
    }
    if (bestToLocal > bestFromLocal) {
      localStorage.setItem("bestScore", JSON.stringify(bestToLocal));
    }
    setBestFromLocal(JSON.parse(localStorage.getItem("bestScore")));
    console.log(score);
  }, [score, bestToLocal]);

  bestScoreView.current = "best score:" + bestFromLocal;

  return (
    <div id="catchContainer">
      <div>
        <div className="wrapper">
          <h1 id="title">Catch Me</h1>
        </div>
        <div id="scoreTable">
          <h1 id="score" className="scoreInfo" ref={scoreWiew}>
            {" "}
            {scoreWiew.current} <br />{" "}
          </h1>
          {bestFromLocal > 0 && (
            <h1 className="scoreInfo"> {bestScoreView.current}</h1>
          )}
        </div>
      </div>

      <button id="startButton" ref={startButton} onClick={startGame}>
        Start
      </button>
      {pause && (
        <button id="pauseButtonStyle" ref={pauseRef} onClick={pauseGame}>
          Pause
        </button>
      )}

      <div>
        <div id="border">
          <img id="heartStyle" src={pic} ref={displayHeart} onClick={change} />
        </div>
      </div>
    </div>
  );
}
