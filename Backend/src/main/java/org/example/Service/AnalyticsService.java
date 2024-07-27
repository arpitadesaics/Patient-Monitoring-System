package org.example.Service;

import org.example.Model.Patient;
import org.example.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AnalyticsService {

    @Autowired
    private PatientRepository patientRepository;

    private static final int HIGH_BP_THRESHOLD = 100;

    public DailyHighBPReport getDailyHighBPCount() {
        List<Patient> patients = patientRepository.findAllPatients();

        LocalDate currentDate = LocalDate.now();

        int count = 0;
        int totalCount = 0;
        for (Patient patient : patients) {
            totalCount++;
            if (patient.getBloodPressure() > HIGH_BP_THRESHOLD) {
                count++;
            }
        }

        return new DailyHighBPReport(currentDate, totalCount, count);
    }
}
