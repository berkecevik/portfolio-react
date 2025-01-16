import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="full-name">Full Name:</label>
                        <input type="text" id="full-name" name="full-name" placeholder="Full name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone-number">Phone Number:</label>
                        <input type="tel" id="phone-number" name="phone-number" placeholder="Phone number" />
                    </div>
                </div>
                <label htmlFor="topic">Choose a Topic:</label>
                <select id="topic" name="topic" required>
                    <option value="" disabled selected>
                        Select one...
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Type your message..." required></textarea>
                <div className="form-group">
                    <input type="checkbox" id="terms" name="terms" required />
                    <label htmlFor="terms">I accept the terms</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;