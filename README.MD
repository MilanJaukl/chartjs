# Chart.js builder

Charter class, centralizes and encapsulates the chart creation logic, simplifying the process across your application by providing a unified interface for initializing and configuring charts. This approach promotes code reusability and consistency, reduces duplication, and makes your application easier to maintain, extend, and test. By abstracting the complexity of chart initialization, it enhances readability

### Enhance Chart.js functionality

- auto resizing font sizes
- predefined charts
- AJAX + updating
- loading indicator

#### Cames also with:

- PHP DTO class
- Color Pallete

## Documentation

Example of config which will be return via DTO:

<pre> 
response = {
    type: "horizontalBar",
    data: {
        labels: ["A", "B", "C"],
        datasets: [
        {
            label: "Series 1",
            data: [1, 2, 3],
        },
        ],
    },
    title: "Horizontal Bar Chart",
    legendVisible: false,
    };
</pre>

Inicialization of object in javascript

<pre>
    Charter.createChart(bar, "bar");
</pre>

### Supported chart types

- Bar
- Horizontal Bar
- Pareto Chart
