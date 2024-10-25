import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import "../components/pages.scss"
import Logo from "../images/work/discord/codepen-logo.svg"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const DiscordWidgetPage = () => (
  <Layout>
    <SEO title="Discord Status Widget" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Discord Status Widget</h1>

        <p>
        This status widget was created to solve a styling limitation that was occurring on the default widget. Vue.js was used as the JavaScript framework and the Axios library to obtain API data.
                </p>

      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <iframe height="860" style={{width: `100%`}} 
        scrolling="no" 
        title="Discord Status Widget - Vue.js" 
        src="//codepen.io/luiscestou/embed/zmOqMK/?height=398&theme-id=0&default-tab=result" 
        frameBorder="no" 
        allowtransparency="true" 
        allowFullScreen={true}>
          See the Pen <a href='https://codepen.io/luiscestou/pen/zmOqMK/'>Discord Status Widget - Vue.js</a> by Luis Cestou
          (<a href='https://codepen.io/luiscestou'>@luiscestou</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/two-dogs-custom-woodworking/">
            <div className="parent">
              <div className="child bg-2dogs"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/twenty-one-pilots/">
            <div className="parent">
              <div className="child bg-top"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default DiscordWidgetPage

export const Head = () => (
  <SEO 
    title="Discord Status Widget" 
    keywords={[`gatsby`, `application`, `react`]}
  />
)
