import React from 'react';


const Filter = props => (
  <select onChange={props.handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {props.filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>
);

Filter.defaultProps = {
  filters: ['all'],
  handleChange: ()=>{}
}

export default Filter;
