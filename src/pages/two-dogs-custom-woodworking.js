import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/2dogs/tdcw-logo.svg"
import Image1 from "../images/work/2dogs/tdcw-bc-back-white.png"
import Image2 from "../images/work/2dogs/tdcw-bc-front-white.png"
import Image3 from "../images/work/2dogs/tdcw-bc-back-dark.png"
import Image4 from "../images/work/2dogs/tdcw-bc-front-dark.png"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SecondPage = () => (
  <Layout>
    <SEO title="Two Dogs Custom Woodworking" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Two Dogs Custom Woodworking</h1>

        <p>
        The name of the company was inspired by the client’s pets and his passion. The logo colors mimic the dogs coats and the wood texture emphasizes the client’s trade. The icon can be used as a branding element on the finished products.
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

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/ovulation-predictor-calculator/">
            <div className="parent">
              <div className="child bg-calc"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/discord-status-widget/">
            <div className="parent">
              <div className="child bg-discord"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default SecondPage
