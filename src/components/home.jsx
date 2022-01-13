
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to my SUPER STORE</h1>
            <h3>Check out our amazing catalog</h3>
            <Link className="btn btn-lg btn-primary" to="/catalog">
                View Catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </Link>
        </div>
    );
};

export default Home;