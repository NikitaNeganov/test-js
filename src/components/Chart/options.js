import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Products from '../../../src/data';

export const options = {
            
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Please give me this job'
    },
    subtitle: {
        text: 'fixture.tsx'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Feature1'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Feature2'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        }
    },
    series: [{
        name: 'Female',
        color: 'rgba(223, 83, 83, .5)',
        data: forChart.slice(1,100)

    }, {
        name: 'Apache',
        color: 'rgba(123, 83, 83, .5)',
        data: forChart.slice(100,130)

    },{
        name: 'Male',
        color: 'rgba(119, 152, 191, .5)',
        data: forChart.slice(131,250)
    }]
    }