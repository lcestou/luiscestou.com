import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/stork/stork-logo.svg"
import Image1 from "../images/work/stork/stork-sbox.jpg"
import Image2 from "../images/work/stork/stork-otc-box.jpg"
import Image3 from "../images/work/stork/stork-photo-1.jpg"
import Image4 from "../images/work/stork/stork-infographics.png"
import Image5 from "../images/work/stork/stork-photo-2.jpg"
import Image6 from "../images/work/stork/stork-photo-3.jpg"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const StorkPage = () => (
  <Layout>
    <SEO title="The Stork" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>The Stork</h1>

        <p>
        An at-home conception device used to assist in your chances of becoming pregnant. I assisted with the launch and rebranding of the product, from a prescription device to over the counter in multiple countries via digital and print.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="The Stork OTC Packaging Triangular Box"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image2} alt="The Stork OTC Packaging Box and Device"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image3} alt="The Stork OTC Leaflets"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="The Stork OTC Infographics"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image5} alt="The Stork OTC Instructions for Use"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image6} alt="The Stork OTC Photography Pregnant Couple"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/revive/">
            <div className="parent">
              <div className="child bg-revive"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/startup-weekend-pgh/">
            <div className="parent">
              <div className="child bg-swpgh"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default StorkPage
