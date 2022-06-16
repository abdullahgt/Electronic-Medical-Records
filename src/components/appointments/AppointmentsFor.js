import React, { useReducer, useState } from 'react';
import classes from './AppointmentsFor.module.css';
import Card from '../ui/Card';
import TextField from '@mui/material/TextField';
const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function AppointmentsFor(props) {

  
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
      }

      const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }

    return (
        <Card>
        <div className={classes.wrapper}>
        <p>Fill in for Appointments</p>
          {submitting &&
       <div>You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul></div>
     }
          <form onSubmit={handleSubmit}>
          <fieldset>
         <label>
         <label>
           <p>Appointment For:  <span />
           <select name="For" onChange={handleChange}>
               <option value="">--Choose appointment request type--</option>
               <option value="Self">Self</option>
               <option value="Offspring">Offspring</option>
               <option value="Spouse">Spouse</option>
               <option value="Family-Member">Family Member</option>
               <option value="Extended">Extended Family Member</option>
           </select>
           </p>
         </label>
         </label>
         <label>
           <p>Care Manager:  <span />
           <select name="Care Manager" onChange={handleChange}>
               <option value="">--Choose your Care Manager--</option>
               <option value="Care-Manager-A">Care Manager A</option>
               <option value="Care-Manager-B">Care Manager B</option>
               <option value="Care-Manager-C">Care Manager C</option>
               <option value="Care-Manager-D">Care Manager D</option>
               <option value="Care-Manager-E">Care Manager E</option>
           </select>
           </p>
         </label>
         <label>
           <p>Your Prefered Language:  <span />
           <select name="Language" onChange={handleChange}>
               <option value="">--Choose your language--</option>
               <option value="US-English">US-English</option>
               <option value="Hindi">Hindi</option>
               <option value="Urdu">Urdu</option>
               <option value="French">French</option>
               <option value="Chinese">Chinese</option>
           </select>
           </p>
         </label>
         <label>
           <p>Description:  <span />
           <input type="textarea" name="text" onChange={handleChange} placeholder="Description..">
           </input>
           </p>
         </label>
       
         <label>
           <p>
        <TextField
        id="datetime-local"
        label="App. Time:"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width:300, borderBlock: 50}}
        InputLabelProps={{
          shrink: true,
        }}
      />
           </p>
         </label>
       </fieldset>


       <button className={classes.btnsubmit}>Create</button>
       <button className={classes.btnsubmit}>Cancel</button>
          </form>
        </div>
        </Card>
      )
    }


export default AppointmentsFor;