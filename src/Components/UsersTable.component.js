import React, { useState } from "react";
import useSortableData from "./../Utils/sortableData";
import { Table } from "react-bootstrap";
import Moment from "react-moment";
import FilterData from "./FilterData.component";

const UsersTable = (props) => {
  const [filterTerm, setFilterTerm] = useState("");
  const { editItem } = props;
  const { items, requestSort, sortConfig } = useSortableData(props.users);

  const filteredData = items.filter((item) => {
    return (
      item.firstName.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(filterTerm.toLowerCase()) ||
      item.phone.toLowerCase().includes(filterTerm.toLowerCase())
    );
  });

  const handleFilter = (event) => {
    const keyword = event.target.value;
    setFilterTerm(keyword);
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div>
      <FilterData filterTerm={filterTerm} handleFilter={handleFilter} />
      <Table className="sortable" bordered hover>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("id")}
                className={getClassNamesFor("id")}
              >
                Id
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("firstName")}
                className={getClassNamesFor("firstName")}
              >
                First Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("lastName")}
                className={getClassNamesFor("lastName")}
              >
                Last Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("date")}
                className={getClassNamesFor("date")}
              >
                Date
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("phone")}
                className={getClassNamesFor("phone")}
              >
                Phone
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            let dateToFormat = item.date;
            return (
              <tr key={item.id} onClick={() => editItem(item)}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{<Moment format="DD/MM/YYYY">{dateToFormat}</Moment>}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
