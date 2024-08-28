import { Button } from "@mui/material";
import "./about.css";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function About() {
  return (
    <div className="d-flexflex-row mb-3" id="mainContainerHome">
      <div className="d-flexflex-row mb-3">
        <div id="profileDiv"></div>
        <div id="text1">
          <p>
            <b>Ik ben communicatief, sociaal, gedreven..... </b> <br />
            <i>Read More...</i>
          </p>
          Ik werk aan deze projecten: <br />
          -Taxi reservering programma <br />
          - Music playList <br />
          - To do App <br />
          - Catch me Game <br />
          Ik ben communicatief, sociaal, gedreven, geordend, analytisch,
          oplossingsgericht, professioneel en resultaatgericht zijn kwaliteiten
          die mij omschrijven.sdfdsfdsfdsf,fghdfh. Ik ben een toegewijde
          medewerker met ervaring in het helpen van organisaties om
          bedrijfsdoelen te behalen en te overtreffen.
          <br /> <br />
          Ik heb een passie voor ICT en ik leer snel. Ik heb een oog voor detail
          waarbij ik ICT-knelpunten tijdig identificeer. Dit doe ik op een
          vrolijke en gestructureerde manier zonder aandacht te verliezen voor
          de organisatiedoelstellingen.
          <br /> <br />
          Ik heb een oog voor detail waarbij ik ICT-knelpunten tijdig
          identificeer. Dit doe ik op een vrolijke en gestructureerde manier
          zonder aandacht te verliezen voor de organisatiedoelstellingen.
        </div>
        <div>
          <Button variant="contained" endIcon={<FileDownloadIcon />}>
            <Link
              className="downloadLink"
              to="/files/funtionCV(){return'CVvanRauf'}.pdf"
              target="_blank"
              download
            >
              Download CV
            </Link>
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
