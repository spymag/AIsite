// --- CHART DATA ---
const internetUserYears = ['2010', '2013', '2016', '2019', '2022', '2025'];
const internetUsers = [2.0, 2.7, 3.4, 4.1, 5.0, 5.5];
const populationForInternet = [6.9, 7.2, 7.4, 7.7, 8.0, 8.2];

const mobileUserYears = ['2015', '2017', '2019', '2021', '2023', '2025'];
const smartphoneUsers = [2.0, 2.5, 3.2, 3.8, 4.3, 4.7];
const populationForMobile = [7.3, 7.5, 7.7, 7.9, 8.1, 8.2];

const populationByRegionData = {
    labels: ['Asia', 'Africa', 'Europe', 'Latin America and Caribbean', 'North America', 'Oceania'],
    datasets: [{
        data: [59.7, 18.3, 9.9, 8.4, 4.8, 0.5],
        backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        hoverOffset: 4
    }]
};

// --- REUSABLE CHART CONFIGURATION FUNCTION ---
function createLineChartConfig(yAxisTitle, primaryDataLabel, primaryData, secondaryDataLabel, secondaryData, labels, primaryBorderColor = '#36A2EB') {
    const textColor = '#EAEAEA';
    const gridColor = 'rgba(255, 255, 255, 0.1)';

    return {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: primaryDataLabel,
                    data: primaryData,
                    borderColor: primaryBorderColor,
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: primaryBorderColor,
                    pointBorderColor: '#fff',
                    pointHoverRadius: 7,
                    pointHoverBorderWidth: 2
                },
                {
                    label: secondaryDataLabel,
                    data: secondaryData,
                    borderColor: '#EAEAEA',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    yAxisID: 'y-secondary',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#333',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: yAxisTitle,
                        color: textColor
                    },
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        color: gridColor
                    }
                },
                'y-secondary': {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: secondaryDataLabel,
                        color: textColor
                    },
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: gridColor
                    }
                },
                x: {
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        color: gridColor
                    }
                }
            }
        }
    };
}

// --- CHART INITIALIZATION ---
const internetChartElement = document.getElementById('internetChart');
if (internetChartElement) {
    const internetChartCanvas = internetChartElement.getContext('2d');
    const internetChartConfig = createLineChartConfig(
        'Internet Users (Billions)',
        'Global Internet Users (Billions)',
        internetUsers,
        'Global Population (Billions)',
        populationForInternet,
        internetUserYears
    );
    new Chart(internetChartCanvas, internetChartConfig);
} else {
    console.error("Error: Canvas element 'internetChart' not found.");
}

const mobileChartElement = document.getElementById('mobileChart');
if (mobileChartElement) {
    const mobileChartCanvas = mobileChartElement.getContext('2d');
    const mobileChartConfig = createLineChartConfig(
        'Smartphone Users (Billions)',
        'Global Smartphone Users (Billions)',
        smartphoneUsers,
        'Global Population (Billions)',
        populationForMobile,
        mobileUserYears,
        '#FF6384'
    );
    new Chart(mobileChartCanvas, mobileChartConfig);
} else {
    console.error("Error: Canvas element 'mobileChart' not found.");
}

const populationPieChartElement = document.getElementById('populationPieChart');
if (populationPieChartElement) {
    const populationPieChartCanvas = populationPieChartElement.getContext('2d');
    new Chart(populationPieChartCanvas, {
        type: 'pie',
        data: populationByRegionData,
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#EAEAEA'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
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
} else {
    console.error("Error: Canvas element 'populationPieChart' not found.");
}
