import  axios  from "axios";
import "./homepage.css";
import { useRef,useState,useEffect } from "react";

export default function Home() {
  const ref = useRef(null);
  const [data,setData]=useState(null);
  useEffect(() => {
    axios.get("http://localhost:7777/").then((res) => {
        setData(res.data);
        console.log(res.data);
    });
  }, []);
  return (
    <div id="mainContainerHome">
      <div id="profileDiv">
        <p  ref={ref}></p>
      </div>
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
            </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
