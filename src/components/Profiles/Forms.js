import React, { useReducer, useState } from 'react';
import classes from './Forms.module.css';
import Card from '../ui/Card';
import DOB from './DOB';
import Pass from './Pass';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }



function Forms(props) {

  
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
        <p>Fill in the information below to register</p>
          {submitting &&
       <div>You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul></div>
     }
          <form onSubmit={handleSubmit}>
          <fieldset className={classes.wrapper}>
         <label>
           <p>Name <br></br>
           <input name="First Name" onChange={handleChange}  placeholder="First Name" />
           <input name="Middle Name" onChange={handleChange}  placeholder="Middle Name"/>
           <input name="Second Name" onChange={handleChange}  placeholder="Last Name"/>
           </p>
         </label>
         <label>
           <p>Email <br></br>
           <input name="Email" onChange={handleChange} placeholder="user@example.com"/>
           </p>
         </label>
         <label>
           <p>Phone Number <br></br>
           <input name="Area-Code" onChange={handleChange} placeholder="Area-Code" className={classes.width} />
           <input name="Phone Number" onChange={handleChange} placeholder="Number"/>
           </p>
         </label>
         <label>
           <p>Address <br></br>
           <input name="address" onChange={handleChange} placeholder = "Street Address"/>
           <input name="address" onChange={handleChange} placeholder = "City"/>
           <select name="State" onChange={handleChange}>
               <option value="">--State--</option>
               <option value="Alabama">Alabama</option>
               <option value="Alaska">Alaska</option>
               <option value="Arizona">Arizona</option>
               <option value="Arkansas">Arkansas</option>
               <option value="California">California</option>
               <option value="Colorado">Colorado</option>
               <option value="Connecticut">Connecticut</option>
               <option value="Delaware">Delaware</option>
               <option value="Florida">Florida</option>
               <option value="Georgia">Georgia</option>
               <option value="Hawaii">Hawaii</option>
               <option value="Idaho">Idaho</option>
               <option value="Illinois">Illinois</option>
               <option value="Indiana">Indiana</option>
               <option value="Iowa">Iowa</option>
               <option value="Kansas">Kansas</option>
               <option value="Kentucky">Kentucky</option>
               <option value="Louisiana">Louisiana</option>
               <option value="Maine">Maine</option>
               <option value="Maryland">Maryland</option>
               <option value="Massachusetts">Massachusetts</option>
               <option value="Michigan">Michigan</option>
               <option value="Minnesota">Minnesota</option>
               <option value="Mississippi">Mississippi</option>
               <option value="Missouri">Missouri</option>
               <option value="Montana">Montana</option>
               <option value="Nebraska">Nebraska</option>
               <option value="Other">Outside US</option>
           </select>
           <br></br>
           <input name="address" onChange={handleChange} placeholder = "Country"/>
           <input name="address" onChange={handleChange} placeholder = "ZIP Code" className={classes.width}/>
           </p>
         </label>
       

       
         <label>
           <p>Gender Orientation <span />
           <select name="Gender" onChange={handleChange}>
               <option value="">--Please choose your gender--</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="others">Others</option>
           </select>
           </p>
         </label>
         <label>
           <p>Date Of Birth <DOB></DOB>
           </p>
         </label>
         <label>
          <p>Password <br></br>
            <Pass></Pass>
           </p>
         </label>
         <label>
           <p>Choose Photo Image <span></span>
           <input type="file" onChange={handleChange} className="filetype" id="group_image"/>
           </p>
         </label>
       </fieldset>


       <button className={classes.btnsubmit}>Save</button>
          </form>
        </div>
        </Card>
      )
    }


export default Forms;