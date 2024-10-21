import './Navbar.css'

function Navbar() {
    return (
        <div> 
           <div className='navbar-container'>
           <h1>Sample Nav</h1>
            <ul className="nav">
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
           </div>
            
        </div>
    );
}

export default Navbar;