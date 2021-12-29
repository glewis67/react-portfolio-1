import React,{useState}from"react"
import './App.css';
import Nav from "./components/Nav"
import Page from "./components/Page"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import resume1 from "./GaynelleResume1.jpg"
import resume2 from "./GaynelleResume2.jpg"
function App() {
  const [pages]=useState([
    {name:"about"},
    {name:"projects"},
    {name:"contact"},
    {name:"resume"},
  ])
  const[
    currentPage,setCurrentPage
  ]=useState(pages[0])
  return (
    <div >
     <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
     ></Nav>
     <About/>
     <Projects/>
     <Contact/>
     <h2>resume</h2>
     <img src={resume1}alt="resume1" />
     <img src={resume2}alt="resume2" />
     <Footer></Footer> 
    </div>
  );
}

export default App;
