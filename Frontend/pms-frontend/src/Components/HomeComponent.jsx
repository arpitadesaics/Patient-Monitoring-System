// src/Components/HomeComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const HomeComponent = () => {
  const navigate = useNavigate();

  const handleAddPatient = () => {
    navigate('/add-patient');
  };

  const handleDeletePatient = () => {
    navigate('/delete-patient');
  };

  const handleViewPatients = () => {
    navigate('/patient'); // Fixed typo: changed from '/patient' to '/patients'
  };

  return (
    <div className="container text-center mt-5">
      <h1>Patient Monitoring System</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <Card onClick={handleAddPatient} className="cursor-pointer">
            <CardBody>
              <CardTitle tag="h5">Add Patient</CardTitle>
              <CardText>Click to add a new patient to the system.</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card onClick={handleDeletePatient} className="cursor-pointer">
            <CardBody>
              <CardTitle tag="h5">Delete Patient</CardTitle>
              <CardText>Click to delete an existing patient from the system.</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card onClick={handleViewPatients} className="cursor-pointer">
            <CardBody>
              <CardTitle tag="h5">View Patients</CardTitle>
              <CardText>Click to view all patients in the system.</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
