// Header.js
import './Header.css';
 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className='header-content'>
            <div className="text-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                {/* Use Link component to navigate to /reserve */}
                <Link to="/reserve">
                <button>Reserve a Table</button>
                </Link>
            </div>
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" alt="food image"></img>
        </div>
    </header>
  );
}

export default Header;
