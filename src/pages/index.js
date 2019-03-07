//import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Img from "../components/image";
import "../components/index.scss";
import EmailIcon from "../images/svg-icons/email.svg?name=EmailIcon";
import LinkedinIcon from "../images/svg-icons/linkedin.svg?name=LinkedinIcon";

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />

		{

				<main className="index__inner-wrapper">

					<aside className="aside">
		
					<Img  />

						<h3><span>Hello!</span></h3>
						<p>My name is <span className="aside__important-text">Luis Cestou</span> and I am a <h1 className="aside__h1">Graphic and Interactive Designer</h1> from Pittsburgh, PA.</p>
						<p>The goals of my designs are to achieve an aesthetically pleasing and eye catching end product that meets or exceeds my client needs.</p>
						<p>Feel free to <a className="aside__contact-link" href="mailto:contact@luiscestou.com">contact me</a> for any project that you might have in mind.</p>
						
						<div className="aside__social-icons">
							<a className="linkedin-icon" href="https://www.linkedin.com/in/luis-cestou/" target="_blank" rel="nofollow noopener noreferrer"><LinkedinIcon /></a>
							<a className="email-icon" href="mailto:contact@luiscestou.com"><EmailIcon /></a>
						</div>
						
						<p className="aside__copyright">© {new Date().getFullYear()} Made with <span className="love-icon">&hearts;</span> by Luis Cestou</p>
					
					</aside>

					<article className="main">
					
						<section className="gallery">

							<AniLink cover bg="#eb8f00" to="/revive/" direction="left">
								<div className="parent">
									<div className="child bg-revive">
										<h2 className="gallery__title">Revive</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/the-stork/">
								<div className="parent">
									<div className="child bg-stork">
										<h2 className="gallery__title">The Stork</h2>
									</div>
								</div>
							</AniLink>
							
							<AniLink cover bg="#eb8f00" to="/startup-weekend-pgh/">
								<div className="parent">
									<div className="child bg-swpgh">
										<h2 className="gallery__title">Startup Weekend</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/ovulation-predictor-calculator/">
								<div className="parent">
									<div className="child bg-calc">
										<h2 className="gallery__title">Ovulation Calc</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/two-dogs-custom-woodworking/">
								<div className="parent">
									<div className="child bg-2dogs">
										<h2 className="gallery__title">Two Dogs</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/discord-status-widget/">
								<div className="parent">
									<div className="child bg-discord">
										<h2 className="gallery__title">Discord Widget</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/twenty-one-pilots/">
								<div className="parent">
									<div className="child bg-top">
										<h2 className="gallery__title">TØP</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/treatspace/">
								<div className="parent">
									<div className="child bg-treatspace">
										<h2 className="gallery__title">Treatspace</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/bollinger-tech-services/">
								<div className="parent">
									<div className="child bg-bollinger">
										<h2 className="gallery__title">Bollinger Tech</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/wow-lazy-macros/">
								<div className="parent">
									<div className="child bg-wlm">
										<h2 className="gallery__title">WoW Lazy</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/lou-ruscitto/">
								<div className="parent">
									<div className="child bg-ruscitto">
										<h2 className="gallery__title">Lou Ruscitto</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/zeiss/">
								<div className="parent">
									<div className="child bg-zeiss">
										<h2 className="gallery__title">ZEISS</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/quality-water-systems/">
								<div className="parent">
									<div className="child bg-qws">
										<h2 className="gallery__title">Quality Water</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/blue-hawk/">
								<div className="parent">
									<div className="child bg-bluehawk">
										<h2 className="gallery__title">Blue Hawk</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/youngstown-state-university/">
								<div className="parent">
									<div className="child bg-ysu">
										<h2 className="gallery__title">YSU</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/general-psychology/">
								<div className="parent">
									<div className="child bg-psych">
										<h2 className="gallery__title">General Psych</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/peppers/">
								<div className="parent">
									<div className="child bg-peppers">
										<h2 className="gallery__title">Pepper's</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/world-wildlife-fund/">
								<div className="parent">
									<div className="child bg-wwf">
										<h2 className="gallery__title">WWF</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/nectar/">
								<div className="parent">
									<div className="child bg-nectar">
										<h2 className="gallery__title">Nectar</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/widernet/">
								<div className="parent">
									<div className="child bg-widernet">
										<h2 className="gallery__title">Widernet</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/clinical-home-practice/">
								<div className="parent">
									<div className="child bg-chp">
										<h2 className="gallery__title">Clinical Home</h2>
									</div>
								</div>
							</AniLink>
							
							<AniLink cover bg="#eb8f00" to="/salon-davinci/">
								<div className="parent">
									<div className="child bg-davinci">
										<h2 className="gallery__title">Salon DaVinci</h2>
									</div>
								</div>
							</AniLink>

							<AniLink cover bg="#eb8f00" to="/juvenile-justice">
								<div className="parent">
									<div className="child bg-juvenile">
										<h2 className="gallery__title">Juvenile Justice</h2>
									</div>
								</div>
							</AniLink>
												
						</section>

					</article>

				</main>

		}

	</Layout>
)

export default IndexPage
