import { useState } from "react";
import FormInput from './FormInput';

const ContactForm = () =>
{
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        telephone:'',
        message:''
    });

    const handleChange = (e) =>
        {
            const {name,value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

     const handleSubmit = (e) =>
            {
                e.preventDefault();
                const{name,email,telephone,message} = formData;
            
                if(name && email && telephone && message)
                {
                    console.log('Form Data:', formData);
                }
                else
                {
                    console.log('Please fill in all fields');
                }
            };
    return(
        <form onSubmit={handleSubmit}>
            <FormInput 
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />

            <FormInput 
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />

            <FormInput 
            label="Telephone"
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            />

            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;