import './Navbar.css';
function Navbar () {
    return (
        <nav>
            <ul className='navbar'>
                <li className='nav-item'><a href=''>Home</a></li>
                <li className='nav-item'><a href=''>About</a></li>
                <li className='nav-item'><a href=''>Projects</a></li>
                <li className='nav-item'><a href=''>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;