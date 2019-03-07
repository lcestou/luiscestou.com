import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/bluehawk/bluehawk-logo.svg"
import Image1 from "../images/work/bluehawk/bluehawk-boxes.jpg"
import Image2 from "../images/work/bluehawk/bluehawk-website.jpg"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const BlueHawkPage = () => (
  <Layout>
    <SEO title="Blue Hawk" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Blue Hawk</h1>

        <p>
        The original packaging for the brand was generic and plain, so it needed to stand out among other similar products on their category. The intent was to give an uplift and prestige brand look to a product that is commonly used.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Blue Hawk Packaging Boxes"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Blue Hawk Website"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/quality-water-systems/">
            <div className="parent">
              <div className="child bg-qws"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/youngstown-state-university/">
            <div className="parent">
              <div className="child bg-ysu"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default BlueHawkPage
