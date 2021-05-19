import React from 'react';
import { ContainerForm, ContainerProperties } from './styleForm'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/slice1';
import { Form, Group, Label, Control, Check, Row, Col, Button } from "react-bootstrap";

const Form2 = () => {
  const disp = useDispatch();
  function Send() {


    var prio2 = document.getElementById("prio").checked;
    var category2 = document.getElementById("category").value;
    var activity2 = document.getElementById("activity").value;

    disp(addTodo(
      {
        prio: prio2.toString(),
        category: category2,
        activity: activity2,
        isDone: 'false'

      }))
  };

  return (
    <ContainerForm>
      <Form>
        <Form.Group >
          <h4>Activity</h4>
          <Form.Control required type="text" placeholder="Activity" name="activity" id="activity" />
        </Form.Group>

        <ContainerProperties>
          <Form.Group>
            <h4>Category</h4>
            <Row>
              <Col xs>
                <Form.Control as="select" name="category" id="category">
                  <option>School</option>
                  <option>Work</option>
                  <option>Gardening</option>
                  <option>Car</option>
                  <option>House Work</option>
                </Form.Control>
              </Col>
              <Col xs={1}>
                <Form.Check inline label="Priority" name="group1" type="checkbox" name="prio" id="prio" />
              </Col>
            </Row>
            <Row start="xs">
              <Col style={{ textAlign: "left", marginTop: "10px" }}><Button onClick={Send}>Send</Button></Col>

            </Row>
          </Form.Group>
        </ContainerProperties>

      </Form>
    </ContainerForm>
  )
}
export default Form2;