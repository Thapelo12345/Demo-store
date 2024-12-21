import React from 'react'
import './order-form.css'
import './pad-order-form.css'
import { cancel, closeForms, orderFormSubmit } from './forms-functions'

//dine order Id setUp
function OrderForm(){

  return (

    <form id='order-form-container'>
        <h1 id='order-title'><u>Order Form</u></h1>

        <section id='user-infor'>
            <label htmlFor = 'names'>Name: </label>
            <input id='names' name='names' type='text' required></input><br></br>
            
            <label htmlFor = 'surname'>Surname: </label>
            <input id='surname' name='surname' type='text' required></input><br></br>

            <label htmlFor = 'email'>Email: </label>
            <input id='email' name='email' type='email' placeholder='Enter paypal email..' required></input><br></br>

           <label htmlFor = 'phone'>Tel no:</label>
           <input type='tel' id ='phone' name='phone'required></input><br></br>

            <label htmlFor = 'address'>Address: </label>
            <input id='address' name='address' type='text' required></input><br></br>

        </section>
        
        <section id='payment-and-delivery'>

        <div id='delivery' className='pay-and-deliver'>
        <h3 className='subtitles'>Delivery</h3>
             <input type = 'radio' name = 'delivery' className = 'delivery' id = 'drop' value = 'drop off' required></input>
            <label htmlFor = 'drop' className = 'radio-labels'>Drop Off</label>

            <input type='radio' name = 'delivery' className = 'delivery' id = 'pickUp' value = 'pick up'></input>
            <label htmlFor = 'pickUp' className = 'radio-labels'>Pick up</label>

            <input type = 'radio' name = 'delivery' className = 'delivery' id = 'shipping' value = 'shipping'></input>
            <label htmlFor = 'shipping' className = 'radio-labels'>Shipping</label>
        </div>

        <div id='pay' className='pay-and-deliver'>
        <h3 className='subtitles'>Payment</h3>
        <input type='radio' name = 'payment' className = 'payment' id = 'cash' value = 'cash' required></input>
            <label htmlFor = 'cash' className = 'radio-labels'>Cash</label>

            <input type = 'radio' name = 'payment' className = 'payment' id = 'card' value = 'card'></input>
            <label htmlFor = 'card' className = 'radio-labels'>Card</label>

            <input type = 'radio' name = 'payment' className = 'payment' id = 'paypal' value = 'paypal'></input>
            <label htmlFor = 'paypal' className = 'radio-labels'>PayPal</label>

            <input type = 'radio' name = 'payment' className = 'payment' id = 'check' value = 'check'></input>
            <label htmlFor = 'check' className = 'radio-labels'>Check</label>
        </div>
        </section>
<div id ="form-btns-container">
        <button id = 'form-cancel' className = 'form-buttons'  onClick={()=>{
        closeForms('order')
        cancel()
        }}>Cancel</button>

    <button id = 'form-submit' type = 'submit' className = 'form-buttons' value = 'submit'
    onClick={orderFormSubmit}>Submit</button>
</div>
    </form>
    
  )
}//end of order form



export { OrderForm }