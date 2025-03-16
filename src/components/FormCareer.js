import { useState } from "react";
import styles from "@/styles/CareerForm.module.css";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [cvUploaded, setCvUploaded] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
    setCvUploaded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("cv", formData.cv);

    try {
      const response = await fetch("/api/sendEmail", {
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
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
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

        {/* Hidden file input */}
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          className={styles.fileInput}
          id="cvUpload"
        />

        {/* Custom Upload CV Text */}
        <label htmlFor="cvUpload" className={styles.uploadCvLabel}>
          {cvUploaded ? "CV Uploaded" : "Upload CV"}
        </label>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default CareerForm;
