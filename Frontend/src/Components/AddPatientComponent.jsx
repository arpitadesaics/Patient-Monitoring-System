// src/Components/AddPatientComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddPatientComponent = () => {
  const [patient, setPatient] = useState({
    patientId: '',
    name: '',
    age: '',
    heartRate: '',
    bloodPressure: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API URL
      const response = await axios.post('https://6fk50sfja9.execute-api.us-east-2.amazonaws.com/dev/patients', patient);
      console.log(response.data);
      alert('Patient added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding patient');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patient ID</label>
          <input
            type="number"
            className="form-control"
            name="patientId"
            value={patient.patientId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={patient.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Heart Rate</label>
          <input
            type="number"
            className="form-control"
            name="heartRate"
            value={patient.heartRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Blood Pressure</label>
          <input
            type="text"
            className="form-control"
            name="bloodPressure"
            value={patient.bloodPressure}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientComponent;
