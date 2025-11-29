import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-400">hello@clearmail.com</p>
          <p className="text-gray-400">+91 98765 43210</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      <p className="text-gray-500 text-center mt-6">
        © {new Date().getFullYear()} ClearMail — All Rights Reserved.
      </p>
    </footer>
  );
}
