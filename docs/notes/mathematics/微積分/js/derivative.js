{
    const a = functionPlot({
        target: '#derivative-a',
        disableZoom: true,
        width: 400,
        xAxis: { domain: [-4, 8] },
        yAxis: { domain: [-4, 8] },
        annotations: [
            {
                y: 3.333333333,
                text: 'max'
            },
            {
                y: 2,
                text: 'min'
            }
        ],
        data: [
            {
                fn: '(x^3) / 3 - 2x^2 + 3x + 2',
                graphType: 'polyline',
                derivative: {
                    fn: 'x^2 - 4x + 3',
                    updateOnMouseMove: true
                }
            }
        ]
    });

    const b = functionPlot({
        target: '#derivative-b',
        disableZoom: true,
        width: 400,
        xAxis: { domain: [-4, 8] },
        yAxis: { domain: [-4, 8] },
        annotations: [
            {
                x: 1,
                text: 'x-intercept'
            },
            {
                x: 3,
                text: 'x-intercept'
            }
        ],
        data: [
            {
                fn: 'x^2 - 4x + 3',
                graphType: 'polyline'
            }
        ]
    });

    a.addLink(b);
    b.addLink(a);
}