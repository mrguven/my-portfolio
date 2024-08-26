import axios from "axios";
import "./homepage.css";
import { useRef, useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

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
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
  };
  let colorR = 175;
  let colorG = 88;
  let colorB = 122;
  let color = `rgb(${colorR}, ${colorG}, ${colorB})`;
  let changeColorStyle = {
    color: `${color}`,
  };
  console.log(color);
  console.log(colorB);

  return (
    <div id="mainContainerHome">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} className="text-end">
            <div>
              <span>
              <Button   href="https://www.linkedin.com/in/rauf-guven-a76791a6/"
            target="https://www.linkedin.com/in/rauf-guven-a76791a6/">
  <LinkedInIcon sx={{ fontSize: 50, color: 'blue'}} />
</Button>
                
              </span>
              <span>
              <Button  href="https://github.com/mrguven"
            target="https://github.com/mrguven">
  <GitHubIcon sx={{ fontSize: 50, color: 'black' }}/>
</Button>
                
              </span>
            </div>
          </Grid>
          <Grid xs={12}>
            <div id="profileDiv">
              <h1 className="fs-1" style={changeColorStyle}>
                {" "}
                Hello,
              </h1>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="text-end">
              <p className="fs-1">I`m</p>
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <span id="first-letter">R</span>
              <span id="second-letter">A</span>
              <span id="third-letter">U</span>
              <span id="fourth-letter">F</span>
            </div>
          </Grid>

          <Grid xs={8}>
            <div>
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
          </Grid>
          <Grid xs={8}>
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
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
