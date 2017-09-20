import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash/fp';
import classNames from 'classnames';

const SortableTableRow = (props) => {
  const userId = _.flow(_.find({name: 'id'}), _.get('value'))(props.rowData);
  const userName = _.flow(_.find({name: 'name'}), _.get('value'))(props.rowData);

  return <tr onMouseEnter={() => props.onMouseEnter(userName)} onMouseLeave={() => props.onMouseLeave()} className={classNames({hovered: props.hoveredRowName === userName})}>
    {props.rowData.map((rowItem, index) => <td data-th={props.headers[index].title} key={_.uniqueId('__SortableTableRow__')} onClick={() => props.onCellClick(userId, rowItem.name)} className={classNames({'sorted': rowItem.name === props.columnNameSortBy})}>{rowItem.value}</td>)}
  </tr>
}

SortableTableRow.propTypes = {
  rowData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  onCellClick: PropTypes.func.isRequired,

};

export default SortableTableRow
