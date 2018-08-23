import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import products from '../../data';
// import options from './options';

class Chart extends Component {
  constructor(props) {
    super(props);
    const year = 2016;
    const displayType = 'Goods';
    this.state = {
      year,
      displayType,
      displayData: this.getDataByProps(year, displayType),
    };
  }

  getDataByProps(year, displayType) {
    //      let array2015 = [];
    //      let array2016 = [];
    //      products.forEach(el => {
    //        if (el.year === 2015){
    //          array2015.push(el)
    //        } else if (el.year === 2016){
    //          array2016.push(el)
    //        }
    //      })
    //      const productData = {
    //        2015: array2015,
    //        2016: array2016,
    //      }
    //      console.log('ProductData inside GetDataByProps',productData)
    //      console.log('ProductData[2016] inside GetDataByProps',productData[year])
    const reduceData = data => data.reduce((previousValue, newValue) => {
      const existingData = previousValue[newValue.year];
      if (existingData) {
        return {
          ...previousValue,
          [newValue.year]: [...existingData, newValue],
        };
      }

      return {
        ...previousValue,
        [newValue.year]: [newValue],
      };
    }, {});
    const productData = reduceData(products);
    return this.getDataByDisplayType(productData[year], displayType);
  }

  getDataByDisplayType(data, displayType) {
    const seriesData = [];
    if (displayType === 'Goods') {
      data.forEach((obj) => {
        seriesData.push(
          {
            name: obj.name,
            color: this.getRandomColor(),
            data: [[obj.feature1, obj.feature2]],
          },
        );
      });
    } else if (displayType === 'Groups of Goods') {
      const seriesMore150 = [];
      const seriesLess100 = [];
      const seriesOther = [];
      data.forEach((obj) => {
        if (obj.feature1 > 150) {
          seriesMore150.push(
            [obj.feature1, obj.feature2],
          );
        } else if (obj.feature1 < 100) {
          seriesLess100.push(
            [obj.feature1, obj.feature2],
          );
        } else {
          seriesOther.push(
            [obj.feature1, obj.feature2],
          );
        }
      });
      seriesData.push(

        {
          name: 'Feature1 > 150',
          color: this.getRandomColor(),
          data: seriesMore150,
        }, {
          name: 'Feature1 < 100',
          color: this.getRandomColor(),
          data: seriesLess100,
        }, {
          name: 'Other',
          color: this.getRandomColor(),
          data: seriesOther,
        },

      );
    }
    console.log('SeriesData inside getdataByDisplayType', seriesData);
    return seriesData;
  }

  //    getDataByType = (type) => {
  //      let seriesData = [];
  //      let array2015 = [];
  //      let array2016 = [];
  //      products.forEach(el => {
  //        if (el.year === 2015){
  //          array2015.push(el)
  //        } else if (el.year === 2016){
  //          array2016.push(el)
  //        }
  //      })
  //      const productData = {
  //        2015: array2015,
  //        2016: array2016,
  //      }
  //      let seriesMore150 = [];
  //      let seriesLess100 = [];
  //      let seriesOther = [];
  //      if (type === 'Groups of Goods') {
  //        productData[this.state.year].forEach(obj => {
  //          if (obj.feature1 > 150){
  //            seriesMore150.push(
  //              [obj.feature1, obj.feature2]
  //            )
  //          } else if (obj.feature1 < 100) {
  //            seriesLess100.push(
  //              [obj.feature1, obj.feature2]
  //            )
  //          } else {
  //            seriesOther.push(
  //              [obj.feature1, obj.feature2]
  //            )
  //          }
  //      })
  //      seriesData.push(
  //
  //          {
  //            name: 'Feature1 > 150',
  //            color: this.getRandomColor(),
  //            data: seriesMore150
  //          }, {
  //            name: 'Feature1 < 100',
  //            color: this.getRandomColor(),
  //            data: seriesLess100
  //          }, {
  //            name: 'Other',
  //            color: this.getRandomColor(),
  //            data: seriesOther
  //          }
  //
  //      )
  //      } else if (type === 'Goods'){
  //        productData[this.state.year].forEach(obj => {
  //          seriesData.push(
  //            {
  //              name: obj.name,
  //              color: this.getRandomColor(),
  //              data: [[obj.feature1, obj.feature2]],
  //            },
  //          );
  //        })
  //      }
  //
  //      return seriesData;
  //    }
  //
  //
  //    getDataByYear = (year) => {
  //      let seriesData = [];
  //      let array2015 = [];
  //      let array2016 = [];
  //
  //      products.forEach(el => {
  //        if (el.year === 2015){
  //          array2015.push(el)
  //        } else if (el.year === 2016){
  //          array2016.push(el)
  //        }
  //      })
  //      const productData = {
  //        2015: array2015,
  //        2016: array2016,
  //      }
  //      if (!this.state || (this.state.type === 'Goods')){
  //        productData[year].forEach(obj => {
  //          seriesData.push(
  //            {
  //              name: obj.name,
  //              color: this.getRandomColor(),
  //              data: [[obj.feature1, obj.feature2]],
  //            },
  //          );
  //        })
  //      } else if (this.state.type === 'Groups of Goods'){
  //        let seriesMore150 = [];
  //        let seriesLess100 = [];
  //        let seriesOther = [];
  //        productData[year].forEach(obj => {
  //          if (obj.feature1 > 150){
  //            seriesMore150.push(
  //              [obj.feature1, obj.feature2]
  //            )
  //          } else if (obj.feature1 < 100) {
  //            seriesLess100.push(
  //              [obj.feature1, obj.feature2]
  //            )
  //          } else {
  //            seriesOther.push(
  //              [obj.feature1, obj.feature2]
  //            )
  //          }
  //      })
  //      seriesData.push(
  //          {
  //            name: 'Feature1 > 150',
  //            color: this.getRandomColor(),
  //            data: seriesMore150
  //          }, {
  //            name: 'Feature1 < 100',
  //            color: this.getRandomColor(),
  //            data: seriesLess100
  //          }, {
  //            name: 'Other',
  //            color: this.getRandomColor(),
  //            data: seriesOther
  //          }
  //
  //      )
  //      }
  //
  //      return seriesData;
  //    }

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
        displayData: this.getDataByProps(year, this.state.displayType),
      });
    }

    displayTypeChangedHandler = (event) => {
      const displayType = event.target.value;
      this.setState({
        displayType,
        displayData: this.getDataByProps(this.state.year, displayType),
      });
      console.log(this.state);
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
