import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>phone</th>
        <th>address</th>
        <th>city</th>
        <th>state</th>
        <th>zip</th>
      </tr>
    </thead>
  );
}

function TableRow(props, idx) {
  return (
    <tr key={idx}>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.address}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.zip}</td>
    </tr>
  );
}

function ContactsTable (props) {
    const rows = props.contacts.map(TableRow)

    return (
        <table className='table is-striped is-fullwidth is-hoverable'>
            <TableHeader />
            <tbody> {rows}</tbody>
        </table>
    )
}

export default ContactsTable
