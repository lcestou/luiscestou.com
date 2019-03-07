import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/work/zeiss/zeiss-logo.svg"
import Image1 from "../images/work/zeiss/zeiss-packaging-front.jpg"
import Image2 from "../images/work/zeiss/zeiss-packaging-back.jpg"
import Image3 from "../images/work/zeiss/zeiss-web.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const ZeissPage = () => (
  <Layout>
    <SEO title="ZEISS" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>ZEISS</h1>

        <p>
          Praesent ac sem eget est egestas volutpat. Curabitur vestibulum aliquam leo. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Etiam feugiat lorem non metus. Vivamus in erat ut urna cursus vestibulum.
        </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Image1} alt="ZEISS Packaging Boxes Front"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Image2} alt="ZEISS Packaging Boxes Back"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Image3} alt="ZEISS Web Design"/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/lou-ruscitto/">
            <div className="parent">
              <div className="child bg-ruscitto"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/quality-water-systems/">
            <div className="parent">
              <div className="child bg-qws"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default ZeissPage
