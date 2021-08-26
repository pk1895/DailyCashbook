import React, { useState, useEffect } from 'react';
// import Moment from 'react-moment';
import PaymentPopUp from './components/PaymentPopUp';
// import ListItem from './components/ListItem';
import './App.css';

function App() {
  const [modal, setModal] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('');
  const [items, SetItems] = useState([]);
  const [date, setDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setDate(new Date().toLocaleString());
    items.length && setTotalPrice(items
      .map(el => { 
        if(el.label === "OUT"){
          return -el.price
        }
        return el.price 
      })
      .reduce((total, element) => {
        return +total + +element;
      }))
  }, [items]);

  const onOut = () => {
    setButtonLabel('OUT')
    setModal(true);
  }
  const onIn = () => {
    debugger
    setButtonLabel("IN");
    setModal(true);
  }

  const onCancelHandler = () => {
    setModal(false);
  }

  const onConfirmHandler = () => {

  }

  const handleCallback = (data) => {
    console.log(data);
    SetItems((prevState => {
      return [...prevState, data]
    }));
    debugger
  }

  const listData = items.length === 0 ?
    <h2>No Data Found</h2> :
    items.map(el => {
      return (
        <div className="transaction">
          <div className="entry">
            <div className="entryContent">
              <p>{date}</p>
              <h1>{el.content}</h1>
            </div>
            <div className="out">
              <h1>OUT</h1>
              <h1>{el.label === "OUT" ? el.price : "---"}</h1>
            </div>
            <div className="in">
              <h1>IN</h1>
              <h1>{el.label === "IN" ? el.price : "---"}</h1>
            </div>
          </div>
        </div>
      )
    });

  return (
    <div className="App">
      <header>
        <h1 style={{ textAlign: 'center' }}>My cashbook</h1>
        <div className="today-balance">
          <h1>${totalPrice} INR</h1>
          <p>Today's Amount</p>
        </div>
      </header>
      <section>
        {listData}
      </section>
      <footer className="action-group">
        <button onClick={onOut} className="red">OUT</button>
        <button className="green" onClick={onIn}>IN</button>
        {modal &&
          <PaymentPopUp
            onCancel={onCancelHandler}
            onConfirm={onConfirmHandler}
            btnLbl={buttonLabel}
            onSelectData={handleCallback}
          />}
      </footer>
    </div>
  );
}

export default App;
