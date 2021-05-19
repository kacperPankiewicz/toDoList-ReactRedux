import React from 'react';
import ItemList from '../ItemList';
import { Table, Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

const Display = () => {
  const disp = useDispatch();
  const list = useSelector((state) => state.todos);

  return (
    <Container style={{ marginTop: "10px" }}>
      <Table bordered size="sm" variant="dark">
        <thead>
          <tr>

            <th>Category</th>
            <th>Activity</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>

          {list.map((element) => (
            <ItemList id={element.id} prio={element.prio} category={element.category} activity={element.activity} isDone={element.isDone} />
          ))}


        </tbody>
      </Table>
    </Container>
  );
};

export default Display;
