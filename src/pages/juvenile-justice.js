import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/juvenile/mcdonough-logo.svg"
import Image1 from "../images/work/juvenile/juvenile-justice-room.jpg"
import Image2 from "../images/work/juvenile/juvenile-billboard.jpg"
import Image3 from "../images/work/juvenile/jjc-billboard.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const JuvenilePage = () => (
  <Layout>
    <SEO title="Juvenile Justice" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Juvenile Justice Center of Mahoning County</h1>

        <p>
        With the collaboration of the juvenile justice center of Mahoning County, the community conscience: a mural project was created to evoke a sense of reality to the community. The murals were displayed within different court rooms based on the court’s needs. My design was picked and featured in the summer festival of the arts and at the McDonough Museum of Art in Youngstown, OH.
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

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/salon-davinci/">
            <div className="parent">
              <div className="child bg-davinci"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/revive/">
            <div className="parent">
              <div className="child bg-revive"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default JuvenilePage
