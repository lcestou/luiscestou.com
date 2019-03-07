import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/top/top-logo.svg"
import Image1 from "../images/work/top/top-coffee.jpg"
import Image2 from "../images/work/top/top-coffee-sleeve.png"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const TOPPage = () => (
  <Layout>
    <SEO title="Twenty Øne Piløts" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Twenty Øne Piløts</h1>

        <p>
        A co-worker that is a fan of Twenty One Pilots was having a rough week, so I decided to create a pick me up of sorts. “Sippin’ on Straight Chlorine” is a play on words from the lyrics of one of their songs, which are perfect for a coffee sleeve. Feel free to download this fan art template and enjoy with your next cup of coffee!
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Twenty One Pilots Coffee Sleeve"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Twenty One Pilots Coffee Sleeve Template"/>
        </figure>

        <a href="https://bit.ly/Luis-TOP-template" className="project__content--button" target="_blank" rel="noopener noreferrer">Download Template</a>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/discord-status-widget/">
            <div className="parent">
              <div className="child bg-discord"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/treatspace/">
            <div className="parent">
              <div className="child bg-treatspace"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default TOPPage
