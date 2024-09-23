import { Button, Icon } from "@mui/material";
import "./about.css";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import react from "./react.png";
import angular from "./angular.png";
import nodeJs from "./node.png";
import meNoBackground from "./meNoBackground.png";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import backEnd from "./back-end.png";
import frontEnd from "./front-end.png";
import mobile from "./mobile.png";
import coding from "./coding.png";
import Footer from "../../components/Footer";

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
              <div className="text-center p-2 mt-3" id="text-2">
                Ik heb een passie voor ICT en ik leer snel. Ik heb een oog voor
                detail waarbij ik ICT-knelpunten tijdig identificeer. Dit doe ik
                op een vrolijke en gestructureerde manier zonder aandacht te
                verliezen voor de organisatiedoelstellingen.
              </div>
              <div className="text-center p-2 mt-3" id="text-4">
                Ik werk aan deze projecten: -Taxi reservering programma - Music
                playList - To do App - Catch me Game
              </div>
            </div>
            <div className="col-5 p-1" id="profile-image">
              <img className="col-12" src={meNoBackground} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column mb-5 pb-5 justify-content-center border-bottom border-primary border-4 w-100">
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
          <div className="d-flex flex-column mb-3 pb-3 justify-content-center w-100">
            <div className="title-experience p-1 align-self-center">
              <p className="title-experience p-1 align-self-center font-italic font-weight-bold">
                ERVARING
              </p>
            </div>
          </div>
          <div className="d-flex flex-row mb-3 justify-content-evenly">
            <div className="d-flex flex-column mb-3 me-4 w-50 align-items-end">
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-75 ">
                <p className="align-items-center">
                  <p className="position-explanation">STAGE</p>{" "}
                  <i>CERME ICT BV</i>
                </p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-75">
                <p>
                  <p className="position-explanation">LERAAR ONDERSTEUNER</p>
                  <i>BASISSCHOOL WERELDWIJS</i>
                </p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-75">
                <p>
                  <p className="position-explanation">GASTHEER</p>{" "}
                  <i>LOGEERHUIS DE BUREN</i>
                </p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-75">
                <p>
                  <p className="position-explanation">BEGELEIDER</p>{" "}
                  <i>UNIE VAN VRIJWILLIGERS ROTTERDAM</i>
                </p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-75">
                <p>
                  <p className="position-explanation">DIRECTEUR</p>{" "}
                  <i>BMZ ZUIVELBOERDERIJ</i>
                </p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-75">
                <p>
                  <p className="position-explanation">ONDERZOEKER</p>{" "}
                  <i>GAZI UNIVERSITY</i>
                </p>
              </div>
            </div>
            <div className="d-flex flex-row mb-3">
              <div id="vl"></div>
            </div>
            <div className="d-flex flex-column mb-3 ms-4 w-50 align-items-start">
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-50">
                <p>FEB / 2024 - Heden</p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-50">
                <p>2022 - FEB / 2024</p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-50">
                <p>DEC / 2021 - 2022</p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-50">
                <p>JUN / 2021 - OKT 2021</p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-50">
                <p>2017 - 2019</p>
              </div>
              <div className="exper d-flex align-items-center justify-content-center mb-4 w-50">
                <p>JUL / 2012 - SEP / 2016</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center align-self-center border-top border-primary border-4 w-100">
            <div className="d-flex flex-column me-4 p-5">
              <div
                id="carouselExample"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={react} class="d-block" alt="react" />
                  </div>
                  <div class="carousel-item">
                    <img src={angular} class="d-block" alt="angular" />
                  </div>
                  <div class="carousel-item">
                    <img src={nodeJs} class="d-block" alt="nodeJs..." />
                  </div>
                  <div class="carousel-item">
                    <JavascriptIcon class="d-block"></JavascriptIcon>
                  </div>
                  <div class="carousel-item">
                    <HtmlIcon class="d-block"></HtmlIcon>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column ms-4 p-5">
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={frontEnd} class="d-block" alt="frontEnd..." />
                    <div class="carousel-caption d-none d-md-block">
                      <p className="carosel-text">Front-End Develoment</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={backEnd} class="d-block" alt="backEnd..." />
                    <div class="carousel-caption d-none d-md-block">
                      <p className="carosel-text">Back-End Development.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={mobile} class="d-block" alt="mobile..." />
                    <div class="carousel-caption d-none d-md-block">
                      <p className="carosel-text">Mobile Development.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={coding} class="d-block" alt="coding..." />
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
