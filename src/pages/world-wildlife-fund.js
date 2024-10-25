import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/wwf/wwf-logo.svg"
import Image1 from "../images/work/wwf/wwf-layout.jpg"
import Image2 from "../images/work/wwf/wwf-billboard.jpg"
import Image3 from "../images/work/wwf/wwf-mag.jpg"
import Image4 from "../images/work/wwf/wwf-bus.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const WWFPage = () => (
  <Layout>
    <SEO title="World Wildlife Fund" />
    
    <main className="project">

      <section className="project__description">

        <h1>World Wildlife Fund</h1>

        <p>
        The purpose of this project was to develop a campaign that created awareness for species that are on the endangered species list. It was promoted by the World Wildlife Fund and used type and image as its focus. 
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="World Wildlife Fund Layout Design"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="World Wildlife Billboard Design"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="World Wildlife Magazine Ad"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="World Wildlife Fund Bus Wrapping Design"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/peppers/">
            <div className="parent">
              <div className="child bg-peppers"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/nectar/">
            <div className="parent">
              <div className="child bg-nectar"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default WWFPage

export const Head = () => (
  <SEO 
    title="World Wildlife Fund" 
    keywords={[`gatsby`, `application`, `react`]}
  />
)
