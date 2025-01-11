import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Menu, ChevronDown, X } from 'lucide-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Vector from '../../assets/DSEULogo/Vector.svg';

const handleLocationClick = (e) => {
  e.preventDefault();
  window.open('https://www.google.com/maps/place/Delhi+Skill+and+Entrepreneurship+University/@28.5824457,77.0600919,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b1939555555:0x5cb3da8201a9355b!8m2!3d28.5824457!4d77.0626668!16s%2Fg%2F11jyk9d7qs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D', '_blank');
};



const navItems = [
  {
      name: 'Home',
      path: '/',
      isHome: true,
  },
  {
      name: 'About Us',
      path: '/about-us',
      dropdownItems: [
          {
              name: 'DSEU Memoir',
              path: '/about-us/DSEU-Memoir',
              dropdownItems: [
                  { name: 'Convocation', path: '/about-us/DSEU-Memoir/Convocation' },
                  { name: 'Former VCs', path: '/about-us/DSEU-Memoir/Former-VCs' },
              ],
          },
          { name: 'University Calendar', path: '/about-us/University-Calendar' },
          { name: 'Vision and Mission', path: '/about-us/Vision-and-Mission' },
          {
              name: 'Annual Report',
              path: '/about-us/Annual-Report',
              dropdownItems: [
                  { name: 'Year-wise', path: '/about-us/Annual-Report/Year-wise' },
              ],
          },
          { name: 'Governing Bodies', path: '/about-us/Governing-Bodies' },
          { name: 'Handbook (Brochure)', path: '/about-us/Handbook' },
          {
              name: 'About the College',
              path: '/about-us/About-the-College',
              dropdownItems: [
                  { name: 'Disabled Friendliness', path: '/about-us/About-the-College/Disabled-Friendliness' },
                  { name: 'Green Policy', path: '/about-us/About-the-College/Green-Policy' },
                  { name: 'E-Governance', path: '/about-us/About-the-College/E-Governance' },
              ],
          },
          { name: 'Policy', path: '/about-us/Policy' },
      ],
  },
  {
      name: 'Academics',
      path: '/academics',
      dropdownItems: [
          { name: 'Programs', path: '/academics/programs' },
          { name: 'Departments', path: '/academics/departments' },
          { name: 'Faculty', path: '/academics/faculty' },
      ],
  },
  {
      name: 'Campuses',
      path: '/campus',
      dropdownItems: [
          { name: 'North', path: '/campus/north' },
          { name: 'South', path: '/campus/south' },
          { name: 'East', path: '/campus/east' },
          { name: 'West', path: '/campus/west' },
      ],
  },
  {
      name: 'Courses',
      path: '/courses',
      dropdownItems: [
          { name: 'Under Graduate', path: '/Courses/UG' },
          { name: 'Post Graduate', path: '/Courses/PG' },
          { name: 'Diploma', path: '/Courses/Diploma' },
      ],
  },
  {
      name: 'Admission',
      path: '/admission',
      dropdownItems: [
          { name: 'Facilities', path: '/admission/facilities' },
          { name: 'Partners', path: '/admission/partners' },
          { name: 'Events', path: '/admission/events' },
      ],
  },
  {
      name: 'Administration',
      path: '/administration',
      dropdownItems: [
          { name: 'Administrative', path: '/administration/administrative' },
          { name: 'Events', path: '/administration/events' },
          { name: 'Calendar', path: '/administration/calendar' },
      ],
  },
  {
      name: 'Amenities',
      path: '/amenities',
      dropdownItems: [
          { name: 'Awards', path: '/amenities/awards' },
          { name: 'Honors', path: '/amenities/honors' },
          { name: 'Rankings', path: '/amenities/rankings' },
      ],
  },
  {
      name: 'Alumni',
      path: '/alumni',
  },
  {
      name: 'Entrepreneurship',
      path: '/entrepreneurship',
      dropdownItems: [
          { name: 'About', path: '/entrepreneurship/about' },
          { name: 'Leadership', path: '/entrepreneurship/leadership' },
          { name: 'Contact', path: '/entrepreneurship/contact' },
      ],
  },
];

const headings = [
  {
    title: "Delhi Skill and Entrepreneurship University",
    subtitle: "Govt. of NCT of Delhi",
  },
  {
    title: "दिल्ली कौशल एवं उद्यमिता विश्वविद्यालय",
    subtitle: "राष्ट्रीय राजधानी क्षेत्र दिल्ली",
  },
  {
    title: "Crafting Excellence",
    subtitle: "Skills • Innovation • Growth",
  },
];


const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        <div className="bg-white rounded-2xl shadow-2xl">
          <div className="flex items-center p-4 border-b">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-1 px-4 py-2 text-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResponsiveHeader = () => {
  const navigate = useNavigate(); // Added missing useNavigate hook
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState([]);
  const [currentHeading, setCurrentHeading] = useState(0);

  const handleHomeRedirect = () => {
    navigate('/');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Desktop Header */}
      <div className="hidden md:block bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div onClick={handleHomeRedirect} className="flex-shrink-0 cursor-pointer">
              <img src={Vector} alt="DSEU Logo" className="h-28" />
            </div>
            <div className="overflow-hidden cursor-pointer" onClick={handleHomeRedirect}>
              <motion.div
                key={currentHeading}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="py-1"
              >
                <div
                  className={`text-2xl font-bold ${
                    headings[currentHeading]?.title === "Crafting Excellence" ? 'font-pacifico' : 'font-inter'
                  }`}
                  style={{ color: '#005CB9' }}
                >
                  {headings[currentHeading]?.title}
                </div>
                <div
                  className={`text-lg font-medium -mt-1 ${
                    headings[currentHeading]?.title === "Crafting Excellence" ? 'font-pacifico' : 'font-inter'
                  }`}
                  style={{ color: '#FF9300' }}
                >
                  {headings[currentHeading]?.subtitle}
                </div>
              </motion.div>
            </div>
          </div>
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            onClick={handleLocationClick}
          >
            <FaMapMarkerAlt className="text-4xl text-orange-500" />
            <div>
              <div className="font-medium font-inter">
                Delhi Skill and Entrepreneurship University
              </div>
              <div className="text-gray-600">
                Sector-9, Dwarka New Delhi-110077
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-md rounded-b-3xl">
        <div className="px-4 py-3 flex justify-between items-center">
          <div onClick={handleHomeRedirect} className="flex items-center space-x-2 cursor-pointer">
            <img src={Vector} alt="DSEU Logo" className="h-16" />
            <motion.div
              key={currentHeading}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="py-1"
            >
              <div
                className={`text-2xl font-bold ${
                  headings[currentHeading]?.title === "Crafting Excellence" ? 'font-pacifico' : 'font-inter'
                }`}
                style={{ color: '#005CB9' }}
              >
                {headings[currentHeading]?.title}
              </div>
              <div
                className={`text-lg font-medium -mt-1 ${
                  headings[currentHeading]?.title === "Crafting Excellence" ? 'font-pacifico' : 'font-inter'
                }`}
                style={{ color: '#FF9300' }}
              >
                {headings[currentHeading]?.subtitle}
              </div>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={handleLocationClick} className="text-orange-500">
              <FaMapMarkerAlt className="h-6 w-6" />
            </button>
            <button onClick={() => setIsSearchOpen(true)} className="text-blue-600">
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-3xl">
          <nav className="px-4 py-2">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block text-lg font-medium text-[#005CB9] py-2"
                    onClick={handleMobileMenuClick}
                  >
                    {item.name}
                    {item.dropdownItems && <ChevronDown className="ml-2 inline-block" />}
                  </Link>
                  {item.dropdownItems && (
                    <div className="pl-4">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-sm text-gray-700 py-2"
                          onClick={handleMobileMenuClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block bg-blue-100 shadow-lg shadow-blue-500/50 rounded-3xl w-[96%] mx-auto my-4">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-7 ">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="group inline-flex items-center text-base font-medium text-[#005CB9]"
                  >
                    {item.name}
                    {item.dropdownItems && <ChevronDown className="ml-0.5 h-3 w-3" />}
                  </Link>
                  {item.dropdownItems && openDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-[#005CB9] hover:text-blue-900 p-4"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default ResponsiveHeader;