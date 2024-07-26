import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import { Pie, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [reportData, setReportData] = useState({
    date: '',
    totalPatients: 0,
    highBPCount: 0,
  });

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get('https://6fk50sfja9.execute-api.us-east-2.amazonaws.com/dev/patients/analytics/daily-bp');
        setReportData(response.data);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchReport();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Patients Analysis', 10, 10);
    doc.text(`Date: ${reportData.date}`, 10, 20);
    doc.text(`Total Patients: ${reportData.totalPatients}`, 10, 30);
    doc.text(`Patients with High BP: ${reportData.highBPCount}`, 10, 40);
    doc.save('report-summary.pdf');

  };

  const pieData = {
    labels: ['Patients with High BP', 'Patients without High BP'],
    datasets: [
      {
        data: [reportData.highBPCount, reportData.totalPatients - reportData.highBPCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const lineData = {
    labels: ['Total Patients', 'Patients with High BP'],
    datasets: [
      {
        label: 'Patient BP Data',
        data: [reportData.totalPatients, reportData.highBPCount],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', width: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <h2>Patients Analysis</h2>
      <p><strong>Date:</strong> {reportData.date}</p>
      <p><strong>Total Patients:</strong> {reportData.totalPatients}</p>
      <p><strong>Patients with High BP:</strong> {reportData.highBPCount}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{ width: '45%' }}>
          <h3>Pie Chart</h3>
          <Pie data={pieData} />
        </div>
        <div style={{ width: '45%' }}>
          <h3>Line Graph</h3>
          <Line data={lineData} />
        </div>
      </div>
      <button onClick={downloadPDF} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '4px', backgroundColor: '#007BFF', color: '#fff', marginTop: '20px' }}>
        Download PDF
      </button>
    </div>
  );
};

export default ChartComponent;
