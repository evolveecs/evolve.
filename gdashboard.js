// Combined data from dashboard.js and dashboards.js
const data = {
    globalGenerationData: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Global E-Waste Generation (Million Metric Tons)',
            data: [44.7, 49.8, 53.6, 53.6, 57.4, 59.6],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    recyclingRateData: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'E-Waste Recycling Rate (%)',
            data: [20.0, 17.4, 17.4, 17.4, 17.4, 17.4],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    topCountriesData: {
        labels: ['China', 'United States', 'India', 'Japan', 'Germany'],
        datasets: [{
            label: 'E-Waste Generation (Million Metric Tons)',
            data: [10.1, 6.9, 3.2, 2.6, 1.8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    compositionData: {
        labels: ['Iron and Steel', 'Plastic', 'Copper', 'Aluminum', 'Glass', 'Others'],
        datasets: [{
            data: [25, 20, 15, 10, 8, 22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1
        }]
    },
    generatedCollectedData: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
            {
                label: 'E-Waste Generated (Million Metric Tons)',
                data: [44.7, 49.8, 53.6, 53.6, 57.4, 59.6],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'E-Waste Collected (Million Metric Tons)',
                data: [8.9, 8.6, 9.3, 9.3, 10.0, 10.3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    improvementOutlookData: {
        labels: ['2022', '2024', '2026', '2028', '2030'],
        datasets: [
            {
                label: 'Projected Collection Rate (%)',
                data: [17.4, 19.2, 21.3, 24.0, 27.4],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Projected Recycling Rate (%)',
                data: [3.0, 3.3, 3.7, 4.2, 4.8],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    wasteHierarchyData: {
        labels: ['Prevention', 'Reuse', 'Recycling', 'Recovery', 'Disposal'],
        datasets: [{
            data: [10, 20, 30, 25, 15],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
};


// Chart initialization
window.onload = function() {}
    // Global E-Waste Generated and Collected (Combination of Bar and Line Graph)
    new Chart(document.getElementById('generatedCollectedChart'), {
        type: 'bar',
        data: data.generatedCollectedData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // E-Waste Recycling Rate (Bar Chart)
    new Chart(document.getElementById('recyclingRateChart'), {
        type: 'bar',
        data: data.recyclingRateData,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    // Top E-Waste-Generating Countries (Bar Chart)
new Chart(document.getElementById('topCountriesChart'), {
    type: 'bar',
    data: data.topCountriesData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Composition of Global E-Waste (Pie Chart)
new Chart(document.getElementById('compositionChart'), {
    type: 'pie',
    data: data.compositionData,
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label;
                        const value = context.parsed;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    }
});

// Improvement Outlook 2022-2030 (Line Chart)
new Chart(document.getElementById('improvementOutlookChart'), {
    type: 'line',
    data: data.improvementOutlookData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// Hierarchy and Considerations (Pie Chart)
new Chart(document.getElementById('wasteHierarchyChart'), {
    type: 'pie',
    data: data.wasteHierarchyData,
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label;
                        const value = context.parsed;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    }
});