function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

      return React.createElement(M, {
        id: "Grid.InvalidDate"
      });
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
        id: "ocDatagridEditInput-" + gridId + "-" + column.columnKey + "-" + rowIndex,
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
        id: "ocDatagridCreateInput-" + gridId + "-" + column.columnKey + "-" + rowIndex,
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
        id: "ocDatagridFilterInput-" + gridId + "-" + column.columnKey,
        style: column.style
      }
    }, col.filterComponentProps);

    return dateRender(_extends({}, dateProps));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kYXRhZ3JpZC9jb2x1bW4tc2VydmljZS9jb2x1bW4tdHlwZXMvZGF0ZS1yZW5kZXJlcnMuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwibW9tZW50IiwiRm9ybWF0dGVkTWVzc2FnZSIsIk0iLCJEYXRlSW5wdXQiLCJkYXRlUmVuZGVyIiwiZGF0ZVByb3BzIiwiZGF0ZUlzVmFsaWQiLCJ2YWwiLCJpc1ZhbGlkIiwiZGF0ZUlzVmFsaWRGb3JtYXQiLCJkYXRlRm9ybWF0IiwiY2xhc3NOYW1lIiwidmFsUmVuZGVyIiwicm93SW5kZXgiLCJ2YWx1ZVJlbmRlciIsInYiLCJ1dGMiLCJmb3JtYXQiLCJjZWxsRWRpdCIsImNvbCIsImNvbHVtbiIsInRhYkluZGV4IiwiZ3JpZElkIiwicmVnaW9uIiwidmFsdWVQYXJzZXIiLCJmdW5jdGlvbnMiLCJnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlIiwiY2VsbE5hbWUiLCJsb2NhbGUiLCJ2YWx1ZSIsImdldEl0ZW1WYWx1ZSIsIm9uQ2hhbmdlIiwib25DZWxsVmFsdWVDaGFuZ2UiLCJpbnB1dFJlZiIsImhhbmRsZUNlbGxSZWYiLCJpbnB1dFByb3BzIiwiaWQiLCJjb2x1bW5LZXkiLCJvbktleURvd24iLCJvbkNlbGxLZXlEb3duIiwib25CbHVyIiwib25DZWxsQmx1ciIsIm9uRm9jdXMiLCJvbkNlbGxGb2N1cyIsImNvbXBvbmVudFR5cGUiLCJzdHlsZSIsImRpc2FibGVkIiwiZWRpdENvbXBvbmVudFByb3BzIiwiY2VsbENyZWF0ZSIsImNyZWF0ZUNvbXBvbmVudFByb3BzIiwiY2VsbEZpbHRlciIsImZpbHRlckNvbXBvbmVudFByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0MsZ0JBQWdCLElBQUlDLENBQTdCLFFBQXNDLFlBQXRDO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQiw0QkFB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QWY7O0FBYUEsV0FBTy9DLFVBQVUsY0FBTUMsU0FBTixFQUFqQjtBQUNEO0FBakdZLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5cbmV4cG9ydCBjb25zdCBkYXRlUmVuZGVyID0gZGF0ZVByb3BzID0+IDxEYXRlSW5wdXQgey4uLmRhdGVQcm9wc30gLz47XG5cbmNvbnN0IGRhdGVJc1ZhbGlkID0gdmFsID0+IG1vbWVudCh2YWwpLmlzVmFsaWQoKTtcblxuY29uc3QgZGF0ZUlzVmFsaWRGb3JtYXQgPSAodmFsLCBkYXRlRm9ybWF0KSA9PiBtb21lbnQodmFsLCBkYXRlRm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XG5cbmNvbnN0IGNsYXNzTmFtZSA9ICdvYy1kYXRhLWdyaWQtZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZGF0ZVZhbHVlUmVuZGVyXG4gIHZhbFJlbmRlcihyb3dJbmRleCwgZGF0ZUZvcm1hdCwgdmFsdWVSZW5kZXIpIHtcbiAgICByZXR1cm4gdmFsdWVSZW5kZXIocm93SW5kZXgsICh2KSA9PiB7XG4gICAgICBpZiAoZGF0ZUlzVmFsaWRGb3JtYXQodiwgZGF0ZUZvcm1hdCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudC51dGModiwgZGF0ZUZvcm1hdCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGVJc1ZhbGlkKHYpKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKHYpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8TSBpZD1cIkdyaWQuSW52YWxpZERhdGVcIiAvPjtcbiAgICB9KTtcbiAgfSxcbiAgLy8gZGF0ZUNlbGxFZGl0XG4gIGNlbGxFZGl0KFxuICAgIGNvbCxcbiAgICBjb2x1bW4sXG4gICAgcm93SW5kZXgsXG4gICAgdGFiSW5kZXgsXG4gICAgZ3JpZElkLFxuICAgIHJlZ2lvbixcbiAgICBkYXRlRm9ybWF0LFxuICAgIHZhbHVlUGFyc2VyLFxuICAgIGZ1bmN0aW9ucyxcbiAgICBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlLFxuICApIHtcbiAgICBjb25zdCBjZWxsTmFtZSA9ICdlZGl0JztcbiAgICBjb25zdCBkYXRlUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbG9jYWxlOiByZWdpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgdmFsdWVQYXJzZXIpLFxuICAgICAgaW5wdXRSZWY6IGZ1bmN0aW9ucy5oYW5kbGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICB0YWJJbmRleCxcbiAgICAgICAgaWQ6IGBvY0RhdGFncmlkRWRpdElucHV0LSR7Z3JpZElkfS0ke2NvbHVtbi5jb2x1bW5LZXl9LSR7cm93SW5kZXh9YCxcbiAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbnMub25DZWxsS2V5RG93bihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgb25CbHVyOiBmdW5jdGlvbnMub25DZWxsQmx1cihyb3dJbmRleCwgY29sKSxcbiAgICAgICAgb25Gb2N1czogZnVuY3Rpb25zLm9uQ2VsbEZvY3VzKGNlbGxOYW1lLCBjb2wuY29tcG9uZW50VHlwZSwgcm93SW5kZXgsIGNvbHVtbi5jb2x1bW5LZXkpLFxuICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiBnZXRDb21wb25lbnREaXNhYmxlZFN0YXRlKHJvd0luZGV4LCBjb2wsIGNlbGxOYW1lKSxcbiAgICAgIC4uLmNvbC5lZGl0Q29tcG9uZW50UHJvcHMsXG4gICAgfTtcbiAgICByZXR1cm4gZGF0ZVJlbmRlcih7IC4uLmRhdGVQcm9wcyB9KTtcbiAgfSxcbiAgLy8gZGF0ZUNlbGxDcmVhdGVcbiAgY2VsbENyZWF0ZShcbiAgICBjb2wsXG4gICAgY29sdW1uLFxuICAgIHJvd0luZGV4LFxuICAgIHRhYkluZGV4LFxuICAgIGdyaWRJZCxcbiAgICByZWdpb24sXG4gICAgZGF0ZUZvcm1hdCxcbiAgICB2YWx1ZVBhcnNlcixcbiAgICBmdW5jdGlvbnMsXG4gICAgZ2V0Q29tcG9uZW50RGlzYWJsZWRTdGF0ZSxcbiAgKSB7XG4gICAgY29uc3QgY2VsbE5hbWUgPSAnY3JlYXRlJztcbiAgICBjb25zdCBkYXRlUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbG9jYWxlOiByZWdpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShyb3dJbmRleCwgY29sKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbnMub25DZWxsVmFsdWVDaGFuZ2Uocm93SW5kZXgsIGNvbCwgdmFsdWVQYXJzZXIpLFxuICAgICAgaW5wdXRSZWY6IGZ1bmN0aW9ucy5oYW5kbGVDZWxsUmVmKHJvd0luZGV4LCBjb2wpLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICB0YWJJbmRleCxcbiAgICAgICAgaWQ6IGBvY0RhdGFncmlkQ3JlYXRlSW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX0tJHtyb3dJbmRleH1gLFxuICAgICAgICBvbktleURvd246IGZ1bmN0aW9ucy5vbkNlbGxLZXlEb3duKHJvd0luZGV4LCBjb2wpLFxuICAgICAgICBvbkJsdXI6IGZ1bmN0aW9ucy5vbkNlbGxCbHVyKHJvd0luZGV4LCBjb2wpLFxuICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbnMub25DZWxsRm9jdXMoY2VsbE5hbWUsIGNvbC5jb21wb25lbnRUeXBlLCByb3dJbmRleCwgY29sdW1uLmNvbHVtbktleSksXG4gICAgICAgIHN0eWxlOiBjb2x1bW4uc3R5bGUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQ6IGdldENvbXBvbmVudERpc2FibGVkU3RhdGUocm93SW5kZXgsIGNvbCwgY2VsbE5hbWUpLFxuICAgICAgLi4uY29sLmNyZWF0ZUNvbXBvbmVudFByb3BzLFxuICAgIH07XG4gICAgcmV0dXJuIGRhdGVSZW5kZXIoeyAuLi5kYXRlUHJvcHMgfSk7XG4gIH0sXG4gIC8vIGRhdGVGaWx0ZXJDZWxsXG4gIGNlbGxGaWx0ZXIoY29sLCBjb2x1bW4sIHRhYkluZGV4LCBncmlkSWQsIHJlZ2lvbiwgZGF0ZUZvcm1hdCwgdmFsdWVQYXJzZXIsIGZ1bmN0aW9ucykge1xuICAgIGNvbnN0IGRhdGVQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICB2YWx1ZTogZnVuY3Rpb25zLmdldEl0ZW1WYWx1ZShjb2wpLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9ucy5vbkNlbGxWYWx1ZUNoYW5nZShjb2wsIHZhbHVlUGFyc2VyKSxcbiAgICAgIGxvY2FsZTogcmVnaW9uLFxuICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICB0YWJJbmRleCxcbiAgICAgICAgaWQ6IGBvY0RhdGFncmlkRmlsdGVySW5wdXQtJHtncmlkSWR9LSR7Y29sdW1uLmNvbHVtbktleX1gLFxuICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgfSxcbiAgICAgIC4uLmNvbC5maWx0ZXJDb21wb25lbnRQcm9wcyxcbiAgICB9O1xuICAgIHJldHVybiBkYXRlUmVuZGVyKHsgLi4uZGF0ZVByb3BzIH0pO1xuICB9LFxufTtcbiJdfQ==