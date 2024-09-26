import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './PaymentForm.css'

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div className='payment'>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='payment-form'>
        <div className='payment-form__container'>
            <input className='payment-form__input'
            type="text" 
            name='name'
            placeholder='Nombre y Apellido'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required/>
        </div>

        <div className='payment-form__container'>
            <input className='payment-form__input'
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required/>
        </div>
        
        <div className='payment-form__container'>
            <input className='payment-form__input'
            type="number"
            name='expiry'
            placeholder='Valid Thru'
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
            />
        </div>
        
        <div className='payment-form__container'>
            <input className='payment-form__input'
            type="numbre"
            name='cvc'
            placeholder='CVC'
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
            />
        </div>

          <div>
            <button className='payment-btn'>Comprar</button>
          </div>
        
      </form>
    </div>
  );
}

export default PaymentForm;