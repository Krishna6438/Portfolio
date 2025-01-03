import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import logo from '../assets/logo.png';
import { FaSquareTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="Logo" className="w-10" />
                </a>
            </div>

            {/* Social Links */}
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/krishna-sharma123/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/Krishna6438"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Github profile"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/krishna_r_sharma_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaSquareTwitter />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
