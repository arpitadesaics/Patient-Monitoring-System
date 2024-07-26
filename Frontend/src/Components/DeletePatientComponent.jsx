// src/Components/DeletePatientComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DeletePatientComponent = () => {
  const [patientId, setPatientId] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setPatientId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API URL
      const response = await axios.delete(`https://6fk50sfja9.execute-api.us-east-2.amazonaws.com/dev/patients/${patientId}`);
      setMessage('Patient deleted successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Error deleting patient');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Delete Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patient ID</label>
          <input
            type="number"
            className="form-control"
            value={patientId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Delete Patient</button>
      </form>
      {message && <div className="mt-3">{message}</div>}
    </div>
  );
};

export default DeletePatientComponent;
