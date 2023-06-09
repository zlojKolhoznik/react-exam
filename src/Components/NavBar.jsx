import '../bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    let path = window.location.pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 position-sticky top-0" style={{zIndex: "1"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Notes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${path==='/' ? 'active' : ''}`} onClick={props.reload} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${path==='/favorites' ? 'active' : ''}`} onClick={props.reload} to="/favorites">Favorite notes</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={props.logOut}>Log out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
