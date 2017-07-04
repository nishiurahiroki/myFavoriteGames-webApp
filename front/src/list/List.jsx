import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class List extends React.Component{
  createHeader() {
    if(!this.props.header) {
      return;
    }
    if(!this.props.header.columns) {
      return;
    }

    return (
      <TableHeader>
        <TableRow>
          {this.props.header.columns.map((column) => {
            return (
              <TableHeaderColumn key={column}>
                {column}
              </TableHeaderColumn>
            )
          })}
        </TableRow>
      </TableHeader>
    );
  }

  render() {
    return (
      <div style={{width:'70vw'}}>
        <Table>
          {this.createHeader()}
        </Table>
      </div>
    )
  }
}
