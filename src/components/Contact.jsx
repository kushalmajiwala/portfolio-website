import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='contact-heading-container'>
                <span className='contact-text'>CONTACT</span>
            </div>
            <div class="w3-container w3-padding-64 w3-theme-l5 contact-content-container" id="contact">
                <div class="w3-row">
                    <div class="w3-col m5 contact-text-container">
                        <div class="w3-padding-16">
                            <span class="w3-xlarge w3-border-teal w3-bottombar" style={{ color: '#fc7d49' }}>Contact Us</span>
                        </div>
                        <h3>Address</h3>
                        <p>Virat Shakti Residency, Tadwadi, Surat</p>
                        <p>
                            <i class="fa fa-map-marker w3-xlarge" style={{ color: '#0eeaff' }} /><span style={{ marginLeft: '4%' }}>Surat, Gujarat</span>
                        </p>
                        <p>
                            <i class="fa fa-phone w3-xlarge" style={{ color: '#0eeaff' }} /><span style={{ marginLeft: '2.5%' }}>+91 9106884674</span>
                        </p>
                        <p>
                            <i class="fa fa-envelope-o w3-xlarge" style={{ color: '#0eeaff' }} /><span style={{ marginLeft: '2%' }}>kushalmajiwala1212@gmail.com</span>
                        </p>
                    </div>
                    <div class="w3-col m7 contact-form-container">
                        <div class="w3-container w3-card-4 w3-padding-16 " style={{ backgroundColor: '#080829', borderRadius:'5px' }}>
                            <div class="w3-section">
                                <label style={{color: '#F6B4A5'}}>Name</label>
                                <input class="w3-input" type="text" required style={{ backgroundColor: '#21214B', color: 'white', border: 'none', borderRadius:'5px' }} />
                            </div>
                            <div class="w3-section">
                                <label style={{color: '#F6B4A5'}}>Email</label>
                                <input class="w3-input" type="text" required style={{ backgroundColor: '#21214B', color: 'white', border: 'none', borderRadius:'5px' }} />
                            </div>
                            <div class="w3-section">
                                <label style={{color: '#F6B4A5'}}>Message</label>
                                <input class="w3-input" required style={{ backgroundColor: '#21214B', color: 'white', border: 'none', borderRadius:'5px' }} />
                            </div>
                            <input class="w3-check" type="checkbox" name="Like" />
                            <label style={{marginLeft:'2%'}}>I Like it!</label><br /><br />
                            <button className='contact-btn'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;