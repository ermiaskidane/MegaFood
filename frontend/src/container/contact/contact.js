import React, { useState} from "react";
import Map from "../../components/map/map";
import ContactForm from "./contactForm";
import "./contact.scss";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const location = {
  address: '154 Queens Ckicken and Pizza, Narborough Rd, Leicester.',
  lat: 52.626903,
  lng: -1.150521,
}

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required().email(),
  subject: yup.string().required("please write a title"),
  message: yup.string().required("please we love your messages").min(20)
})

const Contact = ({history}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (info) => {
    console.log(info)
    history.push("/")
  }

  console.log(errors)

  return (
    <div className="contact">
      {/* ###### ReusedCode from Shop.js ###### */}
      <div className="shop__image">
        <div className="shop__image--cont">
          <h2>Contact Us</h2>
          <div className="shop__image--para">
            <ul className="shop__image--lists">
              <li>Home</li>
              <li>&#x3e;</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ######  end ReusedCode from Shop.js ###### */}

      <div className="contact__us--content">
        <div className="contact__us--item1">
          <h2>Contact Us to find out More</h2>
          <div id="map">
            <Map center={location} zoom={16} />
          </div>
        </div>
        <div className="contact__us--item2">
          <div className="contact__us--detail">
            <div className="contact__us--address">
              <h3>MegaFood</h3>
              <p>
                25 Stamford Road, Appleton Roebuck YO23 9WE <br />
                P: 438.380.3554. F: 01-2222 8888
              </p>
            </div>
            <div className="contact__us--time">
              <h3>Open Hours</h3>
              <p>
                Monday - Saturday 10AM-8PM <br />
                Sunday 11AM-5PM
              </p>
            </div>
            <div className="contact__us--specialist">
              <h3>Specialist Hours</h3>
              <p>Monday - Friday 10AM-6PM</p>
            </div>
          </div>
          <div className="contact__us--message">
            <form onSubmit={handleSubmit(onSubmit)}>
              {ContactForm.inputs.map((input, key) => {
                return (
                  <React.Fragment key={key}>
                  { input.form === "text" ? (
                    <>
                    <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    ref={register}
                  />
                  <p className={`${errors[input.name] ? "messages": ""}`}>{errors[input.name]?.message}</p>
                  </>
                  ) : (
                    <>
                    <textarea
                    name={input.name}
                    id="message"
                    placeholder={input.placeholder}
                    ref={register}
                  ></textarea>
                  <p className={`${errors[input.name] ? "messages": ""}`}>{errors[input.name]?.message}</p>
                  </>
                  )}
                  </React.Fragment>
                )
              })}
              
              
              <input type="submit" value="Send It" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
