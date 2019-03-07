import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/nectar/nectar-logo.svg"
import Image1 from "../images/work/nectar/nectar-yellow-snowboards.jpg"
import Image2 from "../images/work/nectar/nectar-mag-spread.jpg"
import Image3 from "../images/work/nectar/nectar-beanie.jpg"
import Image4 from "../images/work/nectar/nectar-mobile.jpg"
import Image5 from "../images/work/nectar/nectar-museum-1.jpg"
import Image6 from "../images/work/nectar/nectar-museum-2.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const NectarPage = () => (
  <Layout>
    <SEO title="Nectar" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Nectar Snowboards</h1>

        <p>
        Typography as image-based design, used to create a series of snowboards with the brand name Nectar as a main element. Animals that feed of nectar were illustrated as images to feed of the brand itself. Multiple pieces were selected for a student juried exhibition.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt=""/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image5} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image6} alt=""/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/world-wildlife-fund/">
            <div className="parent">
              <div className="child bg-wwf"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/widernet/">
            <div className="parent">
              <div className="child bg-widernet"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default NectarPage
