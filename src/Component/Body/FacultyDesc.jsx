import React, { useState } from 'react';
import { Search, Mail, CheckCircle, Users, FileText, Layout, ExternalLink } from 'lucide-react';
import FacultyPP from '../../assets/FacultyPP.jpeg';
const FacultyDesc = () => {
  const facultyData = [
  {
    id: 1,
    name: "Abhijit Guha",
    education: "Ph.D., University of Cambridge",
    position: "Professor",
    department: "Mechanical Engineering",
    email: "a.guha@mech.iitkgp.ac.in",
    image: {FacultyPP},
    researchAreas: [
      "Computational Solid Mechanics",
      "Energy Storage",
      "Lithium-ion battery modelling",
      "Flow through deformable confinements"
    ],
    researchStatement: "I work on the mathematical modelling of various situations involving fluid mechanics and solid mechanics, coupled occasionally with bits of electrochemistry. Currently, the focus of my work is investigating issues of diffusion, growth and stress in silicon anode particles of lithium-ion batteries and energy storage materials involving chemomechanical modelling within the broad domain of computational solid mechanics.",
    researchVisuals: [
      "Fluid Mechanics",
      "Thermal Science",
      "CFD",
      "Non-equilibrium Condensation",
      "Tesla Disc Turbine",
      "Bio-inspired Heat Exchanger"
    ]
  },
  {
    id: 2,
    name: "Aditya Bandopadhyay",
    education: "Ph.D., Indian Institute of Science",
    position: "Associate Professor",
    department: "Mechanical Engineering",
    email: "aditya.b@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Microfluidics",
      "Electrokinetic Transport",
      "Lab-on-a-chip Devices",
      "Biomedical Engineering"
    ],
    researchStatement: "My research focuses on developing novel microfluidic platforms for biomedical applications. I specialize in electrokinetic transport phenomena and their applications in lab-on-a-chip devices. Current projects involve creating innovative solutions for point-of-care diagnostics and drug delivery systems.",
    researchVisuals: [
      "Microfluidic Devices",
      "Electrokinetic Flow",
      "Bio-chip Design",
      "Particle Transport"
    ]
  },
  {
    id: 3,
    name: "Aghna Mukherjee",
    education: "Ph.D., Massachusetts Institute of Technology",
    position: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "aghna@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Robotics and Control",
      "Autonomous Systems",
      "Machine Learning in Robotics",
      "Human-Robot Interaction"
    ],
    researchStatement: "My research lies at the intersection of robotics, control theory, and artificial intelligence. I develop algorithms for autonomous systems with a focus on human-robot interaction and adaptive control strategies. Current work includes developing robust control systems for collaborative robots in manufacturing settings.",
    researchVisuals: [
      "Robot Control",
      "Autonomous Navigation",
      "Human-Robot Collaboration",
      "Adaptive Systems"
    ]
  },
  {
    id: 4,
    name: "Ajay Muljibhai Sidpara",
    education: "Ph.D., IIT Kanpur",
    position: "Professor",
    department: "Mechanical Engineering",
    email: "ajayms@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Manufacturing Processes",
      "Precision Engineering",
      "Surface Metrology",
      "Advanced Materials Processing"
    ],
    researchStatement: "I specialize in advanced manufacturing processes with a focus on precision engineering and surface metrology. My research involves developing novel techniques for ultra-precision machining and surface characterization. Current projects include innovative approaches to nanoscale manufacturing and smart manufacturing systems.",
    researchVisuals: [
      "Precision Manufacturing",
      "Surface Analysis",
      "Material Processing",
      "Smart Manufacturing"
    ]
  },
  {
    id: 5,
    name: "Ambatipudi Mani Kalyani",
    education: "Ph.D., Technical University of Munich",
    position: "Associate Professor",
    department: "Mechanical Engineering",
    email: "kalyani@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Thermal Systems Engineering",
      "Renewable Energy",
      "Heat Transfer",
      "Energy Efficiency"
    ],
    researchStatement: "My research focuses on thermal systems engineering and renewable energy technologies. I work on developing efficient heat transfer systems and improving energy utilization in industrial processes. Current research includes solar thermal systems and waste heat recovery applications.",
    researchVisuals: [
      "Thermal Systems",
      "Solar Energy",
      "Heat Exchangers",
      "Energy Systems"
    ]
  },
  {
    id: 6,
    name: "Amiya Ranjan Mohanty",
    education: "Ph.D., University of Michigan",
    position: "Professor",
    department: "Mechanical Engineering",
    email: "amohanty@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Acoustics and Vibration",
      "Noise Control",
      "Structural Dynamics",
      "Sound Quality Engineering"
    ],
    researchStatement: "I specialize in acoustics, vibration, and noise control engineering. My research involves developing advanced methods for noise reduction in mechanical systems and improving sound quality in various applications. Current work focuses on active noise control and structural health monitoring.",
    researchVisuals: [
      "Acoustic Analysis",
      "Vibration Testing",
      "Noise Control",
      "Structural Dynamics"
    ]
  },
  {
    id: 7,
    name: "Anandaroop Bhattacharya",
    education: "Ph.D., Stanford University",
    position: "Associate Professor",
    department: "Mechanical Engineering",
    email: "anandaroop@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Dynamics and Control",
      "Mechatronics",
      "Smart Materials",
      "Sensor Systems"
    ],
    researchStatement: "My research combines dynamics, control, and mechatronics with a focus on smart material systems. I develop innovative solutions for sensing and actuation in mechanical systems. Current projects include the development of smart material-based sensors and adaptive control systems.",
    researchVisuals: [
      "Control Systems",
      "Smart Materials",
      "Mechatronic Design",
      "Sensor Networks"
    ]
  },
  {
    id: 8,
    name: "Anirvan Dasgupta",
    education: "Ph.D., University of California Berkeley",
    position: "Professor",
    department: "Mechanical Engineering",
    email: "anirvan@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Computational Mechanics",
      "Finite Element Analysis",
      "Multiscale Modeling",
      "Material Science"
    ],
    researchStatement: "I work in computational mechanics with emphasis on multiscale modeling and finite element analysis. My research focuses on developing advanced computational methods for analyzing complex mechanical systems. Current work includes multi-physics simulations and materials modeling.",
    researchVisuals: [
      "FEA Analysis",
      "Multiscale Models",
      "Material Simulation",
      "Computational Results"
    ]
  },
  {
    id: 9,
    name: "Archana Arbind",
    education: "Ph.D., ETH Zurich",
    position: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "archana@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Biomechanics",
      "Medical Devices",
      "Tissue Engineering",
      "Rehabilitation Engineering"
    ],
    researchStatement: "My research focuses on biomechanics and medical device development. I work on creating innovative solutions for healthcare applications, particularly in tissue engineering and rehabilitation. Current projects include the development of novel prosthetic devices and tissue scaffolds.",
    researchVisuals: [
      "Biomechanical Systems",
      "Medical Devices",
      "Tissue Engineering",
      "Rehabilitation Technology"
    ]
  },
  {
    id: 10,
    name: "Arun Kumar Samantaray",
    education: "Ph.D., University of Tokyo",
    position: "Professor",
    department: "Mechanical Engineering",
    email: "arun@mech.iitkgp.ac.in",
    image: "/api/placeholder/192/192",
    researchAreas: [
      "Tribology",
      "Surface Engineering",
      "Wear Analysis",
      "Lubrication Systems"
    ],
    researchStatement: "I specialize in tribology and surface engineering, focusing on understanding and improving the wear behavior of mechanical systems. My research involves developing advanced lubrication systems and surface treatments. Current work includes nano-tribology and smart lubricant development.",
    researchVisuals: [
      "Wear Analysis",
      "Surface Treatment",
      "Lubrication Systems",
      "Tribological Testing"
    ]
  }
];



  // States
  const [selectedFaculty, setSelectedFaculty] = useState(facultyData[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState('statement');

  const filteredFaculty = facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-full lg:w-80 p-6 border-r border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Faculty</h1>
        <div className="h-px bg-gray-200 w-16 mb-6"></div>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for names.."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <nav>
          <ul className="space-y-4">
            {filteredFaculty.map((faculty) => (
              <li 
                key={faculty.id}
                onClick={() => setSelectedFaculty(faculty)}
                className={`cursor-pointer transition-colors ${
                  faculty.id === selectedFaculty.id 
                    ? "text-orange-600 font-medium" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {faculty.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Profile Section */}
        <div className="bg-yellow-50/80 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="w-48 h-48 shrink-0">
                <img
                  src={selectedFaculty.image}
                  alt={`${selectedFaculty.name} profile`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{selectedFaculty.name}</h2>
                    <p className="text-gray-700 mb-1">{selectedFaculty.education}</p>
                    <p className="italic text-gray-700 mb-1">{selectedFaculty.position}</p>
                    <p className="font-medium text-gray-900 mb-4">{selectedFaculty.department}</p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Mail size={16} />
                      <a href={`mailto:${selectedFaculty.email}`} className="hover:underline">
                        {selectedFaculty.email}
                      </a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-4 md:mt-0 space-y-2">
                    <a href="#" className="flex items-center gap-2 text-purple-700 hover:underline">
                      <ExternalLink size={16} />
                      Awards and Accolades
                    </a>
                    <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
                      <span className="text-orange-500">🌐</span>
                      Personal Webpage
                    </a>
                    <a href="#" className="flex items-center gap-2 text-orange-700 hover:underline">
                      <span className="text-orange-500">📄</span>
                      Bio Sketch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="px-8 py-6">
          <h2 className="text-xl font-bold mb-4">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {selectedFaculty.researchAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-blue-600" size={16} />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setActiveTab('statement')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeTab === 'statement' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText size={20} />
              Research Statement
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeTab === 'publications' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Layout size={20} />
              Selected Publications
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeTab === 'projects' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText size={20} />
              Current Projects
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeTab === 'members' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Users size={20} />
              Group Members
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {activeTab === 'statement' && (
              <>
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedFaculty.researchStatement}
                  </p>
                </div>
                
                {/* Research Visualizations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {selectedFaculty.researchVisuals.map((title, index) => (
                    <div 
                      key={index} 
                      className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative group hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={`/api/placeholder/400/300`}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === 'publications' && (
              <div className="text-gray-700">
                Selected publications will be displayed here...
              </div>
            )}
            {activeTab === 'projects' && (
              <div className="text-gray-700">
                Current projects will be displayed here...
              </div>
            )}
            {activeTab === 'members' && (
              <div className="text-gray-700">
                Group members will be displayed here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDesc;