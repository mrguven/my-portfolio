import "./portfolio.css";
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
      <div id="profil">
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
      </div>

      <div className="classSubinfo" id="subInfo">
        <div id="textPart">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p>
                <b>Ik ben communicatief, sociaal, gedreven..... </b> <br />
                <i>Read More...</i>
              </p>
            </AccordionSummary>
            <AccordionDetails>
              Ik werk aan deze projecten: <br />
              -Taxi reservering programma <br />
              - Music playList <br />
              - To do App <br />
              - Catch me Game <br />
              Ik ben communicatief, sociaal, gedreven, geordend, analytisch,
              oplossingsgericht, professioneel en resultaatgericht zijn
              kwaliteiten die mij omschrijven.sdfdsfdsfdsf,fghdfh.
              Ik ben een toegewijde medewerker
              met ervaring in het helpen van organisaties om bedrijfsdoelen te
              behalen en te overtreffen.
              <br /> <br />
              Ik heb een passie voor ICT en ik leer snel. Ik heb een oog voor
              detail waarbij ik ICT-knelpunten tijdig identificeer. Dit doe ik
              op een vrolijke en gestructureerde manier zonder aandacht te
              verliezen voor de organisatiedoelstellingen.
              <br /> <br />
              Ik heb een oog voor detail waarbij ik ICT-knelpunten tijdig
              identificeer. Dit doe ik op een vrolijke en gestructureerde manier
              zonder aandacht te verliezen voor de organisatiedoelstellingen.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="classSubinfo" id="subInfo-2">
        <div id="linkedinLink">
          {" "}
          <a
            href="https://www.linkedin.com/in/rauf-guven-a76791a6/"
            target="https://www.linkedin.com/in/rauf-guven-a76791a6/"
          >
            {" "}
            <img src={linkedin} id="linkedId" alt="linkedin" />
          </a>
        </div>
        <div id="githubLink">
          {" "}
          <a
            href="https://github.com/mrguven"
            target="https://github.com/mrguven"
          >
            <img src={github} id="githubId" alt="github" />
          </a>
        </div>
      </div>
      <div className="classSubinfo" id="subInfo-3">
        subInfo-3
      </div>
      <div id="port">
        <Link className="portLinks" to="/">
          Portfolie
        </Link>
        <Link className="portLinks" to="/mytaxi">
          MyTaxi{" "}
        </Link>
        <Link className="portLinks" to="/todo">
          TodoApp{" "}
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
          speel verloren.{" "}
        </h3>
      </div>
    </div>
  );
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
