import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';

let Buttons = (props) => {
        return (
            <div>
                <Button className={props.class} onClick={() => { props.function(), props.toggle() }}>{props.label}</Button>{' '}
            </div>
        );
}

export default Buttons;