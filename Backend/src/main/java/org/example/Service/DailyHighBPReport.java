package org.example.Service;

import java.time.LocalDate;

public class DailyHighBPReport {
    private LocalDate date;
    private int totalPatients;
    private int highBPCount;

    public DailyHighBPReport(LocalDate date, int totalPatients, int highBPCount) {
        this.date = date;
        this.totalPatients = totalPatients;
        this.highBPCount = highBPCount;
    }

    public LocalDate getDate() {
        return date;
    }

    public int getTotalPatients() {
        return totalPatients;
    }

    public int getHighBPCount() {
        return highBPCount;
    }
}
