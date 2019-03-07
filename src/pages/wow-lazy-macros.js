import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/wlm/wlm-logo.svg"
import Image1 from "../images/work/wlm/wlm-lazy-peon-meets-legendary.jpg"
import Image2 from "../images/work/wlm/wlm-icon.png"
import Image3 from "../images/work/wlm/wlm-icon-green.png"
import Image4 from "../images/work/wlm/wlm-logo-display.png"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const WLMPage = () => (
  <Layout>
    <SEO title="WoW Lazy Macros" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>WoW Lazy Macros</h1>

        <p>
        I needed a logo for a community site that I built and is dedicated to macros in the game World of Warcraft. The logo is a combination mark and the colors are a representation of a famous lazy orc combined with a legendary class item.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="WoW lazy peon meets legendary"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="WoW Lazy Macros Icon White Background"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="WoW Lazy Macros Icon Green Background"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="WoW Lazy Macros Logo"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/bollinger-tech-services/">
            <div className="parent">
              <div className="child bg-bollinger"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/lou-ruscitto/">
            <div className="parent">
              <div className="child bg-ruscitto"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default WLMPage
