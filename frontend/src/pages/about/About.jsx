import { Button } from "@mui/material";
import "./about.css";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import react from "./react.jpeg";
import nodeJs1 from "./nodeJs1.jpeg";
import angular from "./angular.jpeg";
import aboutCode from "./aboutCode.jpeg";
import js from "./js.jpeg";
import nodeJs from "./nodeJs.jpeg";
import meNoBackground from "./meNoBackground.png";

export default function About() {
  return (
    <div className="d-flex flex-column" id="mainContainerAbout">
      <div className="d-flex flex-column m-3 mt-5">
        <div className="d-flex mb-3 flex-column justify-content-center">
          <div className="d-flex mb-3 flex-row">
            <div className="d-flex flex-column col-5" id="text-gen">
              <div className="text-center" id="text-1">
                Ik ben communicatief, sociaal, gedreven, geordend, analytisch,
                oplossingsgericht, professioneel en resultaatgericht zijn
                kwaliteiten die mij omschrijven. Ik ben een toegewijde
                medewerker met ervaring in het helpen van organisaties om
                bedrijfsdoelen te behalen en te overtreffen.
              </div>
              <div className="text-center p-2" id="text-2">
                Ik heb een passie voor ICT en ik leer snel. Ik heb een oog voor
                detail waarbij ik ICT-knelpunten tijdig identificeer. Dit doe ik
                op een vrolijke en gestructureerde manier zonder aandacht te
                verliezen voor de organisatiedoelstellingen.
              </div>
              <div className="text-center p-2" id="text-3">
                Ik heb een oog voor detail waarbij ik ICT-knelpunten tijdig
                identificeer. Dit doe ik op een vrolijke en gestructureerde
                manier zonder aandacht te verliezen voor de
                organisatiedoelstellingen.
              </div>
              <div className="text-center p-2" id="text-4">
                Ik werk aan deze projecten: -Taxi reservering programma - Music
                playList - To do App - Catch me Game
              </div>
            </div>
            <div className="col-5 p-1" id="profile-image">
              <img className="col-12" src={meNoBackground} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column mb-3 justify-content-center">
          <div className="p-1 align-self-center">
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
        </div>
      
        {/* <div className="d-flex flex-column mb-3 justify-content-center" id="casousel-part">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={react} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={angular} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={nodeJs} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={js} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={aboutCode} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div> */}
      </div>
      <div></div>
    </div>
  );
}
