import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/ysu/ysu-logo.svg"
import Image1 from "../images/work/ysu/ysu-web-1.jpg"
import Image2 from "../images/work/ysu/ysu-web-2.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const YSUPage = () => (
  <Layout>
    <SEO title="Youngstown State University" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Youngstown State University</h1>

        <p>
        While working at YSU, one of my tasks were to generate templates for the university’s educational content management system (ContentM). I combined assets from a library that were approved for public viewing using HTML, CSS and Photoshop.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="YSU Web Design"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="YSU Web Design"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/blue-hawk/">
            <div className="parent">
              <div className="child bg-bluehawk"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/general-psychology/">
            <div className="parent">
              <div className="child bg-psych"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default YSUPage
