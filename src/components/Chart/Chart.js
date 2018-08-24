import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import products, { options } from '../../data';
import * as actions from '../../redux/actions';
// import options from './options';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData: this.getDataByType(this.props.data, this.props.displayType),
    };
  }

  getDataByType(data, type) {
    const seriesData = [];
    if (type === 'Goods') {
      data.forEach((obj) => {
        seriesData.push({
          name: obj.name,
          color: this.getRandomColor(),
          data: [[obj.feature1, obj.feature2]],
        });
      });
    } else if (type === 'Groups of Goods') {
      const seriesMore150 = [];
      const seriesLess100 = [];
      const seriesOther = [];
      data.forEach((el) => {
        el.forEach((obj) => {
          if (obj.feature1 > 150) {
            seriesMore150.push([obj.feature1, obj.feature2]);
          } else if (obj.feature1 < 100) {
            seriesLess100.push([obj.feature1, obj.feature2]);
          } else {
            seriesOther.push([obj.feature1, obj.feature2]);
          }
        });
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
    return seriesData;
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
    this.props.onSetYear(year);
    this.setState({
      displayData: this.getDataByProps(year, this.props.displayType),
    });
  }

  displayTypeChangedHandler = (event) => {
    const displayType = event.target.value;
    this.props.onSetType(displayType);
    this.setState({
      displayData: this.getDataByType(this.props.data, displayType),
    });
  }

  render() {
    return (
      <div>
        <select onChange={this.displayTypeChangedHandler} value={this.props.displayType}>
          <option>Goods</option>
          <option>Groups of Goods</option>
        </select>
        <select onChange={this.yearChangedHandler} value={this.props.year}>
          <option>2016</option>
          <option>2015</option>
        </select>
        <button onClick={() => console.log(this.props.data)}>Console.log</button>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            ...options,
            series: this.state.displayData,
          }}
        />
      </div>
    );
  }
}

const selectDataByGroups = data => data.reduce((prevValue, newValue) => {
  if (newValue.feature1 > 150) {
    prevValue[2].push(newValue);
  } else if (newValue.feature1 < 100) {
    prevValue[0].push(newValue);
  } else {
    prevValue[1].push(newValue);
  }
  return prevValue;
}, [[], [], []]);

const mapStateToProps = (state) => {
  const { displayType, data, year } = state.data;
  return {
    year,
    displayType,
    data: displayType === 'Groups of Goods' ? selectDataByGroups(data[year]) : data[year],
  };
};
const mapDispatchToProps = {
  onSetYear: actions.setYear,
  onSetType: actions.setType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
