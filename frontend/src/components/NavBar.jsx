
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <nav id="navContainer">
      <ul id="navUl">
        <li>
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <div>
              <Link id="project-button"
              aria-controls={open1 ? "project-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}>Projects</Link>
           
            <Menu
              id="project-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                "aria-labelledby": "project-button",
              }}
            >
              <MenuItem onClick={handleClose1}>
              <Link className="active" to="/mybinek">MyBinek</Link>
              </MenuItem>
              <MenuItem  onClick={handleClose1}>
              <Link className="active" to="/myplaylist">M&#10084;sic</Link>
              </MenuItem>
              <MenuItem onClick={handleClose1}>
                <Link className="active" to="/todo">Todo</Link>
               </MenuItem>
              <MenuItem onClick={handleClose1}>
              <Link className="active" to="/catchMe">CatchMe</Link>
              </MenuItem>              
            </Menu>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon style={{color:"white",fontSize:"40px"}}/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
              <Link  className="active" to='/'> Home</Link></MenuItem>
              <MenuItem onClick={handleClose}>
                <Link  className="active" to='projects'> My Projects</Link>
               </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="active" to="/signup">
                  Sign Up
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="active" to="/signin">
                  Sign In
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </li>
      </ul>
    </nav>
  );
}
