import React from 'react';
import { Table } from 'react-bootstrap';

const TableRenderer = ({ data }) => {
  const createTable = (data) => {
    return (
      <div style={{ width: '100%', margin: '0 auto' }}>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              console.log(item);
              let itemName = item[Object.keys(item)[0]].name;
              let itemDesc = item[Object.keys(item)[0]].description;
              return (
                <tr key={index}>
                  <td style={{ fontWeight: 'bold' }}>
                    <a
                      href={`https://www.youtube.com/results?search_query=${itemName}`}
                      rel='noreferrer noopener'
                      target='_blank'
                    >
                      {itemName}
                    </a>
                  </td>
                  <td style={{ fontWeight: 'lighter' }}>{itemDesc}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };
  return createTable(data);
};
export default TableRenderer;
