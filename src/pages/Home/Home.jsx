// import React from 'react'
// import Layout from '../../components/Shared/Layouts/Layouts'
// import Header from '../../components/Header/Header'
// import { TextSection } from '../../components/HomeComponents/TextSection'
// import ExampleSection from '../../components/HomeComponents/ExampleSection'
// import { Sustainable } from '../../components/HomeComponents/Sustainable'
// import { Claim } from '../../components/HomeComponents/Claim'

// const Home = () => {
//   return (
//     <Layout>
//         <Header/>
//        <TextSection textData="The CO2 footprint of the Internet's data centers alone may already be comparable to that of global air travel. The good news is that a growing number of major Internet corporations are becoming more environmentally conscientious, opting for more renewable energy sources for their data centers and operations."/>

//        <ExampleSection/>
       
//        <TextSection textData="These websites avoid bloated frameworks by using compressed graphics, efficient file formats, and lightweight fonts. Check out our information on developing sustainable websites and establishing a page weight budget if you want to learn more." buttonShow={true}/>

//        <Sustainable/>

//        <Claim/>
//     </Layout>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Shared/Layouts/Layouts';
import Header from '../../components/Header/Header';
import { TextSection } from '../../components/HomeComponents/TextSection';
import ExampleSection from '../../components/HomeComponents/ExampleSection';
import { Sustainable } from '../../components/HomeComponents/Sustainable';
import { Claim } from '../../components/HomeComponents/Claim';
import Loader from '../../components/Shared/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., data fetching)
    setTimeout(() => {
      setLoading(false); // Hide the loader after 2 seconds (or when data is fetched)
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading */}
      <Layout>
      {/* {loading && } */}
        <Header />
        <TextSection textData="The CO2 footprint of the Internet's data centers alone may already be comparable to that of global air travel. The good news is that a growing number of major Internet corporations are becoming more environmentally conscientious, opting for more renewable energy sources for their data centers and operations." />

        <ExampleSection />

        <TextSection textData="These websites avoid bloated frameworks by using compressed graphics, efficient file formats, and lightweight fonts. Check out our information on developing sustainable websites and establishing a page weight budget if you want to learn more." buttonShow={true} />

        <Sustainable />

        <Claim />
      </Layout>
    </>
  );
};

export default Home;
