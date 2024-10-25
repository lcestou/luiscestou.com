import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/bollinger/bollinger-logo.svg"
import Image1 from "../images/work/bollinger/bollinger-iconography.png"
import Image2 from "../images/work/bollinger/bollinger-bc-dark.png"
import Image3 from "../images/work/bollinger/bollinger-bc-blue.png"
import Image4 from "../images/work/bollinger/bollinger-bc-white.png"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const BollingerPage = () => (
  <Layout>
    <SEO title="Bollinger Tech Services" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Bollinger Tech Services</h1>

        <p>
        The client wanted a combination mark for their company logo which displayed parts-like from a computer. I incorporated some lines to visualize the idea of a circuit board within the typography of the logo. 
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Bollinger Iconography"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Bollinger logo on dark background"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Bollinger logo on blue background"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="Bollinger logo on white background"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/treatspace/">
            <div className="parent">
              <div className="child bg-treatspace"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/wow-lazy-macros/">
            <div className="parent">
              <div className="child bg-wlm"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default BollingerPage

export const Head = () => (
  <SEO 
    title="Bollinger Tech Services" 
    keywords={[`gatsby`, `application`, `react`]}
  />
)
