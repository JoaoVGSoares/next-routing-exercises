"use client";
import React, { useContext } from "react";
import { ToastContext } from "../../../../components/ToastProvider";
import { useRouter } from "next/navigation";

function ContactPage() {
  const { createToast } = useContext(ToastContext);

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    createToast("Your message was received!", "success");
    router.push("/exercises/02-flash-messages");
  }

  return (
    <main>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
