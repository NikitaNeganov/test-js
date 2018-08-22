import React, { Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Products from '../../../src/data';
//import options from './options';

class Chart extends Component {
    state = {
        year: 2015,
        displayType: 'Goods',
        displayData: []
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    componentWillMount() {
        console.log(this.state)
        let seriesData = [];
        const smth = Products.map(obj => {
            //console.log(obj);
            //console.log(forChart)
            seriesData.push(
                {
                    name: obj['name'], 
                    color: this.getRandomColor(), 
                    data: [[obj['feature1'], obj['feature2']]]
                }
            )
        })
        console.log(seriesData)
        this.setState({
            ...this.state,
            displayData: seriesData
        })
        
    }
    
    yearChangedHandler = (event) => {
        this.setState({
            ...this.state,
            year: event.target.value
        })
    }

    displayTypeChangedHandler = (event) => {
        this.setState({
            ...this.state,
            displayType: event.target.value
        })
    }

    render() {
        
        const options = {
            
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
                        pointFormat: '{point.x} F1, {point.y} F2'
                    }
                }
            },
            series: this.state.displayData
            }

        return (
            <div>
                <select onChange={(e) => this.displayTypeChangedHandler(e)}>
                    <option>Goods</option>
                    <option>Groups of Goods</option>
                </select>
                <select onChange={(e) => this.yearChangedHandler(e)}>
                    <option>2015</option>
                    <option>2016</option>
                </select>
                <select></select>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        )
    }
}

export default Chart;