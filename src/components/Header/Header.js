import './Header.css';
import {Link} from 'react-router-dom';
function Header(){
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <a className="navbar-brand" href="#"><i className="fa fa-university" aria-hidden="true"></i></a>             
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto lt">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"><Link to="Aboutlibrary">About Library</Link></a>
              </li>
              <li className="nav-item active">
                  <a className="nav-link" href="#">Rules & Regulations</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Price Card</a>
                </li>
               
            </ul>
            <div>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0 submit-register" type="submit"><Link to="/">Sign Up</Link></button>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="Login">Login</Link></button>
              </form>
          </div>
          </div>
        </nav>


    
    </div>)
}
export default Header;