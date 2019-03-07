import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/revive/revive-logo.svg"
import Image1 from "../images/work/revive/revive-box-front-angle.jpg"
import Image2 from "../images/work/revive/revive-box-back.jpg"
import Image3 from "../images/work/revive/revive-ifu-front.png"
import Image4 from "../images/work/revive/revive-ifu-back.png"
import Image5 from "../images/work/revive/revive-pouch-front.png"
import Image6 from "../images/work/revive/revive-pouch-back.png"
import Image7 from "../images/work/revive/revive-web.jpg"
import Image8 from "../images/work/revive/revive-components.jpg"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const RevivePage = () => (
  <Layout>
    <SEO title="Revive" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Revive</h1>

        <p>
          An easy to use reusable device for women's incontinence that reduces bladder leaks. I collaborated as a designer in the development of the device since its conception, from naming the product to finished goods. 
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Revive Packaging Box Front Angle"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Revive Packaging Box Back"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Revive Instructions for Use Front"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="Revive Instructions for Use Back"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image5} alt="Revive Front Side Pouch"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image6} alt="Revive Back Side Pouch"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image7} alt="Revive Web Design"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image8} alt="Revive Inside Components"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/juvenile-justice/">
            <div className="parent">
              <div className="child bg-juvenile"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/the-stork/">
            <div className="parent">
              <div className="child bg-stork"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default RevivePage
