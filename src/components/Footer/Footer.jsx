import { Link } from 'react-router-dom';

const Footer = () => {
  const serviceLinks = [
    { label: "Emergency Help", path: "/emergency" },
    { label: "Education Support", path: "/education" },
    { label: "Medical Aid", path: "/medical" },
    { label: "Food Support", path: "/food" }
  ];

  const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Careers", path: "/careers" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-semibold">
            CFBD
          </Link>
          <p className="text-sm mt-2 opacity-80">
            Empowering communities with collective giving.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
          <div>
            <h4 className="font-medium mb-2">Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-rose-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-rose-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm opacity-70">
        <p>© {new Date().getFullYear()} CFBD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
