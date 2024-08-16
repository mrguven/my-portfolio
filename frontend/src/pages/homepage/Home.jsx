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
        <p id="text1" ref={ref}></p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
