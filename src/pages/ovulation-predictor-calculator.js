import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import "../components/pages.scss"
import Logo from "../images/work/calc/codepen-logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const OvulationCalculatorPage = () => (
  <Layout>
    <main className="project">
      {/* ... rest of your component ... */}
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
