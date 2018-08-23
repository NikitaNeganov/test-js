import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import products from '../../data';
// import options from './options';

class Chart extends Component {
  constructor(props) {
    super(props);
    const year = 2016;
    this.state = {
      year,
      displayType: 'Goods',
      displayData: this.getDataByYear(year),
    };
  }

    getDataByYear = (year) => {
      const seriesData = [];
      if (!this.state || this.state.displayType !== 'Groups of Goods'){
        products.forEach((obj) => {
          // console.log(obj);
          // console.log(forChart)
          if (obj.year === year) {
            seriesData.push(
              {
                name: obj.name,
                color: this.getRandomColor(),
                data: [[obj.feature1, obj.feature2]],
              },
            );
          }
        });
      } else {
        let seriesMore150 = [];
        let seriesLess100 = [];
        let seriesOther = [];
        products.forEach(obj => {
          if (obj.feature1 > 150){
            seriesMore150.push(
              [obj.feature1, obj.feature2]
            )
          } else if (obj.feature1 < 100) {
            seriesLess100.push(
              [obj.feature1, obj.feature2]
            )
          } else {
            seriesOther.push(
              [obj.feature1, obj.feature2]
            )
          }
        })
        seriesData.push(
          
            {
              name: 'Feature1 > 150',
              color: this.getRandomColor(),
              data: seriesMore150
            }, {
              name: 'Feature1 < 100',
              color: this.getRandomColor(),
              data: seriesLess100
            }, {
              name: 'Other',
              color: this.getRandomColor(),
              data: seriesOther
            }
          
        )
      }
      console.log(seriesData[1]);
      return seriesData;
    }

    getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    yearChangedHandler = (event) => {
      const year = Number(event.target.value);
      this.setState({
        year,
        displayData: this.getDataByYear(year),
      });
    }

    displayTypeChangedHandler = (event) => {
      this.setState({
        displayType: event.target.value,
      });
    }

    render() {
      const options = {

        chart: {
          type: 'scatter',
          zoomType: 'xy',
        },
        title: {
          text: 'Please give me this job',
        },
        subtitle: {
          text: 'fixture.tsx',
        },
        xAxis: {
          title: {
            enabled: true,
            text: 'Feature1',
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
        },
        yAxis: {
          title: {
            text: 'Feature2',
          },
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 100,
          y: 70,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
          borderWidth: 1,
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)',
                },
              },
            },
            states: {
              hover: {
                marker: {
                  enabled: false,
                },
              },
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x} F1, {point.y} F2',
            },
          },
        },
        series: this.state.displayData,
      };

      return (
        <div>
          <select onChange={this.displayTypeChangedHandler} value={this.state.displayType}>
            <option>Goods</option>
            <option>Groups of Goods</option>
          </select>
          <select onChange={this.yearChangedHandler} value={this.state.year}>
            <option>2016</option>
            <option>2015</option>
          </select>
          <select />
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      );
    }
}

export default Chart;