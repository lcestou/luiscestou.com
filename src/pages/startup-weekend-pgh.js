import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/swpgh/sw-logo.svg"
import Image1 from "../images/work/swpgh/sw-artwork.png"
import Image2 from "../images/work/swpgh/sw-card-front.png"
import Image3 from "../images/work/swpgh/sw-card-back.png"
import Image4 from "../images/work/swpgh/sw-badge-front.png"
import Image5 from "../images/work/swpgh/sw-badge-back.png"
import Image6 from "../images/work/swpgh/sw-sticker.png"
import Image7 from "../images/work/swpgh/sw-shirt-black.jpg"
import Image8 from "../images/work/swpgh/sw-shirt-green.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SWPage = () => (
  <Layout>
    <SEO title="Startup Weekend PGH" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Startup Weekend PGH</h1>

        <p>
        An annual event where entrepreneurs meet and create a Minimum Viable Product in 54 hours. I participate as a designer and a mentor for the event, instructing on various concepts such as user experience, research and design. 
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Startup Weekend Artwork"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Startup Weekend flyer front side"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Startup Weekend flyer back side"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image4} alt="Startup Weekend badge front side"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image5} alt="Startup Weekend badge back side"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image6} alt="Startup Weekend rounded sticker"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image7} alt="Startup Weekend dark shirt"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image8} alt="Startup Weekend green shirt"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/the-stork/">
            <div className="parent">
              <div className="child bg-stork"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/ovulation-predictor-calculator/">
            <div className="parent">
              <div className="child bg-calc"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default SWPage
