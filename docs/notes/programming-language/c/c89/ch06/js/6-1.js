functionPlot({
    target: '#representation-of-a-rectangle',
    title: 'Representation of a Rectangle',
    disableZoom: true,
    xAxis: {
        label: 'x - axis',
        domain: [0, 8]
    },
    yAxis: {
        label: 'y - axis',
        domain: [0, 8]
    },
    data: [
        {
            points: [
                [2, 2],
                [2, 6],
                [6, 6],
                [6, 2],
                [2, 2]
            ],
            fnType: 'points',
            graphType: 'polyline'
        },
        {
            points: [
                [2, 2]
            ],
            fnType: 'points',
            graphType: 'scatter',
            color: 'black'
        },
        {
            graphType: 'text',
            location: [1.5, 1.5],
            text: 'pt1'
        },
        {
            points: [
                [6, 6]
            ],
            fnType: 'points',
            graphType: 'scatter',
            color: 'black'
        },
        {
            graphType: 'text',
            location: [6.2, 6.2],
            text: 'pt2'
        }
    ]
})
