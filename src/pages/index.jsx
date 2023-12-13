import * as React from "react"

import Layout from "../components/Layout/index"
import PageSection from "../components/PageSection"
import Seo from "../components/seo"


import { InlineNotification } from '@carbon/react';
import './app.scss';

import HeroSvg from "./../images/hero.svg";

const IndexPage = () => (
  <Layout>
    <div className="home-container">
      <div className="header">
        <h3>Supply Chain Intelligence Suite</h3>
        <h1>Builders</h1>
      </div>
      <InlineNotification
        className='info-toast'
        kind="info"
        statusIconDescription="Info about this resource"
        lowContrast
        subtitle="This resource is meant to provide links to other more detailed articles. It is intended to integrate new designers into the complicated ecosystem of the Builders and the underlying data manipulations. It is meant to be interactive and constantly evolving."
      ></InlineNotification>
      <div className='body-content'>
        <div className='intro-content'>
          <PageSection >
            <p>
              The Supply Chain Intelligence Suite provides a range of resources and assets to help organizations identify potential risks, calculate impacts and take immediate actions on their supply chain operations.
            </p>
            <p>
              Innovative configuration tools in the suite called “Builders” provide an interface for Business Analysts to extend and configure their Supply Chain Intelligence Suite (SCIS) capabilities to meet their unique business processes and requirements. </p>
            <p className='pulled-quote'>
              Builders make it possible to build, modify and deploy unique data driven assets for immediate organization-wide use in resolving issues and risks.
            </p>
          </PageSection>
        </div>
        <div className='img-content'>
          <img
            src={HeroSvg}
            alt=""
          />
        </div>

      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage