import React from "react";
import "./footer.scss";

import Sprite from "../../assets/images/sprite.svg";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--one">
          <div className="footer__items--one">
            <h3>Help &amp; Information</h3>
            <ul className="footer__list">
              <li>
                <p>Help Center</p>
              </li>
              <li>
                <p>Harman Corperate</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Location</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
            </ul>
          </div>
          <div className="footer__items--two">
            <h3>About Us</h3>
            <ul className="footer__list">
              <li>
                <p>Sitemap</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Help</p>
              </li>
              <li>
                <p>Store Location</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
            </ul>
          </div>
          <div className="footer__items--three">
            <h3>Catagories</h3>
            <ul className="footer__list">
              <li>
                <p>Terms of Service</p>
              </li>
              <li>
                <p>Registry</p>
              </li>
              <li>
                <p>Return Policy</p>
              </li>
              <li>
                <p>Standard</p>
              </li>
              <li>
                <p>Address</p>
              </li>
            </ul>
          </div>
          <div className="footer__items--four">
            <h3>Good stuff in your inbox</h3>
            <div className="footer__item">
              <p>News and Update from MegaFood</p>
              <form action="#">
                <input type="email" placeholder="email" name="email" />

                <button>Sing up</button>
              </form>
              <div className="footer__icons">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-twitter`} />
                </svg>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-facebook2`} />
                </svg>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-dribbble`} />
                </svg>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-instagram`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content--two">
          <div className="footer__items--one">
            <p>Website by MegaFood &copy; copyright MegaFood</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
