import { Button } from 'bootstrap';
import { Form, Check } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleBut, removeArg } from '../Redux/slice1';

const ItemList = ({ id, prio, category, activity, isDone }) => {
    const disp = useDispatch();
    const FinshAction = () => {
        disp(toggleBut({ id: id, isDone: !isDone }));
    }
    const DeleteArgument = () => {
        disp(removeArg({ id: id }));
    }
    return (
        <tr className={isDone === false && `text-success`}>
            <td>
                {prio !== "true" && category}
                {prio === "true" && (<h1 className={isDone === false ? `text-success` : `text-danger`}>{category}</h1>)}
            </td>
            <td>
                {prio !== "true" && activity}
                {prio === "true" && (<h1 className={isDone === false ? `text-success` : `text-danger`}>{activity}</h1>)}
            </td>
            <td className={"align-middle"}><Form.Check inline label="" type="checkbox" onClick={FinshAction} unchecked={isDone} /><input type="button" onClick={DeleteArgument} value="Delete" /></td>

        </tr>
    );
};

export default ItemList;


