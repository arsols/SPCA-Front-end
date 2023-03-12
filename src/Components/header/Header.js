import React ,{useState , useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";


const Header = () => {
var [Collapse  , setCollapse] = useState("collapse")
var [Expend  , setExpend] = useState("false")
async function nave() {
  setCollapse('')
  setExpend('true')
  var element = document.getElementById("navbarSupportedContent");
  element.classList.add("show");
  document.getElementById('nave').style.display = 'none';
  document.getElementById('wave').style.display ='block';
}
function wave() {
  setCollapse('collapse')
  setExpend('false')
  var element = document.getElementById("navbarSupportedContent");
  element.classList.remove("show");
  document.getElementById('nave').style.display = 'block';
  document.getElementById('wave').style.display ='none';
}


useEffect(() => {
 
},[Collapse , Expend]);


  return (
<>

<div id="header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="navbar-brand d-block d-lg-none" href="#">
        <a href="#">
          <h2 className="logo">
            <strong>EZZ</strong>STAR
          </h2>
        </a>
      </div>
      <button
      id="nave"
        onClick={nave}
        className="navbar-toggler navbar_toggle"
        type="button"
        data-bs-toggle={Collapse}
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={Expend}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <button
      id="wave"
        onClick={wave}
        style={{display:'none'}}
        className="navbar-toggler navbar_toggle"
        type="button"
        data-bs-toggle={Collapse}
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={Expend}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/game'} className="nav-link" >
              GAME         
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/events'} className="nav-link" >
               EVENTS
            </Link>
          </li>
       
        </ul>
        <div className="navbar-brand d-none d-lg-block" href="#">
          
            <h2 className="logo center-logo">
              <strong>EZZ</strong>STAR
            </h2>
      
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/nft'} className="nav-link" >
            NFT 
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/merchs'} className="nav-link" >
              MERCHS
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/account'} className="nav-link">
           ACCOUNT
            </Link>
          </li>
      
        </ul>
      </div>
    </nav>
  </div>
</div>

</>
  );
};

export default Header;
