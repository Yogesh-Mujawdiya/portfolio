import React, { useState } from "react";
import styles from "../styles/Contacts.module.css";
import { Box, Button, Snackbar } from "@mui/material";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resMessage, setResMessage] = useState("Email Response");
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    setOpen(true);
    setResMessage(data.message);
  };
  return (
    <section id="Contact" className={styles.contacts_section}>
      <h1 className="section_title">Contacts</h1>
      <hr className="section_title_hr" />
      <div className="section_subtitle">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </div>
      <form method="GET" action={"#"} onSubmit={handleSubmit}>
        <Box>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              name="message"
              placeholder="Your Message"
              required
            />
          </div>
          <div className={styles.action_group}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </Box>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message={resMessage}
      />
    </section>
  );
};

export default Contacts;
