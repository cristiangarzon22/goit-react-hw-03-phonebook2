import React, { Component } from 'react';
import css from "../Filter/Filter.module.css";
import PropTypes from 'prop-types';
class Filter extends Component{
 render(){
  const {props} = this;
  return (
    <div>
      <label htmlFor="filter" className={css.label}>Find contacts by name  :  </label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={props.filter}
        onChange={props.onFilterChange}
        className={css.entrada}
      />
    </div>
  );
};
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
export default Filter;
