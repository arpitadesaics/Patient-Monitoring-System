import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';

const ListPatientComponent = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//   const YOUR_BACKEND_API_URL = 'https://6fk50sfja9.execute-api.us-east-2.amazonaws.com/dev'
  useEffect(() => {
    axios.get('https://6fk50sfja9.execute-api.us-east-2.amazonaws.com/dev/patients')
      .then(response => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='container'>
      <h2>Patient List</h2>
      <table class='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Heart Rate</th>
            <th>Blood Pressure</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.heartRate}</td>
              <td>{patient.bloodPressure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPatientComponent;