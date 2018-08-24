import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import products, { options } from '../../data';
import { getRandomColor } from '../../utils.js';
import * as actions from '../../redux/actions';
// import options from './options';

class Chart extends Component {
  yearChangedHandler = (event) => {
    const year = Number(event.target.value);
    this.props.onSetYear(year);
  }

  displayTypeChangedHandler = (event) => {
    const displayType = event.target.value;
    this.props.onSetType(displayType);
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
            series: this.props.data,
          }}
        />
      </div>
    );
  }
}

const selectDataByGroups = data => data.reduce((prevValue, newValue) => {
  const nv = newValue.data[0];
  if (nv[0] > 150) {
    prevValue[2].push(nv);
  } else if (nv[0] < 100) {
    prevValue[0].push(nv);
  } else {
    prevValue[1].push(nv);
  }
  return prevValue;
}, [[], [], []]).map((v, i) => ({
  name: `Group ${i + 1}`,
  color: getRandomColor(),
  data: v,
}));

const mapStateToProps = (state) => {
  const { displayType, data, year } = state.data;
  console.log(selectDataByGroups(data[year]));
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
