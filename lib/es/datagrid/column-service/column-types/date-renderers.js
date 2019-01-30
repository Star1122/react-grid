var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import moment from 'moment';
import { FormattedMessage as M } from 'react-intl';
import { DateInput } from '@opuscapita/react-datetime';

export var dateRender = function dateRender(dateProps) {
  return React.createElement(DateInput, dateProps);
};

var dateIsValid = function dateIsValid(val) {
  return moment(val).isValid();
};

var dateIsValidFormat = function dateIsValidFormat(val, dateFormat) {
  return moment(val, dateFormat, true).isValid();
};

var className = 'oc-data-grid-date';

export default {
  // dateValueRender
  valRender: function valRender(rowIndex, dateFormat, valueRender) {
    return valueRender(rowIndex, function (v) {
      if (dateIsValidFormat(v, dateFormat)) {
        return moment.utc(v, dateFormat).format(dateFormat);
      }
      if (dateIsValid(v)) {
        return moment.utc(v).format(dateFormat);
      }
      return React.createElement(M, { id: 'Grid.InvalidDate' });
    });
  },

  // dateCellEdit
  cellEdit: function cellEdit(col, column, rowIndex, tabIndex, gridId, region, dateFormat, valueParser, functions, getComponentDisabledState) {
    var cellName = 'edit';
    var dateProps = _extends({
      className: className,
      dateFormat: dateFormat,
      locale: region,
      value: functions.getItemValue(rowIndex, col),
      onChange: functions.onCellValueChange(rowIndex, col, valueParser),
      inputRef: functions.handleCellRef(rowIndex, col),
      inputProps: {
        tabIndex: tabIndex,
        id: 'ocDatagridEditInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
        onKeyDown: functions.onCellKeyDown(rowIndex, col),
        onBlur: functions.onCellBlur(rowIndex, col),
        onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey),
        style: column.style
      },
      disabled: getComponentDisabledState(rowIndex, col, cellName)
    }, col.editComponentProps);
    return dateRender(_extends({}, dateProps));
  },

  // dateCellCreate
  cellCreate: function cellCreate(col, column, rowIndex, tabIndex, gridId, region, dateFormat, valueParser, functions, getComponentDisabledState) {
    var cellName = 'create';
    var dateProps = _extends({
      className: className,
      dateFormat: dateFormat,
      locale: region,
      value: functions.getItemValue(rowIndex, col),
      onChange: functions.onCellValueChange(rowIndex, col, valueParser),
      inputRef: functions.handleCellRef(rowIndex, col),
      inputProps: {
        tabIndex: tabIndex,
        id: 'ocDatagridCreateInput-' + gridId + '-' + column.columnKey + '-' + rowIndex,
        onKeyDown: functions.onCellKeyDown(rowIndex, col),
        onBlur: functions.onCellBlur(rowIndex, col),
        onFocus: functions.onCellFocus(cellName, col.componentType, rowIndex, column.columnKey),
        style: column.style
      },
      disabled: getComponentDisabledState(rowIndex, col, cellName)
    }, col.createComponentProps);
    return dateRender(_extends({}, dateProps));
  },

  // dateFilterCell
  cellFilter: function cellFilter(col, column, tabIndex, gridId, region, dateFormat, valueParser, functions) {
    var dateProps = _extends({
      className: className,
      dateFormat: dateFormat,
      value: functions.getItemValue(col),
      onChange: functions.onCellValueChange(col, valueParser),
      locale: region,
      inputProps: {
        tabIndex: tabIndex,
        id: 'ocDatagridFilterInput-' + gridId + '-' + column.columnKey,
        style: column.style
      }
    }, col.filterComponentProps);
    return dateRender(_extends({}, dateProps));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvZGF0ZS1yZW5kZXJlcnMuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwibW9tZW50IiwiRm9ybWF0dGVkTWVzc2FnZSIsIk0iLCJEYXRlSW5wdXQiLCJkYXRlUmVuZGVyIiwiZGF0ZVByb3BzIiwiZGF0ZUlzVmFsaWQiLCJ2YWwiLCJpc1ZhbGlkIiwiZGF0ZUlzVmFsaWRGb3JtYXQiLCJkYXRlRm9ybWF0IiwiY2xhc3NOYW1lIiwidmFsUmVuZGVyIiwicm93SW5kZXgiLCJ2YWx1ZVJlbmRlciIsInYiLCJ1dGMiLCJmb3JtYXQiLCJjZWxsRWRpdCIsImNvbCIsImNvbHVtbiIsInRhYkluZGV4IiwiZ3JpZElkIiwicmVnaW9uIiwidmFsdWVQYXJzZXIiLCJmdW5jdGlvbnMiLCJnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlIiwiY2VsbE5hbWUiLCJsb2NhbGUiLCJ2YWx1ZSIsImdldEl0ZW1WYWx1ZSIsIm9uQ2hhbmdlIiwib25DZWxsVmFsdWVDaGFuZ2UiLCJpbnB1dFJlZiIsImhhbmRsZUNlbGxSZWYiLCJpbnB1dFByb3BzIiwiaWQiLCJjb2x1bW5LZXkiLCJvbktleURvd24iLCJvbkNlbGxLZXlEb3duIiwib25CbHVyIiwib25DZWxsQmx1ciIsIm9uRm9jdXMiLCJvbkNlbGxGb2N1cyIsImNvbXBvbmVudFR5cGUiLCJzdHlsZSIsImRpc2FibGVkIiwiZWRpdENvbXBvbmVudFByb3BzIiwiY2VsbENyZWF0ZSIsImNyZWF0ZUNvbXBvbmVudFByb3BzIiwiY2VsbEZpbHRlciIsImZpbHRlckNvbXBvbmVudFByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0Msb0JBQW9CQyxDQUE3QixRQUFzQyxZQUF0QztBQUNBLFNBQVNDLFNBQVQsUUFBMEIsNEJBQTFCOztBQUVBLE9BQU8sSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsU0FBYyxvQkFBQyxTQUFELEVBQWVDLFNBQWYsQ0FBZDtBQUFBLENBQW5COztBQUVQLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQU9OLE9BQU9PLEdBQVAsRUFBWUMsT0FBWixFQUFQO0FBQUEsQ0FBcEI7O0FBRUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0YsR0FBRCxFQUFNRyxVQUFOO0FBQUEsU0FBcUJWLE9BQU9PLEdBQVAsRUFBWUcsVUFBWixFQUF3QixJQUF4QixFQUE4QkYsT0FBOUIsRUFBckI7QUFBQSxDQUExQjs7QUFFQSxJQUFNRyxZQUFZLG1CQUFsQjs7QUFFQSxlQUFlO0FBQ2I7QUFDQUMsV0FGYSxxQkFFSEMsUUFGRyxFQUVPSCxVQUZQLEVBRW1CSSxXQUZuQixFQUVnQztBQUMzQyxXQUFPQSxZQUFZRCxRQUFaLEVBQXNCLFVBQUNFLENBQUQsRUFBTztBQUNsQyxVQUFJTixrQkFBa0JNLENBQWxCLEVBQXFCTCxVQUFyQixDQUFKLEVBQXNDO0FBQ3BDLGVBQU9WLE9BQU9nQixHQUFQLENBQVdELENBQVgsRUFBY0wsVUFBZCxFQUEwQk8sTUFBMUIsQ0FBaUNQLFVBQWpDLENBQVA7QUFDRDtBQUNELFVBQUlKLFlBQVlTLENBQVosQ0FBSixFQUFvQjtBQUNsQixlQUFPZixPQUFPZ0IsR0FBUCxDQUFXRCxDQUFYLEVBQWNFLE1BQWQsQ0FBcUJQLFVBQXJCLENBQVA7QUFDRDtBQUNELGFBQU8sb0JBQUMsQ0FBRCxJQUFHLElBQUcsa0JBQU4sR0FBUDtBQUNELEtBUk0sQ0FBUDtBQVNELEdBWlk7O0FBYWI7QUFDQVEsVUFkYSxvQkFlWEMsR0FmVyxFQWdCWEMsTUFoQlcsRUFpQlhQLFFBakJXLEVBa0JYUSxRQWxCVyxFQW1CWEMsTUFuQlcsRUFvQlhDLE1BcEJXLEVBcUJYYixVQXJCVyxFQXNCWGMsV0F0QlcsRUF1QlhDLFNBdkJXLEVBd0JYQyx5QkF4QlcsRUF5Qlg7QUFDQSxRQUFNQyxXQUFXLE1BQWpCO0FBQ0EsUUFBTXRCO0FBQ0pNLDBCQURJO0FBRUpELDRCQUZJO0FBR0prQixjQUFRTCxNQUhKO0FBSUpNLGFBQU9KLFVBQVVLLFlBQVYsQ0FBdUJqQixRQUF2QixFQUFpQ00sR0FBakMsQ0FKSDtBQUtKWSxnQkFBVU4sVUFBVU8saUJBQVYsQ0FBNEJuQixRQUE1QixFQUFzQ00sR0FBdEMsRUFBMkNLLFdBQTNDLENBTE47QUFNSlMsZ0JBQVVSLFVBQVVTLGFBQVYsQ0FBd0JyQixRQUF4QixFQUFrQ00sR0FBbEMsQ0FOTjtBQU9KZ0Isa0JBQVk7QUFDVmQsMEJBRFU7QUFFVmUscUNBQTJCZCxNQUEzQixTQUFxQ0YsT0FBT2lCLFNBQTVDLFNBQXlEeEIsUUFGL0M7QUFHVnlCLG1CQUFXYixVQUFVYyxhQUFWLENBQXdCMUIsUUFBeEIsRUFBa0NNLEdBQWxDLENBSEQ7QUFJVnFCLGdCQUFRZixVQUFVZ0IsVUFBVixDQUFxQjVCLFFBQXJCLEVBQStCTSxHQUEvQixDQUpFO0FBS1Z1QixpQkFBU2pCLFVBQVVrQixXQUFWLENBQXNCaEIsUUFBdEIsRUFBZ0NSLElBQUl5QixhQUFwQyxFQUFtRC9CLFFBQW5ELEVBQTZETyxPQUFPaUIsU0FBcEUsQ0FMQztBQU1WUSxlQUFPekIsT0FBT3lCO0FBTkosT0FQUjtBQWVKQyxnQkFBVXBCLDBCQUEwQmIsUUFBMUIsRUFBb0NNLEdBQXBDLEVBQXlDUSxRQUF6QztBQWZOLE9BZ0JEUixJQUFJNEIsa0JBaEJILENBQU47QUFrQkEsV0FBTzNDLHdCQUFnQkMsU0FBaEIsRUFBUDtBQUNELEdBOUNZOztBQStDYjtBQUNBMkMsWUFoRGEsc0JBaURYN0IsR0FqRFcsRUFrRFhDLE1BbERXLEVBbURYUCxRQW5EVyxFQW9EWFEsUUFwRFcsRUFxRFhDLE1BckRXLEVBc0RYQyxNQXREVyxFQXVEWGIsVUF2RFcsRUF3RFhjLFdBeERXLEVBeURYQyxTQXpEVyxFQTBEWEMseUJBMURXLEVBMkRYO0FBQ0EsUUFBTUMsV0FBVyxRQUFqQjtBQUNBLFFBQU10QjtBQUNKTSwwQkFESTtBQUVKRCw0QkFGSTtBQUdKa0IsY0FBUUwsTUFISjtBQUlKTSxhQUFPSixVQUFVSyxZQUFWLENBQXVCakIsUUFBdkIsRUFBaUNNLEdBQWpDLENBSkg7QUFLSlksZ0JBQVVOLFVBQVVPLGlCQUFWLENBQTRCbkIsUUFBNUIsRUFBc0NNLEdBQXRDLEVBQTJDSyxXQUEzQyxDQUxOO0FBTUpTLGdCQUFVUixVQUFVUyxhQUFWLENBQXdCckIsUUFBeEIsRUFBa0NNLEdBQWxDLENBTk47QUFPSmdCLGtCQUFZO0FBQ1ZkLDBCQURVO0FBRVZlLHVDQUE2QmQsTUFBN0IsU0FBdUNGLE9BQU9pQixTQUE5QyxTQUEyRHhCLFFBRmpEO0FBR1Z5QixtQkFBV2IsVUFBVWMsYUFBVixDQUF3QjFCLFFBQXhCLEVBQWtDTSxHQUFsQyxDQUhEO0FBSVZxQixnQkFBUWYsVUFBVWdCLFVBQVYsQ0FBcUI1QixRQUFyQixFQUErQk0sR0FBL0IsQ0FKRTtBQUtWdUIsaUJBQVNqQixVQUFVa0IsV0FBVixDQUFzQmhCLFFBQXRCLEVBQWdDUixJQUFJeUIsYUFBcEMsRUFBbUQvQixRQUFuRCxFQUE2RE8sT0FBT2lCLFNBQXBFLENBTEM7QUFNVlEsZUFBT3pCLE9BQU95QjtBQU5KLE9BUFI7QUFlSkMsZ0JBQVVwQiwwQkFBMEJiLFFBQTFCLEVBQW9DTSxHQUFwQyxFQUF5Q1EsUUFBekM7QUFmTixPQWdCRFIsSUFBSThCLG9CQWhCSCxDQUFOO0FBa0JBLFdBQU83Qyx3QkFBZ0JDLFNBQWhCLEVBQVA7QUFDRCxHQWhGWTs7QUFpRmI7QUFDQTZDLFlBbEZhLHNCQW1GWC9CLEdBbkZXLEVBb0ZYQyxNQXBGVyxFQXFGWEMsUUFyRlcsRUFzRlhDLE1BdEZXLEVBdUZYQyxNQXZGVyxFQXdGWGIsVUF4RlcsRUF5RlhjLFdBekZXLEVBMEZYQyxTQTFGVyxFQTJGWDtBQUNBLFFBQU1wQjtBQUNKTSwwQkFESTtBQUVKRCw0QkFGSTtBQUdKbUIsYUFBT0osVUFBVUssWUFBVixDQUF1QlgsR0FBdkIsQ0FISDtBQUlKWSxnQkFBVU4sVUFBVU8saUJBQVYsQ0FBNEJiLEdBQTVCLEVBQWlDSyxXQUFqQyxDQUpOO0FBS0pJLGNBQVFMLE1BTEo7QUFNSlksa0JBQVk7QUFDVmQsMEJBRFU7QUFFVmUsdUNBQTZCZCxNQUE3QixTQUF1Q0YsT0FBT2lCLFNBRnBDO0FBR1ZRLGVBQU96QixPQUFPeUI7QUFISjtBQU5SLE9BV0QxQixJQUFJZ0Msb0JBWEgsQ0FBTjtBQWFBLFdBQU8vQyx3QkFBZ0JDLFNBQWhCLEVBQVA7QUFDRDtBQTFHWSxDQUFmIiwiZmlsZSI6ImRhdGUtcmVuZGVyZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuXG5leHBvcnQgY29uc3QgZGF0ZVJlbmRlciA9IGRhdGVQcm9wcyA9PiAoPERhdGVJbnB1dCB7Li4uZGF0ZVByb3BzfSAvPik7XG5cbmNvbnN0IGRhdGVJc1ZhbGlkID0gdmFsID0+IG1vbWVudCh2YWwpLmlzVmFsaWQoKTtcblxuY29uc3QgZGF0ZUlzVmFsaWRGb3JtYXQgPSAodmFsLCBkYXRlRm9ybWF0KSA9PiBtb21lbnQodmFsLCBkYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XG5cbmNvbnN0IGNsYXNzTmFtZSA9ICdvYy1kYXRhLWdyaWQtZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZGF0ZVZhbHVlUmVuZGVyXG4gIHZhbFJlbmRlcihyb3dJbmRleCwgZGF0ZUZvcm1hdCwgdmFsdWVSZW5kZXIpIHtcbiAgICByZXR1cm4gdmFsdWVSZW5kZXIocm93SW5kZXgsICh2KSA9PiB7XG4gICAgICBpZiAoZGF0ZUlzVmFsaWRGb3JtYXQodiwgZGF0ZUZvcm1hdCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudC51dGModiwgZGF0ZUZvcm1hdCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGVJc1ZhbGlkKHYpKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKHYpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8TSBpZD1cIkdyaWQuSW52YWxpZERhdGVcIiAvPjtcbiAgICB9KTtcbiAgfSxcbiAgLy8gZGF0ZUNlbGxFZGl0XG4gIGNlbGxFZGl0KFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgcm93SW5kZXgsXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIHJlZ2lvbixcbiAgICBkYXRlRm9ybWF0LFxuICAgIHZhbHVlUGFyc2VyLFxuICAgIGZ1bmN0aW9ucyxcbiAgICBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlLFxuICApIHtcbiAgICBjb25zdCBjZWxsTmFtZSA9ICdlZGl0JztcbiAgICBjb25zdCBkYXRlUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbG9jYWxlOiByZWdpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgdmFsdWVQYXJzZXIpLFxuICAgICAgaW5wdXRSZWY6IGZ1bmN0aW9ucy5oYW5kbGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICB0YWJJbmRleCxcbiAgICAgICAgaWQ6IGBvY0RhdGFncmlkRWRpdElucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbnMub25DZWxsS2V5RG93bihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgb25CbHVyOiBmdW5jdGlvbnMub25DZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgb25Gb2N1czogZnVuY3Rpb25zLm9uQ2VsbEZvY3VzKGNlbGxOYW1lLCBjb2wuY29tcG9uZW50VHlwZSwgcm93SW5kZXgsIGNvbHVtbi5jb2x1bW5LZXkpLFxuICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsIGNlbGxOYW1lKSxcbiAgICAgIC4uLmNvbC5lZGl0Q29tcG9uZW50UHJvcHMsXG4gICAgfTtcbiAgICByZXR1cm4gZGF0ZVJlbmRlcih7IC4uLmRhdGVQcm9wcyB9KTtcbiAgfSxcbiAgLy8gZGF0ZUNlbGxDcmVhdGVcbiAgY2VsbENyZWF0ZShcbiAgICBjb2wsXG4gICAgY29sdW1uLFxuICAgIHJvd0luZGV4LFxuICAgIHRhYkluZGV4LFxuICAgIGdyaWRJZCxcbiAgICByZWdpb24sXG4gICAgZGF0ZUZvcm1hdCxcbiAgICB2YWx1ZVBhcnNlcixcbiAgICBmdW5jdGlvbnMsXG4gICAgZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZSxcbiAgKSB7XG4gICAgY29uc3QgY2VsbE5hbWUgPSAnY3JlYXRlJztcbiAgICBjb25zdCBkYXRlUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbG9jYWxlOiByZWdpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgdmFsdWVQYXJzZXIpLFxuICAgICAgaW5wdXRSZWY6IGZ1bmN0aW9ucy5oYW5kbGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICB0YWJJbmRleCxcbiAgICAgICAgaWQ6IGBvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gLFxuICAgICAgICBvbktleURvd246IGZ1bmN0aW9ucy5vbkNlbGxLZXlEb3duKHJvd0luZGV4LCBjb2wpLFxuICAgICAgICBvbkJsdXI6IGZ1bmN0aW9ucy5vbkNlbGxCbHVyKHJvd0luZGV4LCBjb2wpLFxuICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbnMub25DZWxsRm9jdXMoY2VsbE5hbWUsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSksXG4gICAgICAgIHN0eWxlOiBjb2x1bW4uc3R5bGUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQ6IGdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgY2VsbE5hbWUpLFxuICAgICAgLi4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIGRhdGVSZW5kZXIoeyAuLi5kYXRlUHJvcHMgfSk7XG4gIH0sXG4gIC8vIGRhdGVGaWx0ZXJDZWxsXG4gIGNlbGxGaWx0ZXIoXG4gICAgY29sLFxuICAgIGNvbHVtbixcbiAgICB0YWJJbmRleCxcbiAgICBncmlkSWQsXG4gICAgcmVnaW9uLFxuICAgIGRhdGVGb3JtYXQsXG4gICAgdmFsdWVQYXJzZXIsXG4gICAgZnVuY3Rpb25zLFxuICApIHtcbiAgICBjb25zdCBkYXRlUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9ucy5nZXRJdGVtVmFsdWUoY29sKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2UoY29sLCB2YWx1ZVBhcnNlciksXG4gICAgICBsb2NhbGU6IHJlZ2lvbixcbiAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgdGFiSW5kZXgsXG4gICAgICAgIGlkOiBgb2NEYXRhZ3JpZEZpbHRlcklucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9YCxcbiAgICAgICAgc3R5bGU6IGNvbHVtbi5zdHlsZSxcbiAgICAgIH0sXG4gICAgICAuLi5jb2wuZmlsdGVyQ29tcG9uZW50UHJvcHMsXG4gICAgfTtcbiAgICByZXR1cm4gZGF0ZVJlbmRlcih7IC4uLmRhdGVQcm9wcyB9KTtcbiAgfSxcbn07XG4iXX0=