
import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Contact.css'

const Contact = () => {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className="contact__container">
                <p>
                    Email : <span> dineshm4900@gmail.com</span>
                </p>
                <p>
                    Github username: <span> king@4900</span>
                </p>
                <div className="contact__icons">
                    <a href="https://www.instagram.com/king_._4900/">
                        <IconButton>
                            < InstagramIcon />
                        </IconButton>
                    </a>

                    <a href="https://www.linkedin.com/in/m-dinesh-a4b785188/">
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </a>

                </div>
            </div>
        </Element>
    )
}

export default Contact
