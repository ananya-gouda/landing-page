import React from "react";
import "../stylesheets/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Conatct = () => {
    return (
        <div className="bodi">
            <div className="form-content">
                <div className="contact">
                    <h1>Contact Us</h1>
                    <p>Please do share your valuable feedbacks!!!</p>
                </div>
                <form>
                    <div className="comp-container">
                        <div className="comp">
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>

                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="comp">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>

                            <input type="number" placeholder="Phone Number" />
                        </div>
                        <div className="comp">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>

                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="comp">
                            <div className="icon">

                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <textarea type="text" placeholder="Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Conatct;