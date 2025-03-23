// Sample data for internet users (in billions)
const internetData = {
    labels: ['2010', '2013', '2016', '2019', '2022', '2025'],
    datasets: [{
        label: 'Global Internet Users (Billions)',
        data: [2.0, 2.7, 3.4, 4.1, 5.0, 5.5],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false
    }, {
        label: 'Global Population (Billions)',
        data: [6.9, 7.2, 7.4, 7.7, 8.0, 8.2],
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 2,
        fill: false,
        yAxisID: 'y-secondary'
    }]
};

// Sample data for smartphone users (in billions)
const mobileData = {
    labels: ['2015', '2017', '2019', '2021', '2023', '2025'],
    datasets: [{
        label: 'Global Smartphone Users (Billions)',
        data: [2.0, 2.5, 3.2, 3.8, 4.3, 4.7],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false
    }, {
        label: 'Global Population (Billions)',
        data: [7.3, 7.5, 7.7, 7.9, 8.1, 8.2], // Adjusted population data for the mobile timeline
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 2,
        fill: false,
        yAxisID: 'y-secondary'
    }]
};

// Sample data for global population by region (approximate percentages)
const populationByRegionData = {
    labels: ['Asia', 'Africa', 'Europe', 'Latin America and Caribbean', 'North America', 'Oceania'],
    datasets: [{
        data: [59.7, 18.3, 9.9, 8.4, 4.8, 0.5], // Approximate percentages
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
        ],
        hoverOffset: 4
    }]
};

// Get the canvas elements
const internetChartCanvas = document.getElementById('internetChart').getContext('2d');
const mobileChartCanvas = document.getElementById('mobileChart').getContext('2d');
const populationPieChartCanvas = document.getElementById('populationPieChart').getContext('2d');

// Create the internet usage chart
new Chart(internetChartCanvas, {
    type: 'line',
    data: internetData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Internet Users (Billions)'
                }
            },
            'y-secondary': {
                type: 'linear',
                position: 'right',
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Global Population (Billions)'
                },
                grid: {
                    drawOnChartArea: false // Don't draw grid lines for the secondary axis
                }
            }
        }
    }
});

// Create the mobile phone usage chart
new Chart(mobileChartCanvas, {
    type: 'line',
    data: mobileData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Smartphone Users (Billions)'
                }
            },
            'y-secondary': {
                type: 'linear',
                position: 'right',
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Global Population (Billions)'
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }
});

// Create the population by region pie chart
new Chart(populationPieChartCanvas, {
    type: 'pie',
    data: populationByRegionData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (context.parsed !== null) {
                            label += ': ' + context.parsed.toFixed(1) + '%';
                        }
                        return label;
                    }
                }
            }
        }
    }
});
