import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/widernet/widernet-logo.svg"
import Image1 from "../images/work/widernet/widernet-packaging.jpg"
import Image2 from "../images/work/widernet/widernet-web-1.jpg"
import Image3 from "../images/work/widernet/widernet-web-2.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const WidernetPage = () => (
  <Layout>
    <SEO title="Widernet" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Widernet</h1>

        <p>
        As a volunteer for Widernet, I participated in the development of Egranary which was an offline web library that served as an intranet database for lower developed countries. Template designs were based on A/B testing and analytical research.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Widernet Packaging"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Widernet Web Designs"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Widernet Web Designs"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/nectar/">
            <div className="parent">
              <div className="child bg-nectar"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/clinical-home-practice/">
            <div className="parent">
              <div className="child bg-chp"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default WidernetPage
