import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/treatspace/treatspace-logo.svg"
import Image1 from "../images/work/treatspace/treatspace-web.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const TreatspacePage = () => (
  <Layout>
    <SEO title="Treatspace" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Treatspace</h1>

        <p>
        This was an exercise with a 24-hour turnaround that was given to me by the hiring manager, its intent was for me to present a possible solution to their needs within the constraints that were given. An opportunity was offered afterwards; however, I politely declined the offer. 
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="Treatspace Web Design"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/twenty-one-pilots/">
            <div className="parent">
              <div className="child bg-top"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/bollinger-tech-services/">
            <div className="parent">
              <div className="child bg-bollinger"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default TreatspacePage
