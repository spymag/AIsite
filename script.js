// Sample data for internet users (in billions)
const internetData = {
    labels: ['2010', '2013', '2016', '2019', '2022', '2025'],
    datasets: [{
        label: 'Global Internet Users (Billions)',
        data: [2.0, 2.7, 3.4, 4.1, 5.0, 5.5],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false
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
    }]
};

// Get the canvas elements
const internetChartCanvas = document.getElementById('internetChart').getContext('2d');
const mobileChartCanvas = document.getElementById('mobileChart').getContext('2d');

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
                    text: 'Billions of Users'
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
                    text: 'Billions of Users'
                }
            }
        }
    }
});
