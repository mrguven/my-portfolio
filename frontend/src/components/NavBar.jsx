
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

  return (
    <nav id="navContainer">
      <ul id="navUl">
        <li>
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/mytaxi">MyTaxi</Link>
        </li>
        <li>
          <Link to="/myplaylist">MyPlay</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/catchMe">CatchMe</Link>
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
                <Link  className="active" to='portfolio'> My account</Link>
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
