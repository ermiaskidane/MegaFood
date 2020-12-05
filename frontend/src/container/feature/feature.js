import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ShopC from "../../assets/images/shop-c (Medium).jpg";
import Burrito from "../../assets/images/shop-burrito-1.jpg";
import Pizzas from "../../assets/images/pizza-veg (Custom).jpg";
import Powders from "../../assets/images/shop-b (Custom).jpg";

import Burger from "../../assets/images/burger-2 (Custom).jpg";
import ChickenFrie from "../../assets/images/fried-chicken (Custom).jpg";
import Pepperoni from "../../assets/images/pizza-pepperoni (Custom).jpg";
import Taco from "../../assets/images/taco-1 (Custom).jpg";
import PanPizza from "../../assets/images/pizza-4 (Custom).jpg";
import MeatFries from "../../assets/images/fries-meat (Custom).jpg";

import Sprite from "../../assets/images/sprite.svg";
import "./feature.scss";

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        {/* ###### ReusedCode from Shop.js ###### */}
        <div className="shop__image" id="Feature__image">
          <div className="shop__image--cont">
            <h2>Feature</h2>
            <div className="shop__image--para">
              <ul className="shop__image--lists">
                <li>Home</li>
                <li>&#x3e;</li>
                <li>Feature</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ######  end ReusedCode from Shop.js ###### */}

        <div className="feature__sideleft">
          <div className="feature__sideleft--search">
            <form action="feature">
              <input type="text" name="name" placeholder="Search..." />
              <button>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                </svg>
              </button>
            </form>
          </div>
          {/* code taking from sideleft component */}
          <div className="sideleft__categories">
            <h2>Categories</h2>
            <hr />
            <div className="sideleft__categories--content">
              <ul className="sideleft__categories--lists">
                <li>
                  <NavLink to="/">
                    <span>&#x3e;</span> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop">
                    <span>&#x3e;</span> Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/feature">
                    <span>&#x3e;</span> Feature
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">
                    <span>&#x3e;</span> Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span>&#x3e;</span> Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* end of code taking from sideleft component */}

          <div className="feature__sideleft--posts">
            <h2>Recent posts</h2>
            <div className="feature__sideleft--post">
              <div className="feature__post--content">
                <figure>
                  <NavLink to="/feature">
                    <img src={ShopC} alt="pic" />
                  </NavLink>
                </figure>
                <div className="feature__post--detail">
                  <p>31.November.2019</p>
                  <h4>
                    <NavLink to="/feature"> Most Popular dishes in Uk</NavLink>
                  </h4>
                  <p>2 comments</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="feature__sideleft--post">
              <div className="feature__post--content">
                <figure>
                  <NavLink to="/feature">
                    <img src={Burrito} alt="pic" />
                  </NavLink>
                </figure>
                <div className="feature__post--detail">
                  <p>31.November.2019</p>
                  <h4>
                    <NavLink to="/feature">How to make Burrito</NavLink>
                  </h4>
                  <p>0 comments</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="feature__sideleft--post">
              <div className="feature__post--content">
                <figure>
                  <NavLink to="/feature">
                    <img src={Pizzas} alt="pic" />
                  </NavLink>
                </figure>
                <div className="feature__post--detail">
                  <p>31.November.2019</p>
                  <h4>
                    <NavLink to="/feature">How we make our pizza</NavLink>
                  </h4>
                  <p>0 comments</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="feature__sideleft--post">
              <div className="feature__post--content">
                <figure>
                  <NavLink to="/feature">
                    <img src={Powders} alt="pic" id="powder" />
                  </NavLink>
                </figure>
                <div className="feature__post--detail">
                  <p>31.November.2019</p>
                  <h4>
                    <NavLink to="/feature">
                      You know how to make yummy food
                    </NavLink>
                  </h4>
                  <p>1 comments</p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="feature__sideleft--instagram">
            <h2>Instagram</h2>
            <figure className="feature__instagram--images">
              <img src={Burger} alt="pic1" />
              <img src={ChickenFrie} alt="pic2" />
              <img src={Pepperoni} alt="pic3" />
              <img src={Taco} alt="pic4" />
              <img src={PanPizza} alt="pic5" />
              <img src={MeatFries} alt="pic6" />
            </figure>
          </div>

          <div className="feature__sideleft--followUs">
            <h2>Follow Us</h2>
            <div className="feature__followUs--icons">
              <NavLink to="/feature">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-twitter`} />
                </svg>
              </NavLink>
              <NavLink to="/feature">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-facebook2`} />
                </svg>
              </NavLink>
              <NavLink to="/feature">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-dribbble`} />
                </svg>
              </NavLink>
              <NavLink to="/feature">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-instagram`} />
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="feature__sideleft--tags">
            <h2>Tags</h2>
            <div className="feature__tags--content">
              <p>Burger</p>
              <p>Food</p>
              <p>Fastfood</p>
              <p>Pizza</p>
              <p>healthy</p>
            </div>
          </div>
        </div>
        <div className="feature__main">
          <div className="feature__main--content">
            <figure className="feature__main--image">
              <NavLink to="/more">
                <img src={ShopC} alt="fig pic" />
              </NavLink>
            </figure>
            <div className="feature__main--para">
              <div className="feature__main--heading">
                <div className="feature__main--circle">
                  <p>31</p>
                  <hr />
                  <p>Nov</p>
                </div>
                <div className="feature__main--title">
                  <h4>News</h4>
                  <h2>Most Popular Dishes In Uk </h2>
                </div>
              </div>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  unde vel fugiat fuga delectus enim aspernatur, corporis ex
                  dolores minima modi quae quidem, aperiam suscipit quisquam?
                  Reiciendis, dolorem molestiae in eos eligendi at repellendus
                  odit vitae necessitatibus recusandae dolore suscipit vel sint
                  quae? Itaque aliquam ipsam qui quia. Voluptatibus sunt
                  accusantium eum rem tempore repudiandae unde nesciunt quas
                  laborum quaerat. aliquam ipsam qui quia. Voluptatibus sunt ...
                </p>
              </article>
              <div className="feature__main--footer">
                <h4>
                  BY :: Andrew Colt <span>/ 2 comments</span>
                </h4>
                <NavLink to="/feature">
                  <p>
                    Read More <span>&gt;</span>
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="feature__main--content">
            <figure className="feature__main--image">
              <NavLink to="/more">
                <img src={Burrito} alt="fig pic" />
              </NavLink>
            </figure>
            <div className="feature__main--para">
              <div className="feature__main--heading">
                <div className="feature__main--circle">
                  <p>31</p>
                  <hr />
                  <p>Nov</p>
                </div>
                <div className="feature__main--title">
                  <h4>News</h4>
                  <h2>How to make Burrito </h2>
                </div>
              </div>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio deserunt asperiores quisquam quasi, saepe, iusto
                  dicta ducimus, est illum itaque ipsum doloremque
                  necessitatibus pariatur doloribus tempora. Quam repellat
                  provident maiores aperiam animi quasi fuga! Accusamus,
                  quibusdam quisquam maiores animi, veritatis tempore explicabo
                  quia quaerat eveniet totam laborum quo ipsa sed excepturi!
                  Accusamus minus ea natus...
                </p>
              </article>
              <div className="feature__main--footer">
                <h4>
                  BY :: Andrew Colt <span>/ 0 comments</span>
                </h4>
                <NavLink to="/feature">
                  <p>
                    Read More <span>&gt;</span>
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="feature__main--content">
            <figure className="feature__main--image">
              <NavLink to="/more">
                <img src={Pizzas} alt="fig pic" />
              </NavLink>
            </figure>
            <div className="feature__main--para">
              <div className="feature__main--heading">
                <div className="feature__main--circle">
                  <p>31</p>
                  <hr />
                  <p>Nov</p>
                </div>
                <div className="feature__main--title">
                  <h4>News</h4>
                  <h2>How we make our pizza</h2>
                </div>
              </div>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  tempore eos dolore blanditiis. Repudiandae maiores fugiat
                  similique, impedit inventore ut voluptatum blanditiis mollitia
                  porro cumque. Tenetur dolorem ipsam ut laudantium ipsum
                  quaerat fugiat! Corrupti rem iusto sunt nulla, facere repellat
                  ex ea saepe, esse maiores beatae voluptate? Fugiat sed eveniet
                  culpa consectetur rerum, dignissimos magnam voluptas debitis
                  natus, modi sequi deleniti distinctio cupiditate ex...
                </p>
              </article>
              <div className="feature__main--footer">
                <h4>
                  BY :: Andrew Colt <span>/ 0 comments</span>
                </h4>
                <NavLink to="/feature">
                  <p>
                    Read More <span>&gt;</span>
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="feature__main--content">
            <figure className="feature__main--image">
              <NavLink to="/more">
                <img src={Powders} alt="fig pic" />
              </NavLink>
            </figure>
            <div className="feature__main--para">
              <div className="feature__main--heading">
                <div className="feature__main--circle">
                  <p>31</p>
                  <hr />
                  <p>Nov</p>
                </div>
                <div className="feature__main--title">
                  <h4>News</h4>
                  <h2>You know how to make yummy Food </h2>
                </div>
              </div>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  unde vel fugiat fuga delectus enim aspernatur, corporis ex
                  dolores minima modi quae quidem, aperiam suscipit quisquam?
                  Reiciendis, dolorem molestiae in eos eligendi at repellendus
                  odit vitae necessitatibus recusandae dolore suscipit vel sint
                  quae? Itaque aliquam ipsam qui quia. Voluptatibus sunt
                  accusantium eum rem tempore repudiandae unde nesciunt quas
                  laborum quaerat. aliquam ipsam qui quia. Voluptatibus sunt ...
                </p>
              </article>
              <div className="feature__main--footer">
                <h4>
                  BY :: Andrew Colt <span>/ 1 comments</span>
                </h4>
                <NavLink to="/feature">
                  <p>
                    Read More <span>&gt;</span>
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="feature__main--buttons">
            <span>
              <NavLink to="/feature">1</NavLink>
            </span>
            <span>
              <NavLink to="/feature">2</NavLink>
            </span>
            <span>
              <NavLink to="/feature">3</NavLink>
            </span>
            <span>
              <NavLink to="/feature">&gt;</NavLink>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
