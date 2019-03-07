import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/davinci/davinci-logo.svg"
import Image1 from "../images/work/davinci/davinci-billboard.jpg"
import Image2 from "../images/work/davinci/davinci-giftcards.jpg"
import Image3 from "../images/work/davinci/davinci-web.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const DavinciPage = () => (
  <Layout>
    <SEO title="Salon DaVinci" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Salon DaVinci</h1>

        <p>
        I offered my design services to a local hair salon specializing in coloring. To market the business and draw more people in the client requested a billboard design that would be displayed by a nearby highway. Additional marketing materials were created for the branding.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Salon DaVinci Billboard"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="Salon DaVinci Giftcards"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="Salon DaVinci Web Design"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/clinical-home-practice/">
            <div className="parent">
              <div className="child bg-chp"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/juvenile-justice/">
            <div className="parent">
              <div className="child bg-juvenile"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default DavinciPage
