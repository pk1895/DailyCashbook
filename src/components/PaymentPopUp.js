import React, { useState } from "react";
import Modal from '../components/UI/Modal';
import classes from './PaymentPopUp.module.css';

const Logout = (props) => {
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');

    const onAddPrice = (evt) => {
        setPrice(evt.target.value);
    }

    const onAddContent = (evt) => {
        setContent(evt.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        let label = props.btnLbl;
        let date = new Date();
        props.onSelectData({ price, content, label, date });
        props.onCancel();
    }

    return (
        <Modal onClick={props.onCancel} >
            <form onSubmit={onSubmit} className={classes.form}>
                <button onClick={props.onCancel}>close</button>
                <h2>New Entry</h2>
                <div className={classes.control}>
                    <input
                        type='number'
                        // id='price' 
                        value={price}
                        onChange={onAddPrice}
                        required
                        placeholder="INR 0.00" />
                </div>
                <div className={classes.control}>
                    <textarea
                        // id='note'
                        onChange={onAddContent}
                        value={content}
                        placeholder="Entry Note"
                        required />
                </div>
                <div className={classes.actions}>
                    <button onClick={onSubmit}>{props.btnLbl}</button>
                </div>
            </form>
        </Modal>
    );
}

export default Logout;