
import React from 'react';
import { Table, Image, Label } from 'semantic-ui-react';
import './index.css';
// *TODO: import { Icon, Menu } from 'semantic-ui-react';

//credit: Semantic UI
const TableTemplate = (props) => (

    <>
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell className="clickClue" name="clickClue" onClick={props.sortLast}>Last Name &nbsp;
                        <i className="angle double up icon"></i>
                    </Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {props.employees.map((employee, index) => (
            <Table.Row key={index}>
                <Table.Cell>
                    <Image src={employee.picture.thumbnail} />
                    <Label ribbon>{employee.registered.age} yrs </Label>
                </Table.Cell>
                <Table.Cell>{employee.name.first}</Table.Cell>
                <Table.Cell>{employee.name.last}</Table.Cell>
                <Table.Cell>{employee.email}</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
    </Table>
    </>

);

export default TableTemplate;

//TODO: install package and import css
//TODO: header component
//TODO: search form component
