import { useState } from "react";
import styles from "@/styles/FormContactus.module.css";

const FormContactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);

    try {
      const response = await fetch("/api/sendContactEmail", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.formContainer}>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className={styles.inputField}
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          required
          className={styles.inputField}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={styles.inputField}
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default FormContactus;
