import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ mode }) => {

    useEffect(() => {
        AOS.init({
            offset: 400,
            duration: 800
        });
    });

    return (
        <>
            <div className={`contact-heading-container${mode}`}>
                <span className={`contact-text${mode}`}>CONTACT</span>
            </div>
            <div class={`w3-container w3-padding-64 w3-theme-l5 contact-content-container${mode}`} id="contact">
                <div class="w3-row">
                    <div class={`w3-col m5 contact-text-container${mode}`} data-aos="fade-up">
                        <div class="w3-padding-16">
                            <span class={`w3-xlarge w3-border-teal w3-bottombar contact-us-color${mode}`}>Contact Us</span>
                        </div>
                        <h3>Address</h3>
                        <p>Virat Shakti Residency, Tadwadi, Surat</p>
                        <p>
                            <i class={`fa fa-map-marker w3-xlarge contact-details-color${mode}`}  /><span style={{ marginLeft: '4%' }}>Surat, Gujarat</span>
                        </p>
                        <p>
                            <i class={`fa fa-phone w3-xlarge contact-details-color${mode}`} /><span style={{ marginLeft: '2.5%' }}>+91 9106884674</span>
                        </p>
                        <p>
                            <i class={`fa fa-envelope-o w3-xlarge contact-details-color${mode}`} /><span style={{ marginLeft: '2%' }}>kushalmajiwala1212@gmail.com</span>
                        </p>
                    </div>
                    <div class={`w3-col m7 contact-form-container${mode}`}>
                        <div class={`w3-container w3-card-4 w3-padding-16 contact-form-container${mode}`}>
                            <div class="w3-section">
                                <label className={`contact-field-text-color${mode}`}>Name</label>
                                <input class={`w3-input contact-field${mode}`} type="text" required />
                            </div>
                            <div class="w3-section">
                                <label className={`contact-field-text-color${mode}`}>Email</label>
                                <input class={`w3-input contact-field${mode}`} type="text" required />
                            </div>
                            <div class="w3-section">
                                <label className={`contact-field-text-color${mode}`}>Message</label>
                                <input class={`w3-input contact-field${mode}`} required />
                            </div>
                            <input class="w3-check" type="checkbox" name="Like" />
                            <label style={{marginLeft:'2%'}}>I Like it!</label><br /><br />
                            <button className={`contact-btn${mode}`}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;