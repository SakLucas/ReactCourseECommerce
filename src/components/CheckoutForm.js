import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useFirestore } from '../firebase/useFirestore';

const CheckoutForm = ({cart, subtotal}) => {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    mail: "",
    mailValid: ""
  })
  const [order, setOrder] = useState({})
  const [error, setError] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(true);

  const { createOrder } = useFirestore();

  const handleForm = e => {
    setForm(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }))
    setError('')
  }
  
  const handleSubmit = async (cart, subtotal, form) => {
    try {
      const isValid = form.name.length >= 2 && form.tel.length >= 8 && form.mail.length >= 6 && form.mail === form.mailValid;
      if (isValid) {
        const { id, name } = await createOrder(cart, subtotal, form);
        setOrder({
          id: id,
          name: name
        });
      } else {
        setError('Verifique los datos')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
    return(
        <div style={{display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{fontSize:'20px',marginBottom:'15px'}}>Complete el formulario para terminar su compra</span>
            <TextField type="text" label="name" name="name" placeholder="name" value={form.name} onChange={e => handleForm(e)} />
            <TextField type="text" label="tel" name="tel" placeholder="tel" value={form.tel} onChange={e => handleForm(e)} />
            <TextField type="email" label="mail"  name="mail" id="" placeholder="user@mail.com" value={form.mail} onChange={e => handleForm(e)} />
            <TextField type="email" label="mail"  name="mailValid" id="" placeholder="user@mail.com" value={form.mailValid} onChange={e => handleForm(e)} />
            <div style={{marginBottom:'15px'}}>{error.length >= 1 && <span style={{color:'red'}}>{error}</span>}</div>
            <Button variant="contained" color="secondary" onClick={() => handleSubmit(cart, subtotal, form)} disabled={Object.keys(order).length === 2 || form.name.length < 2 && form.tel.length < 8 && form.mail.length < 6 && form.mail !== form.mailValid}>Realizar pedido</Button>
            {Object.keys(order).length === 2 && <p>Gracias por tu compra, {order.name}! Tu número de orden es {order.id}</p>}
        </div>
    )
}

export default CheckoutForm;