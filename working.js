
var ctx = document.getElementById("myChart");


function updateConfigAsNewObject(chart) {
    chart.options = {
        responsive: true,
        title:{
            display:true,
            text: 'Chart.js'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true
            }]
        }
    }
    chart.update();
}
var white = 'rgb(255,255,255)';

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: white,
            borderColor: white,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});