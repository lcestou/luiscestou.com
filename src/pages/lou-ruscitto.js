import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/ruscitto/ruscitto-logo.svg"
import Image1 from "../images/work/ruscitto/ruscitto-bc-box.jpg"
import Image2 from "../images/work/ruscitto/ruscitto-bc-blue.png"
import Image3 from "../images/work/ruscitto/ruscitto-bc.png"
import Image4 from "../images/work/ruscitto/ruscitto-shirt.jpg"
import Image5 from "../images/work/ruscitto/ruscitto-truck.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const RuscittoPage = () => (
  <Layout>
    <SEO title="Lou Ruscitto" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Lou Ruscitto</h1>

        <p>
        The client was interested in personalized branding, something that was memorable and related to his business. The project was finalized within 24 hours at a popup design event.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Lou Ruscitto business card box"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Lou Ruscitto blue business card"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Lou Ruscitto white business card"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="Lou Ruscitto Shirt Design"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image5} alt="Lou Ruscitto Truck Lettering"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/wow-lazy-macros/">
            <div className="parent">
              <div className="child bg-wlm"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/zeiss/">
            <div className="parent">
              <div className="child bg-zeiss"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default RuscittoPage
