let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Verrazano-Narrows Bridge','Golden Gate Bridge','Mackinac Bridge','George Washington Bridge','Tacoma Narrows Bridge']
,
        datasets: [{
            label: 'Span Length',
            data: [1298.4,1280.2,1158.0,1067.0,853.44],   // this is the chart data
            backgroundColor: ['red', 'blue', 'yellow', 'green','purple']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})