import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'fixed-data-table-2';
import classNames from 'classnames';
import Utils from './datagrid.utils';

export default class HeaderCell extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    gridId: PropTypes.string.isRequired,
    column: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    currentSortColumn: PropTypes.string,
    currentSortOrder: PropTypes.string,
    onSortChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentSortOrder: null,
    currentSortColumn: null,
  };

  onSortChange = (e) => {
    if (!Utils.isSortable(this.props.column)) return false;
    e.preventDefault();
    const order = (
      this.props.currentSortColumn === Utils.getColumnKey(this.props.column) &&
      this.props.currentSortOrder === 'asc'
    ) ? 'desc' : 'asc';
    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.gridId,
        this.props.column,
        order,
      );
    }
  }

  render() {
    const {
      children,
      gridId,
      currentSortColumn,
      currentSortOrder,
      column,
      onSortChange,
      ...props,
    } = this.props;
    const cellClassNames = classNames({
      'oc-datagrid-cell-header': true,
      clickable: Utils.isSortable(this.props.column),
    });
    return (
      <Cell className={cellClassNames} onClick={this.onSortChange} {...props}>
        {children}
        {
          currentSortColumn === Utils.getColumnKey(column) &&
          currentSortOrder &&
          (currentSortOrder === 'desc' ? ' ↓' : ' ↑')
        }
      </Cell>
    );
  }
}
