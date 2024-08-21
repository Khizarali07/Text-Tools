import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  
  return (
    <>
      <ul id="navbar">
        <li id="one">{props.title}</li>
        <li className="list">
          <Link to="/Text-Tools" className="lone">
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="/Text-Tools/About-us" className="lone">
            About-us
          </Link>
        </li>
        <li className="list">
          <Link to="/Text-Tools/Contact-us" className="lone">
            Contact-us
          </Link>
        </li>

        <li id="mode">
          <p id="select" onClick={moding}></p>
        </li>
        <li id="mod">Mode</li>
      </ul>
    </>
  );
}
let count = 1;
function moding() {
  let x = document.getElementById("navbar");
  let y = document.getElementById("select");
  let a = document.getElementsByClassName("lone");
  let b = document.getElementById("footer");
  let z = document.body;
  if (count % 2 === 0) {
    x.style.backgroundColor = "yellowgreen";
    x.style.color = "black";
    y.style.transform = "translateX(0px)";
    y.style.backgroundColor = "green";
    z.style.backgroundColor = "white";
    z.style.color = "black";
    a[0].style.color = "black";
    a[1].style.color = "black";
    a[2].style.color = "black";
    b.style.backgroundColor = "yellowgreen";
    b.style.color = "black";
  } else if (count % 2 !== 0) {
    x.style.backgroundColor = "rgb(68, 54, 54)";
    x.style.color = "aqua";
    y.style.transform = "translateX(22px)";
    y.style.backgroundColor = "black";
    z.style.backgroundColor = "black";
    z.style.color = "aqua";
    a[0].style.color = "aqua";
    a[1].style.color = "aqua";
    a[2].style.color = "aqua";
    b.style.backgroundColor = "rgb(68, 54, 54)";
    b.style.color = "aqua";
  }
  count++;
}
