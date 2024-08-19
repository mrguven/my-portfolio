import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CatchMe from "./pages/CatchMe";
import Todo from "./pages/todopage/Todo";
import MyTaxi from "./pages/MyTaxi";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MyPlayList from "./pages/playlist/MyPlayList";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/homepage/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/catchMe" element={<CatchMe />} />
          <Route path="/myplaylist" element={<MyPlayList />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/mytaxi" element={<MyTaxi />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
