//package org.example.Service;
//
//import org.springframework.stereotype.Service;
//import java.util.List;
//
//@Service
//public class ReportingService {
//
//    // Placeholder method for generating a report
//    public String generateReport(List<DailyHighBPReport> dailyReports) {
//        StringBuilder report = new StringBuilder("Daily High BP Counts Report\n");
//        for (DailyHighBPReport dailyReport : dailyReports) {
//            report.append(String.format("%s: %d patients with high BP, %d total patients\n",
//                    dailyReport.getDate(), dailyReport.getHighBPCount(), dailyReport.getTotalPatients()));
//        }
//        return report.toString();
//    }
//}
