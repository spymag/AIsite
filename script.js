// --- CHART DATA ---
// All data is grouped here for easy management and overview.

// Data for the Global Internet Users Chart
const internetUserYears = ['2010', '2013', '2016', '2019', '2022', '2025']; // X-axis labels: Years
const internetUsers = [2.0, 2.7, 3.4, 4.1, 5.0, 5.5]; // Primary Y-axis data: Internet users in billions
const populationForInternet = [6.9, 7.2, 7.4, 7.7, 8.0, 8.2]; // Secondary Y-axis data: Global population in billions, corresponding to internetUserYears

// Data for the Global Smartphone Users Chart
const mobileUserYears = ['2015', '2017', '2019', '2021', '2023', '2025']; // X-axis labels: Years
const smartphoneUsers = [2.0, 2.5, 3.2, 3.8, 4.3, 4.7]; // Primary Y-axis data: Smartphone users in billions
const populationForMobile = [7.3, 7.5, 7.7, 7.9, 8.1, 8.2]; // Secondary Y-axis data: Global population in billions, corresponding to mobileUserYears (adjusted timeline)

// Data for the Global Population by Region Pie Chart
const populationByRegionData = {
    labels: ['Asia', 'Africa', 'Europe', 'Latin America and Caribbean', 'North America', 'Oceania'], // Labels for each pie slice
    datasets: [{
        data: [59.7, 18.3, 9.9, 8.4, 4.8, 0.5], // Data values: Approximate population percentages for each region
        backgroundColor: [ // Colors for each pie slice
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
        ],
        hoverOffset: 4 // Slightly enlarges slice on hover
    }]
};

// --- REUSABLE CHART CONFIGURATION FUNCTION ---

/**
 * Creates a configuration object for a Chart.js line chart with dual Y-axes.
 * This function helps in avoiding repetitive configuration for similar line charts.
 *
 * @param {string} yAxisTitle - Title for the primary Y-axis (e.g., 'Internet Users (Billions)').
 * @param {string} primaryDataLabel - Label for the primary dataset (e.g., 'Global Internet Users (Billions)').
 * @param {number[]} primaryData - Array of numerical data for the primary dataset.
 * @param {string} secondaryDataLabel - Label for the secondary dataset (e.g., 'Global Population (Billions)').
 * @param {number[]} secondaryData - Array of numerical data for the secondary dataset.
 * @param {string[]} labels - Array of labels for the X-axis (typically years or categories).
 * @param {string} [primaryBorderColor='rgba(54, 162, 235, 1)'] - Border color for the primary dataset line. Defaults to blue.
 * @returns {object} A Chart.js configuration object.
 */
function createLineChartConfig(yAxisTitle, primaryDataLabel, primaryData, secondaryDataLabel, secondaryData, labels, primaryBorderColor = 'rgba(54, 162, 235, 1)') {
    return {
        type: 'line', // Specifies the chart type
        data: {
            labels: labels,
            labels: labels, // X-axis labels
            datasets: [
                {
                    label: primaryDataLabel, // Legend label for the primary data
                    data: primaryData,       // Data points for the primary line
                    borderColor: primaryBorderColor, // Line color
                    borderWidth: 2,          // Line thickness
                    fill: false              // Do not fill area under the line
                },
                {
                    label: secondaryDataLabel, // Legend label for the secondary data
                    data: secondaryData,       // Data points for the secondary line
                    borderColor: 'rgba(0, 0, 0, 0.7)', // Line color (typically for population)
                    borderWidth: 2,          // Line thickness
                    fill: false,             // Do not fill area under the line
                    yAxisID: 'y-secondary'   // Associates this dataset with the secondary Y-axis
                }
            ]
        },
        options: {
            responsive: true, // Makes the chart responsive to container size
            scales: {
                y: { // Configuration for the primary Y-axis
                    beginAtZero: true, // Ensures the Y-axis starts at 0
                    title: {
                        display: true,   // Show the axis title
                        text: yAxisTitle // Text for the axis title
                    }
                },
                'y-secondary': { // Configuration for the secondary Y-axis
                    type: 'linear',      // Type of scale
                    position: 'right',   // Position the axis on the right
                    beginAtZero: false,  // Secondary axis (e.g., population) may not need to start at 0
                    title: {
                        display: true,   // Show the axis title
                        text: secondaryDataLabel // Title text (reusing dataset label for simplicity)
                    },
                    grid: {
                        drawOnChartArea: false // Prevents grid lines from this axis cluttering the chart
                    }
                }
            }
        }
    };
}

// --- CHART INITIALIZATION ---
// Each chart is initialized below, checking for the existence of its canvas element first.

// Initialize the Global Internet Users Chart
// This chart displays the trend of global internet users alongside global population figures over several years.
const internetChartElement = document.getElementById('internetChart'); // Get the canvas element
if (internetChartElement) { // Check if the canvas element exists
    const internetChartCanvas = internetChartElement.getContext('2d'); // Get the 2D rendering context
    // Create the chart configuration using the reusable function
    const internetChartConfig = createLineChartConfig(
        'Internet Users (Billions)',        // Primary Y-axis title
        'Global Internet Users (Billions)', // Primary dataset label
        internetUsers,                      // Primary dataset
        'Global Population (Billions)',     // Secondary dataset label
        populationForInternet,              // Secondary dataset
        internetUserYears                   // X-axis labels (years)
    );
    new Chart(internetChartCanvas, internetChartConfig); // Create the new chart instance
} else {
    // Log an error if the canvas element is not found
    console.error("Error: Canvas element 'internetChart' not found.");
}

// Initialize the Global Smartphone Users Chart
// This chart shows the growth of global smartphone users, also compared against global population data.
const mobileChartElement = document.getElementById('mobileChart'); // Get the canvas element
if (mobileChartElement) { // Check if the canvas element exists
    const mobileChartCanvas = mobileChartElement.getContext('2d'); // Get the 2D rendering context
    // Create the chart configuration using the reusable function
    const mobileChartConfig = createLineChartConfig(
        'Smartphone Users (Billions)',      // Primary Y-axis title
        'Global Smartphone Users (Billions)',// Primary dataset label
        smartphoneUsers,                    // Primary dataset
        'Global Population (Billions)',   // Secondary dataset label
        populationForMobile,                // Secondary dataset
        mobileUserYears,                    // X-axis labels (years)
        'rgba(255, 99, 132, 1)'           // Custom border color for this chart's primary line
    );
    new Chart(mobileChartCanvas, mobileChartConfig); // Create the new chart instance
} else {
    // Log an error if the canvas element is not found
    console.error("Error: Canvas element 'mobileChart' not found.");
}

// Initialize the Global Population by Region Pie Chart
// This chart presents the approximate distribution of the global population across different geographical regions.
const populationPieChartElement = document.getElementById('populationPieChart'); // Get the canvas element
if (populationPieChartElement) { // Check if the canvas element exists
    const populationPieChartCanvas = populationPieChartElement.getContext('2d'); // Get the 2D rendering context
    // Configuration for the pie chart (does not use the reusable line chart function)
    new Chart(populationPieChartCanvas, {
        type: 'pie', // Specifies the chart type
        data: populationByRegionData, // Data for the pie chart
        options: {
            responsive: true, // Makes the chart responsive
            plugins: {
                legend: {
                    position: 'right', // Positions the legend to the right of the pie
                },
                tooltip: { // Configuration for tooltips shown on hover
                    callbacks: {
                        // Customizes the tooltip label to show percentage
                        label: function(context) {
                            let label = context.label || ''; // Get the current label
                            if (context.parsed !== null) {
                                // Append the percentage value, fixed to one decimal place
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
    // Log an error if the canvas element is not found
    console.error("Error: Canvas element 'populationPieChart' not found.");
}
