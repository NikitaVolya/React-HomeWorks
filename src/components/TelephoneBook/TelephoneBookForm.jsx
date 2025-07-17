
import "./TelephoneBookPage.css";

import { useState } from "react";


function TelephoneBookForm({ onSubmit, submitText, userData}) {

    const [formData, setFormData] = useState(
    userData ??
    {
        Firstname: '',
        Lastname: '',
        Email: '',
        PhoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            Firstname: '',
            Lastname: '',
            Email: '',
            PhoneNumber: ''
        });
    };

    return (
        <form className="TelephoneForm" onSubmit={handleSubmit}>
            <input
                type="text"
                name="Firstname"
                placeholder="First Name"
                minLength={2}
                value={formData.Firstname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="Lastname"
                placeholder="Last Name"
                minLength={2}
                value={formData.Lastname}
                onChange={handleChange}
            />
            <input
                type="email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleChange}
            />
            <input
                type="tel"
                name="PhoneNumber"
                placeholder="Phone Number"
                value={formData.PhoneNumber}
                onChange={handleChange}
            />
            <button type="submit">{ submitText }</button>
        </form>
    );
}

export default TelephoneBookForm;