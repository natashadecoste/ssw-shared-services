import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import Seo from "../components/seo"

// style imports
import './builders.scss';

//import the builder information
import data from './../assets/builders.json';

//import our custom component
import Section from './../components/Section';

//import graphic for bottom right
import img from './../images/empty-create.svg';


const Builders = () => {
  return (
      <div className='container'>
          <div className='header'>
              <h1>Builders</h1>
          </div>
          <div className='body'>
              {data.builders.map((item, index) => <Section title={item.name} content={item.description} tags={item.tags} actions={item.actions} key={index} />)}
              <div className='coming-soon'>
                  <div className='text-content'>
                      <h4>Can't find what you're looking for?</h4>
                      <p>Keep checking back for new builders to be added!</p>
                  </div>
                  <img className="empty-img" src={img}></img>
              </div>
          </div>

      </div>
  )
}


const SecondPage = () => (
  <Layout>
    <Builders/>
  </Layout>
)

export const Head = () => <Seo title="Builders" />

export default SecondPage
