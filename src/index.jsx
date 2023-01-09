import Panel from "./components/Panel.jsx";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import InspirationalQuote from "./components/InspirationalQuote.jsx";
import Avatars from "./components/Avatars.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Hero from "./components/Hero.jsx";
import "./base.css";

function App() {
  return (
    <div className="bg-gray-800 mt-1 h-full">
      <Panel>
        <Nav header={"Alistair Kane"} links={["Home", "About", "Contact"]} />
        <Hero></Hero>
      </Panel>
      <Panel>
        <Avatars></Avatars>
      </Panel>
      <Panel>
        <InspirationalQuote
          quote="Quote of the day: 'The only way to do great work is to love what you
          do.'"
          author="Alistair Kane"
          role="God of Thunder"
        ></InspirationalQuote>
      </Panel>
      <Panel>
        <CallToAction
          message="Sign up for our product...."
          callMessage="Hey, you!"
          buttonText="Sign Up"
        ></CallToAction>
      </Panel>
      <Footer>
        <span className="text-logo">Copyright @ The Odin Project 2021</span>
      </Footer>
    </div>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
