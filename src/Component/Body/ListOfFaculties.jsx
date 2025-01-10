import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { faChalkboard, faFlask, faCalculator, faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "Faculties of Arts",
    path: "/arabics",
    href: "#",
    icon: faChalkboard,  // Added icon
    imageSrc: "",
    imageAlt: "Faculties of Arts",
  },
  {
    id: 2,
    name: "Faculties of Science",
    path: "/buddhist",
    href: "#",
    icon: faFlask,  // Added icon
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Science",
  },
  {
    id: 3,
    name: "Faculties of Commerce",
    path: "/commerce",
    href: "#",
    icon: faCalculator,  // Added icon
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Commerce",
  },
  {
    id: 4,
    name: "Faculties of Law",
    path: "/law",
    href: "#",
    icon: faBalanceScale,  // Added icon
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Law",
  },
  {
    id: 5,
    name: "Faculties of Engineering",
    path: "/engineering",
    href: "#",
    icon: faChalkboard,  // Added icon (same as Arts, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Engineering",
  },
  {
    id: 6,
    name: "Faculties of Medicine",
    path: "/medicine",
    href: "#",
    icon: faFlask,  // Added icon (same as Science, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Medicine",
  },
  {
    id: 7,
    name: "Faculties of Social Sciences",
    path: "/social-sciences",
    href: "#",
    icon: faBalanceScale,  // Added icon (same as Law, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Social Sciences",
  },
  {
    id: 8,
    name: "Faculties of Business",
    path: "/business",
    href: "#",
    icon: faCalculator,  // Added icon (same as Commerce, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Business",
  },
  {
    id: 9,
    name: "Faculties of Engineering",
    path: "/engineering",
    href: "#",
    icon: faChalkboard,  // Added icon (same as Arts, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Engineering",
  },
  {
    id: 10,
    name: "Faculties of Medicine",
    path: "/medicine",
    href: "#",
    icon: faFlask,  // Added icon (same as Science, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Medicine",
  },
  {
    id: 11,
    name: "Faculties of Social Sciences",
    path: "/social-sciences",
    href: "#",
    icon: faBalanceScale,  // Added icon (same as Law, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Social Sciences",
  },
  {
    id: 12,
    name: "Faculties of Business",
    path: "/business",
    href: "#",
    icon: faCalculator,  // Added icon (same as Commerce, but you can change it)
    imageSrc: "", // Add actual image URL here if available
    imageAlt: "Faculties of Business",
  },
  
];


export default function ListOfFaculties() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    window.scrollTo(0, 0);
    // navigate(`/dept/${path}`);
  };

  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 mb-10">
          List of Faculties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-full"
            >
              {/* Dynamic FontAwesome Icon */}
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon
                  icon={product.icon}
                  className="h-16 w-16 text-blue-500"
                />
              </div>

              {/* Product Details */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  <a href={product.href}>{product.name}</a>
                </h3>
                <p className="text-sm text-gray-500">{product.imageAlt}</p>
              </div>

              {/* Action Button */}
              <Link to={`/dept${product.path}`}>
                <button
                  onClick={() => handleClick(product.path)}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  View Faculty
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}