import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/peppers/peppers-logo.svg"
import Image1 from "../images/work/peppers/peppers-menu-outside.jpg"
import Image2 from "../images/work/peppers/peppers-menu-inside.jpg"
import Image3 from "../images/work/peppers/peppers-giftcard.jpg"
import Image4 from "../images/work/peppers/peppers-van.jpg"
import Image5 from "../images/work/peppers/peppers-shirt.jpg"
import Image6 from "../images/work/peppers/peppers-web.jpg"
import Image7 from "../images/work/peppers/peppers-museum.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const PeppersPage = () => (
  <Layout>
    <SEO title="Pepper's" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Pepper's</h1>

        <p>
        The design of a Tex-Mex restaurant menu focused on the structure and flow of its typography, color, aesthetic, and texture of the printed material.  Additional branding options were created to develop the brand further than was initially indented. It was selected for a student juried exhibition.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Pepper's Outside Menu"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Pepper's Inside Menu"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Pepper's Giftcard"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="Pepper's Van"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image5} alt="Pepper's Shirt"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image6} alt="Pepper's Web Design"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image7} alt="Pepper's menu at the museum"/>
        </figure>
        

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/general-psychology/">
            <div className="parent">
              <div className="child bg-psych"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/world-wildlife-fund/">
            <div className="parent">
              <div className="child bg-wwf"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default PeppersPage
