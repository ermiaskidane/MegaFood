import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

import Sprite from "../../assets/images/sprite.svg";
import "./feature.scss";

const Feature = () => {

    const [featurePost, setFeaturePost] = useState([])
    const [featureInstag, setFeatureInstag] = useState([])
    const [featureArticle, setFeatureArticle] = useState([])

    // Data about the post
    useEffect(() => {
      const featureData = async () => {
        const { data } = await axios.get("/api/feature/post")

        setFeaturePost(data)
      }
      featureData()
    }, [])

    // Data about the Instagram images
    useEffect(() => {
      const featureData = async () => {
        const { data } = await axios.get("/api/feature/instag")

        setFeatureInstag(data)
      }
      featureData()
    }, [])

    // Data about the posted articles
    useEffect(() => {
      const featureData = async () => {
        const { data } = await axios.get("/api/feature/articles")

        setFeatureArticle(data)
      }
      featureData()
    }, [])

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
            {featurePost.map((post) => (
              <div className="feature__sideleft--post">
              <div className="feature__post--content">
                <figure>
                  <NavLink to="/feature">
                    <img src={post.image} alt="pic" id="powder" />
                  </NavLink>
                </figure>
                <div className="feature__post--detail">
                  <p>{post.postDate}</p>
                  <h4>
                    <NavLink to="/feature">
                      {post.title}
                    </NavLink>
                  </h4>
                  <p>{post.comments}</p>
                </div>
              </div>
              <hr />
            </div>
            ))}
          </div>

          <div className="feature__sideleft--instagram">
            <h2>Instagram</h2>
            <figure className="feature__instagram--images">
              {featureInstag.map((inst) => (
                  <img src={inst.image} alt="pics" />
              ))}
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
          {featureArticle.map((article) => (
              <div className="feature__main--content">
              <figure className="feature__main--image">
                <NavLink to="/more">
                  <img src={article.image} alt="fig pic" />
                </NavLink>
              </figure>
              <div className="feature__main--para">
                <div className="feature__main--heading">
                  <div className="feature__main--circle">
                    <p>{article.date}</p>
                    <hr />
                    <p>{article.month}</p>
                  </div>
                  <div className="feature__main--title">
                    <h4>{article.type}</h4>
                    <h2>{article.title} </h2>
                  </div>
                </div>
                <article>
                  <p>
                   {article.description}
                  </p>
                </article>
                <div className="feature__main--footer">
                  <h4>
                   {article.author} <span>/{article.comments}</span>
                  </h4>
                  <NavLink to="/feature">
                    <p>
                      Read More <span>&gt;</span>
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
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

export default Feature;
