package org.example.controller;


import org.example.Service.DailyHighBPReport;
import org.example.Service.AnalyticsService;
//import org.example.Service.ReportingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("patients/analytics")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

//    @Autowired
//    private ReportingService reportingService;

    @GetMapping("/daily-bp")
    public DailyHighBPReport getDailyHighBPAnalysis() {
        return analyticsService.getDailyHighBPCount();
    }

//    @GetMapping("/report")
//    public DailyHighBPReport getDailyHighBPReport() {
//        return reportingService.generateReport();
//    }
}
