import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./signup.css";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userError, setUserError] = useState();
  const refEmail = useRef();
  const refFirstName = useRef();
  const refLasttName = useRef();
  const refPassword = useRef();
  const refRepeatedPassword = useRef();
  const [resEmail, setResEmail] = useState(null);

  function submitSignUp() {
    console.log(firstName);
    if (password !== passwordRepeat) {
      setPasswordError("*password must be same");
      setTimeout(() => {
        setPasswordError(null);
      }, 3000);
    } else {
      console.log(firstName, "beforepost");
      if (firstName && lastName && password && email) {
        console.log(firstName, "afterpost");
        axios
          .post("http://localhost:8080/createuser", {
            firstName,
            lastName,
            password,
            email,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // setFirstName(data.get('firstName'));
  //   // setLastName(data.get('lastName'));
  //   // setEmail(data.get('email'));
  //   // setPasswordRepeat( data.get('passwordRepeat'));
  //   // setPassword(data.get('password'))

  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //     passwordRepeat: data.get('passwordRepeat'),
  //     firstName: data.get('firstName'),
  //     lastName: data.get('lastName')
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              submitSignUp();
            }}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <input
                  className="class-signup-input"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  placeholder="First Name"
                  autoFocus
                  ref={refFirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  className="class-signup-input"
                  required
                  fullWidth
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  ref={refLasttName}
                />
              </Grid>
              <Grid item xs={25}>
                <input
                  className="class-signup-input"
                  required
                  fullWidth
                  id="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  ref={refEmail}
                /> <br />
                <i>{userError && userError}</i>
              </Grid>
              <Grid item xs={25}>
                <input
                  className="class-signup-input"
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  autoComplete="new-password"
                  ref={refPassword}
                />
                 <br />
                <i>{passwordError && passwordError}</i>
              </Grid>
              <Grid item xs={12}>
                <input
                  className="class-signup-input"
                  required
                  fullWidth
                  name="passwordRepeat"
                  placeholder="Repeat-Password"
                  type="password"
                  autoComplete="new-password"
                  ref={refRepeatedPassword}
                />
                <i>{passwordError && passwordError}</i>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setEmail(refEmail.current.value);
                setFirstName(refFirstName.current.value);
                setLastName(refLasttName.current.value);
                setPassword(refPassword.current.value);
                setPasswordRepeat(refRepeatedPassword.current.value);
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
