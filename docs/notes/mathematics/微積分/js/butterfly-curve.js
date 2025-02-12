{
    functionPlot({
        target: '#butterfly-curve',
        disableZoom: true,
        data: [
            {
                x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
                y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
                range: [0, 12 * Math.PI],
                fnType: 'parametric',
                graphType: 'polyline'
            }
        ]
    });
}