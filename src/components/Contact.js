import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Button } from 'react-scroll';
// import emailjs from "emailjs-com";
// import styled from "styled-components";
// import { useForm } from "react-hook-form";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ID",
        "template_u0t04kh",
        form.current,
        "Q6gq5zrEAeHR9ruhi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };  
  return (
    <div id="contact" className="contact">
        <div className="text-center">
            <h1>contact us</h1>
            <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        {/* <span className="success-message">{successMessage}</span> */}
        </div>
        <div className="container">
            <div className="row">
                {/* <div className="col-md-6 col-xs-12"> */}
                    <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    {/* <button className='submit-button' type="submit" value="Send">SUBMIT</button> */}
                    <button className="btn-main-offer contact-btn" type="submit">contact us</button>
                    {/* <button type="submit" value="Send" /> */}
                    </form>
               </div>
            {/* </div> */}
        </div>
     </div>
  )
}

export default Contact

// Styles

// const StyledContactForm = styled.div`
//   background-color:black;
//   width: 400px;
//   padding-left:100px;
//   form {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
    
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
//   `