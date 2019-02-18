export const config = {
    type: "bar",

    data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(237, 75, 130, 0.4)",
                borderColor: "#e91e63",
                borderWidth: 2,
                //borderDash:[10,5],
                //lineTension: 0,
                spanGaps: false,
                data: [
                    [47],
                    [66],
                    [6],
                    [50],
                    [34],
                    [52],
                    [20],
                    [54],
                    [65],
                    [88],
                    [12],
                    [377]
                ],

                fill: false
            },
            {
                label: "My Second dataset",
                //fill: false,
                backgroundColor: "rgba(118, 255, 3, 0.5)",
                borderColor: "#52b202",
                borderWidth: 1.5,
                data: [
                    [23],
                    [12],
                    [25],
                    [0],
                    [27],
                    [18],
                    [55],
                    [30],
                    [1],
                    [32],
                    [23],
                    [34]
                ]
            }
        ]
    },
    options: {
        responsive: true,
        animation: {
            easing: "easeInOutBack",
            duration: 2000
        },
        layout: {
            padding: 30
        },
        title: {
            display: true,
            text: "Chart.js Line Chart"
        },
        tooltips: {
            mode: "index",
            intersect: false
        },
        hover: {
            mode: "nearest",
            intersect: true
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Month"
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Value"
                    }
                }
            ]
        }
    }
};
