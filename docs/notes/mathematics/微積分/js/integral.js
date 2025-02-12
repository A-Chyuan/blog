{
    let integralOptions = {
        target: '#integral',
        disableZoom: true,
        xAxis: { label: 'x - axis', domain: [0, 3] },
        yAxis: { label: 'y - axis', domain: [0, 5] },
        annotations: [
            { x: 1, text: 'a' },
            { x: 2, text: 'b' }
        ],
        data: [
            {
                fn: 'x^2'
            },
            {
                fn: 'x^2',
                range: [1, 2],
                nSamples: 3,
                closed: true
            }
        ]
    };
    functionPlot(integralOptions);

    document.querySelector('#integralSlider').addEventListener('input', (event) => {
        const output = document.querySelector('#integralSliderOutput');
        output.value = event.target.value;
        integralOptions.data[1].nSamples = integralSlider.value;
        functionPlot(integralOptions);
    });
}