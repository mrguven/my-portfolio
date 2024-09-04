import axios from "axios";
import "./homepage.css";
import { useRef, useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import profilPic from "./me2.png" 
import zIndex from "@mui/material/styles/zIndex";
import Footer from "../../components/Footer";

export default function Home() {
  const ref = useRef(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:7777/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-type");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid blue}";
    document.body.appendChild(css);
  };

 
//change font color
const injectStyle = (style) => {
  const styleElement = document.createElement('style');
  let styleSheet = null;
  document.head.appendChild(styleElement);
  styleSheet = styleElement.sheet;
  styleSheet.insertRule(style, styleSheet.cssRules.length);
};
let  keyframesAnimation= `@keyframes animation1 {
  0% {color: blue;}
  25%{color: yellow;}
  25%{color: red;}
  75%{color:brown;}
  100% {color: blue;}
}`
injectStyle(keyframesAnimation);
let changeColorStyle = {
  animation: `animation1 10s infinite`,
  };

  return (
    <div className="d-flex flex-row" id="mainContainerHome">
      <div className="d-flex flex-row" sx={{ flexGrow: 1 }} id='box' >
        
          <div xs={8}>
          <div xs={10} className="text-end">
            <div>
              <span>
                <Button
                  href="https://www.linkedin.com/in/rauf-guven-a76791a6/"
                  target="https://www.linkedin.com/in/rauf-guven-a76791a6/"
                >
                  <LinkedInIcon sx={{ fontSize: 50, color: "blue" }} />
                </Button>
              </span>
              <span>
                <Button
                  href="https://github.com/mrguven"
                  target="https://github.com/mrguven"
                >
                  <GitHubIcon sx={{ fontSize: 50, color: "black" }} />
                </Button>
              </span>
            </div>
          </div>
          <div xs={4}>
            <div className="ps-5">
              <h1 className="hello-word" style={changeColorStyle}>
                HI,
              </h1>
            </div>
          </div>
          <div xs={3}>
            
          </div>
          <div xs={4}>
            <div className="d-flex flex-row" id="letters">
              <div className="d-flex flex-column  align-item-start">
                <div className="align-self-start" style={changeColorStyle} id="letter-I">I</div>
              
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-column mt-3">
                
              <p className="fs-1">`m</p>
            
                </div>
                <div className="d-flex flex-row ms-5 justify-content-center">
                <span style={changeColorStyle} id="first-letter">R</span>
              <span id="second-letter">A</span>
              <span id="third-letter">U</span>
              <span id="fourth-letter">F</span>
                </div>
              </div>
            
              
            </div>
          </div>

          <div xs={8}>
            <div className="text-center">
              <h1>
                <a
                  href=""
                  className="typewrite"
                  data-period="2000"
                  data-type='[ "I am Creative.", "I Love Design.", "I Love to Develop." ]'
                >
                  <span className="wrap"></span>
                </a>
              </h1>
            </div>
          </div>
          <div xs={12} sx={{marginTop:10}} className="text-center">
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
          {/* <div xs={4}>
          <div xs={4} sx={{zIndex:-3}}>
            <div id="profil-pic">
              <img id="profil-image" src={profilPic} alt="" />
            </div>
          </div>
          </div> */}
        
      </div>
      <Footer />
    </div>
  );
}
