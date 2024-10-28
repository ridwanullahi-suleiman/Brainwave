import React from "react"
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from "./component/Button";
import Header from "./component/Header";
import Heros from "./component/Heros";
import Section from "./component/Section";
import Benefit from "./component/Benefit";
import Collaboraton from "./component/Collaboraton";
import Services from "./component/Services";
import Pricing from "./component/Pricing";
import RoadMap from "./component/Roadmap";
import Footer from "./component/Footer";
const  App = () => {

  return (<>
        
          <div className="pt-[4.75rem]  lg:[pt-5.25rem] overflow-hidden">
             <Header />
              <Heros/>
              <Benefit/>
              <Collaboraton/>
              <Services />
              <Pricing />
              <RoadMap/>
              <Footer />
              
          </div>
          <ButtonGradient />
      </>);
}

export default App
