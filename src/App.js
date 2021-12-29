import React,{useState}from"react"
import './App.css';
import Nav from "./components/Nav"
import Page from "./components/Page"
import Footer from "./components/Footer"
function App() {
  // const [pages]=useState([
  //   {name:"about"},
  //   {name:"projects"},
  //   {name:"contact"},
  //   {name:"resume"},
  // ])
  // const[
  //   currentPage,setCurrentPage
  // ]=useState(pages[0])
  return (
    <div >
     <Nav
      // pages={pages}
      // setCurrentPage={setCurrentPage}
      // currentPage={currentPage}
     ></Nav>
     {/* <Page currentPage={currentPage}></Page> */}
     <Footer></Footer> 
    </div>
  );
}

export default App;
