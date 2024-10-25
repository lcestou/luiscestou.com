import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/psych/psych-logo.svg"
import Image1 from "../images/work/psych/psych-book.jpg"
import Image2 from "../images/work/psych/psych-cards.jpg"
import Image3 from "../images/work/psych/psych-web.jpg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const PsychPage = () => (
  <Layout>
    <SEO title="General Psychology" />
    
    <main className="project">

<section className="project__description">


  <h1>General Psychology</h1>

  <p>
  This project was assigned by a professor to improve the study habits of students for this subject with the use of graphic design. I was able to structure the information into an easily portable study system with the focus being on the bookmark. 
  </p>

</section>

<section className="project__logo"><Logo /></section>

<article className="project__content">

  <figure>
    <img className="img-shadow" src={Image1} alt="General Psychology Book Design"/>
  </figure>
    
  <figure>
    <img className="img-shadow" src={Image2} alt="General Psychology Rack Cards"/>
  </figure>

  <figure>
    <img className="img-shadow" src={Image3} alt="General Psychology Web Design"/>
  </figure>

</article>

<footer className="project__footer">

  <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/youngstown-state-university/">
            <div className="parent">
              <div className="child bg-ysu"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/peppers/">
            <div className="parent">
              <div className="child bg-peppers"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default PsychPage

export const Head = () => (
  <SEO 
    title="General Psychology" 
    keywords={[`gatsby`, `application`, `react`]}
  />
)
