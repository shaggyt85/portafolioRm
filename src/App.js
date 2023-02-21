
import Nav from "./components/Nav";
import About from "./components/About";
import Splines from "./components/Splines";
import Timelines from "./components/Timelines";
import Works from "./components/Works";
import Contacts from "./components/Contacts";

function App() {
  return (<>
      <Nav />
      <Splines />
      <About />
      <Timelines />
      {/* <Skills /> */}
      <Works />
      <Contacts />
  </>
  );
}

export default App;
