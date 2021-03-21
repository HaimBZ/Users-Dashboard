import React from 'react';
import { 
    FormGroup, 
    FormControl } from 'react-bootstrap';

export default function FilterData(props) {
    return (
        <FormGroup>
            <FormControl 
            type="text"
            placeholder="Filter Users"
            value={props.filterTerm}
            onChange={props.handleFilter}
            />
        </FormGroup>
    );
}
