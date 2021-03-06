
var ctx = document.getElementById("myChart");


var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00","6:00", "7:00", "8:00","9:00", "10:00", "11:00","12:00", "13:00", "14:00","15:00","16:00", "17:00", "18:00","19:00", "20:00", "21:00", "22:00","23:00"],
        datasets: [{
            label: '# of Votes',
            data: [20.625, 20.562, 20.562, 20.5, 20.5, 20.5, 20.375, 20.25, 20.375, 20.25, 20.125, 20.187, 20.125, 20.125, 20.062, 19.937, 19.875, 19.687, 19.687, 19.562, 19.562, 19.562, 19.625, 19.562, 19.437, 19.562, 19.562, 19.5, 19.5, 19.375, 19.562, 19.625, 19.562, 19.625, 19.687, 19.625, 19.5, 19.687, 19.687, 19.687, 19.687, 19.562, 19.625, 19.687, 19.687, 19.687, 19.687, 19.75, 19.875, 19.75, 19.812, 19.812, 19.687, 19.812, 19.875, 19.875, 19.812, 19.875, 19.812, 19.937, 19.937, 19.875, 20.0, 19.75, 19.937, 20.0, 20.0, 20.0, 20.062, 19.937, 20.062, 20.062, 19.937, 20.062, 20.062, 19.875, 19.875, 19.937, 19.812, 20.0, 19.812, 19.875, 19.875, 19.75, 19.812, 19.812, 19.875, 19.875, 19.812, 19.812, 19.625, 19.687, 19.687, 19.812, 19.625, 19.75, 19.562, 19.625, 19.625, 19.562, 19.562, 19.625, 19.75, 19.687, 19.437, 19.625, 19.625, 19.562, 19.562, 19.562, 19.625, 19.625, 19.562, 19.437, 19.437, 19.5, 19.625, 19.5, 19.687, 19.75, 19.687, 19.625, 19.687, 19.625, 20.0, 20.0, 20.0, 20.062, 20.062, 20.25, 20.125, 20.187, 19.875, 20.0, 20.0, 20.0, 19.75, 19.75, 19.75, 20.0, 19.875, 19.937, 19.875, 19.687, 19.75, 19.687, 19.625, 19.437, 19.562, 19.5, 19.562, 19.562, 19.625, 19.562, 19.625, 19.375, 19.437, 19.312, 19.437, 19.25, 19.437, 19.312, 19.375, 19.312, 19.312, 19.25, 19.312, 19.25, 19.187, 19.25, 19.187, 19.125, 19.25, 19.125, 19.25, 19.125, 19.0, 18.937, 19.062, 18.812, 18.812, 18.937, 18.75, 18.687, 18.75, 18.625, 18.75, 18.687, 18.625, 18.75, 18.5, 18.75, 18.562, 18.687, 18.5, 18.562, 18.687, 18.562, 18.687, 18.5, 18.625, 18.625, 18.75, 18.562, 18.687, 18.75, 18.625, 18.187, 18.562, 18.75, 18.75, 18.937, 18.812, 18.937, 19.0, 19.187, 19.375, 19.437, 19.562, 19.375, 19.562, 19.437, 18.125, 19.25, 19.875, 19.437, 19.687, 19.812, 19.937, 19.75, 20.0, 19.937, 19.875, 19.937, 19.875, 19.875, 20.0, 19.937, 20.187, 20.187, 20.062, 19.875, 20.062, 20.0, 19.812, 19.875, 19.937, 19.812, 19.937, 20.0, 20.062, 19.75, 19.812, 19.687, 19.75, 19.812, 19.75, 19.562, 19.5, 19.75, 19.75, 19.75, 19.687, 19.437, 19.437, 19.5, 19.437, 19.5, 19.312, 19.437, 19.375, 19.312, 19.187, 19.25, 19.187, 19.0, 19.187, 18.937, 19.125, 19.0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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