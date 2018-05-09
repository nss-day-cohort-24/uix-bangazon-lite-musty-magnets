import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';

let Buttons = (props) => {
        return (
            <div className="d-flex">
                <Button className={props.class} onClick={() => { props.function()  }}>{props.label}</Button>{' '}
            </div>
        );
}

export default Buttons;