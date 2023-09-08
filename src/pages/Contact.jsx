import React from 'react'
import Layout from "../assets/Layout";
import { useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mbjvyblb");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Layout>
            <div className="contact-container">
                <form className="contact-box" action='https://formspree.io/f/mbjvyblb' method='POST'>
                    <div className="left"></div>
                    <div className="right">
                        <h2>Contact Us</h2>
                        <input type="text" name='name' className="field" id="" placeholder='Enter Name' required />
                        <input type="email" name='email' className="field" id="" placeholder='Enter Email' required />
                        <input type="Phone Number" name='phone number' className="field" id="" placeholder='Enter Phone number' required />
                        <textarea className="field area" name='message' id="" cols='20' placeholder='message' required></textarea>
                        <button className='btn'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </Layout>

    )
}

export default Contact