import React from 'react';
import Hero from './components/hero';
import Pricing from './components/pricing';
import Team from './components/team';


import Layout from './layout'

const Landing = () => {
    return ( 
        <Layout>
            <Hero/>
            <Pricing/>
            <Team/>
        </Layout>
     );
}
 
export default Landing;