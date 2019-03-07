import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/chp/chp-logo.svg"
import Image1 from "../images/work/chp/chp-ad-1.jpg"
import Image2 from "../images/work/chp/chp-ad-2.jpg"
import Image3 from "../images/work/chp/chp-ad-3.jpg"
import Image4 from "../images/work/chp/chp-iconography.png"
import Image5 from "../images/work/chp/chp-web-1.jpg"
import Image6 from "../images/work/chp/chp-web-2.jpg"
import VideoMP4 from "../images/work/chp/chp-video.mp4"
import VideoWebM from "../images/work/chp/chp-video.webm"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const CHPPage = () => (
  <Layout>
    <SEO title="Clinical Home Practice" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Clinical Home Practice</h1>

        <p>
        A kinetic typography project focused on creating a branding campaign for a religious chain of hospitals. Included but limited to the creation of a logo, posters and multimedia designs.
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

        <figure>

          <video controls>
            <source src={VideoWebM} 
                    type='video/webm;codecs="vp8, vorbis"'/>
            <source src={VideoMP4}
                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
          </video>

        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/widernet/">
            <div className="parent">
              <div className="child bg-widernet"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/salon-davinci/">
            <div className="parent">
              <div className="child bg-davinci"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default CHPPage
