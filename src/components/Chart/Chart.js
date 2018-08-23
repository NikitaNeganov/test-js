import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import products, { options } from '../../data';
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
    options.series = this.state.displayData;

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
