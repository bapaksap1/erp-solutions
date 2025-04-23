import React, { useState } from "react";
import styles from "./Input.module.scss";
import { InputType } from "./inputType.ts";

const MessageInput: React.FC<InputType> = ({
  placeholder = "Fill in your message",
  buttonLabel,
  onSend,
}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles.button} onClick={handleSend}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default MessageInput;
