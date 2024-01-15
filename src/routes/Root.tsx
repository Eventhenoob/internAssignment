import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Root() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const navigator = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !phoneRef.current?.value
    )
      return;

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
      })
    );
    navigator("/page2");
  };

  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
          >
            <Typography align="center" variant="h3" gutterBottom>
              Details
            </Typography>

            <FormGroup>
              <TextField
                inputRef={nameRef}
                required={true}
                id="name"
                label="Name"
                variant="outlined"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                inputRef={phoneRef}
                id="phone"
                type="number"
                label="phone"
                variant="outlined"
                required={true}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                inputRef={emailRef}
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                required={true}
              />
            </FormGroup>
            <Button type="submit" variant="outlined" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default Root;
