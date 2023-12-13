import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import Seo from "../components/seo"

// style imports
import './asset.scss';

//import our custom component
import PageSection from './../components/PageSection';


const Conceptual = () => {
    return (
        <Layout>
            <div className="container">
                <div className="header">
                    <h1>Asset Map</h1>
                </div>
                <div className='conceptual-body body'>
                    <PageSection title="Ecosystem" >
                        <p>
                            Builders are designed to help users create customized, data-driven assets that can be reused across the suite. This breaks down larger processes to simplify the procedure for less technical users that need progressive guidance and support when building components. Developers and admins can use the various builders to manage an ecosystem of interconnected assets and processes.
                        </p>
                    </PageSection>
                    <hr />
                    <iframe style={{ width: '100%', height: '75vh', frameBorder: 0 }} src="https://viewer.diagrams.net/?highlight=00539A&nav=1&title=Conceptmap.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1LjDThL7Q2DhLat1e2FRbape29FihPkc1%26export%3Ddownload"></iframe>
                    <p className='subtitle'>
                        Dependancy of all the assets that can be "built" with a builder.
                        Arrow denotes that one asset depends on an other in order to be considered "complete".
                        Dotted lines denote that in some cases there is a dependancy.
                    </p>
                </div>
            </div>
        </Layout>
    )
}


export default Conceptual