// Sample data for internet and mobile phone usage trends
const data = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
    datasets: [
        {
            label: 'Internet Usage (%)',
            data: [40, 45, 50, 55, 60, 65, 70],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Mobile Phone Usage (%)',
            data: [30, 35, 40, 45, 50, 55, 60],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            fill: false,
        },
    ],
};

// Configuration options for the chart
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

// Render the chart
window.onload = function () {
    const ctx = document.getElementById('usageChart').getContext('2d');
    new Chart(ctx, config);
};
