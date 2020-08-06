import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without errors", () => {
  render(<ContactForm />);
});

test("adds user to contact form without errors", async() => {
  render(<ContactForm />);

  const firstName = screen.getByPlaceholderText(/edd/i);
  const lastName = screen.getByPlaceholderText(/burke/i);
  const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  const message = screen.getByLabelText(/message/i);

  fireEvent.change(firstName, { target: { value: "Ava" } });
  fireEvent.change(lastName, { target: { value: "wingfield" } });
  fireEvent.change(email, { target: { value: "email@email.com" } });
  fireEvent.change(message, { target: { value: "Why is this happening?" } });

  const submitBtn = screen.getByTestId(/button/i)

  fireEvent.click(submitBtn)
});
