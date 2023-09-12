import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Truculenta } from "next/font/google";
import * as React from "react";
import ReactConfetti from "react-confetti";
import { toast } from "react-toastify";
import CustomButton from "../../../components/CustomButton/CustomButton";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import ThankYou from "../../../components/ThankYou/ThankYou";
import classes from "./ContactForm.module.css";
import image from "/public/contact/contact.png";

export const ContactForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [textarea, setTextarea] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const data = {
        name: `${firstName} ${lastName} `,
        email: email,
        message: textarea,
      };
      await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(data),
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setTextarea("");
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Container>
      <Box className={classes.container}>
        <Box>
          <Typography variant="h2" color={"primary.dark"} fontWeight="700">
            Let&apos;s do this
          </Typography>
          <Typography variant="body1" mt="16px" color={"primary.dark"}>
            Fill in our short form. It will only take a minute.
          </Typography>
          <Box mt="32px">
            <ImageShowcase src={image} />
          </Box>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Box className={classes.inputContainer}>
            <Box>
              <Typography variant="caption" color={"primary.dark"}>
                First Name
              </Typography>
              <div>
                <input
                  className={classes.input}
                  value={firstName}
                  placeholder="e.g John"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </Box>
            <Box>
              <Typography variant="caption" color={"primary.dark"}>
                Last Name
              </Typography>
              <div>
                <input
                  value={lastName}
                  className={classes.input}
                  placeholder="e.g  Doe"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </Box>
          </Box>
          <Box mt="30px">
            <Typography variant="caption" color={"primary.dark"}>
              Email
            </Typography>
            <div style={{ width: "100% !important" }}>
              <input
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Enter a Valid Email"
                className={classes.email}
                placeholder="e.g johndoe@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100% !important",
                  maxWidth: "100% !important",
                }}
              />
            </div>
          </Box>
          <Box mt="30px">
            <Typography variant="caption" color={"primary.dark"}>
              How can we help you?
            </Typography>
            <div>
              <textarea
                className={classes.textarea}
                value={textarea}
                placeholder="Tell Us"
                rows={10}
                cols={50}
                onChange={(e) => setTextarea(e.target.value)}
                required
              ></textarea>
            </div>
          </Box>
          <Box mt="15px">
            <Button variant="secondary" type="submit">
              Send
            </Button>
          </Box>
          <Modal open={open}>
            <ThankYou setOpen={setOpen} />
          </Modal>
        </Box>
      </Box>
    </Container>
  );
};
