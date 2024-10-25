import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import "../components/pages.scss"
import Logo from "../images/work/calc/codepen-logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const OvulationCalculatorPage = () => (
  <Layout>
    <SEO title="Ovulation Predictor Calculator" />
    
    <main className="project">
      <section className="project__description">
        <h1>Ovulation Predictor Calculator</h1>
        <p>
          The calculator was created with the intention to replace a PHP plugin within the Stork website. This page has the most views and by using Vue.js it will reduce the load on the server while running the app in the browser.
        </p>
      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">
        <iframe 
          height="860" 
          style={{width: `100%`}} 
          scrolling="no" 
          title="Ovulation Predictor Calculator - Vue.js" 
          src="//codepen.io/luiscestou/embed/WaaOMd/?height=265&theme-id=0&default-tab=result" 
          frameBorder="no" 
          allowtransparency="true" 
          allowFullScreen={true}>
          See the Pen <a href='https://codepen.io/luiscestou/pen/WaaOMd/'>Ovulation Predictor Calculator - Vue.js</a> by Luis Cestou
          (<a href='https://codepen.io/luiscestou'>@luiscestou</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </article>

      <footer className="project__footer">
        <div className="project__footer--gallery">
          <AniLink cover bg="#eb8f00" direction="right" to="/startup-weekend-pgh/">
            <div className="parent">
              <div className="child bg-swpgh"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/two-dogs-custom-woodworking/">
            <div className="parent">
              <div className="child bg-2dogs"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>
        </div>
      </footer>
    </main>
  </Layout>
)

export default OvulationCalculatorPage

export const Head = () => (
  <SEO 
    title="Ovulation Predictor Calculator" 
    keywords={[`gatsby`, `application`, `react`]}
  />
)
