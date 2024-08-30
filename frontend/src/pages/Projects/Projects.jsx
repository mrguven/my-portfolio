import "./Projects.css";
import music from "./music.png";
import checlist from "./checklist.jpg";
import catchMe from "./catchme.jpg";
import taxi from "./taxi.png";
import github from "./gtihub for web.png";
import linkedin from "./linkedin.png";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function Portfolio() {
  return (
    <div id="infoContainer">
      <div className="classSubinfo" id="subInfo-2">
        <div id="linkedinLink">
          <a
            href="https://www.linkedin.com/in/rauf-guven-a76791a6/"
            target="https://www.linkedin.com/in/rauf-guven-a76791a6/"
          >
            <img src={linkedin} id="linkedId" alt="linkedin" />
          </a>
        </div>
        <div id="githubLink">
          <a
            href="https://github.com/mrguven"
            target="https://github.com/mrguven"
          >
            <img src={github} id="githubId" alt="github" />
          </a>
        </div>
      </div>
      <div className="classSubinfo" id="subInfo-3">
      </div>
      <div id="port">
        <Link className="portLinks" to="/">
          Home
        </Link>
        <Link className="portLinks" to="/mytaxi">
          MyTaxi
        </Link>
        <Link className="portLinks" to="/todo">
          TodoApp
        </Link>
        <Link className="portLinks" to="/catchMe">
          CatchMe
        </Link>
      </div>

      <div className="subCont" id="myTaxi">
        <Link id="taxilogo" to="/mytaxi">
          <img className="subContImg" src={taxi} alt="logo" />
        </Link>
        <h3 id="taxilogoText">
          Met die applicatie kan je altijd een taxi reserveren om ergens te
          gaan. Je kan kies een tijd,vertrek en bestemming.
        </h3>
      </div>
      <div className="subCont" id="todo">
        <Link to="/todo" id="checklistImg">
          <img className="subContImg" src={checlist} alt="logo" />
        </Link>
        <h3 id="checklistText">
          Je kan met dit app je taken opschrijven. Je kan uw afgemaak taken
          verwijderen.
        </h3>
      </div>
      <div className="subCont" id="music">
        <Link to="/myplaylist" id="musicImg">
          <img className="subContImg" src={music} alt="logo" />
        </Link>
        <h3 id="musicText">
          Niet afgemaakt maar je kan muziek zoeken en luisteren
        </h3>
      </div>
      <div className="subCont" id="catchMe">
        <Link to="/catchMe" id="catchMeImg">
          <img className="subContImg" src={catchMe} alt="logo" />
        </Link>
        <h3 id="catchMeText">
          dat is een web game. Je moet binnen enkele seconden op item klikken.
          Na elke klik heb je een punt. Als je op item niet klikt,ben je de
          speel verloren.
        </h3>
      </div>
    </div>
  );
}

