import React, { Component } from "react";
import "./contact.scss";

class Contact extends Component {
  render() {
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
            <div id="map"></div>
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
              <form action="/contact">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name (Required)"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email (Required)"
                  required
                />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
                <input type="submit" value="Send It" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
