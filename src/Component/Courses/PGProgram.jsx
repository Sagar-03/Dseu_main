import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const CourseDetailsCard = ({ program, onClose }) => {
  const navigate = useNavigate();
  const pdfUrl = "/Admission_Brochure_PG__2024_2_6.pdf";

  const handleViewStructure = () => {
    onClose();
    navigate(`/course-structure/${program.code}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-blue-900 text-2xl font-bold mb-1">{program.title}</h1>
          <p className="text-blue-900 text-lg">Program Code: {program.code}</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Campuses</h2>
            <p>{program.campus}</p>
          </div>
          <div>
            <h2 className="text-black text-lg font-medium mb-2">Information Brochure</h2>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm cursor-pointer hover:underline"
            >
              📄 Click here to view the Admission Brochure
            </a>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Duration</h2>
            <p>{program.duration}</p>
          </div>

          <div>
            <h2 className="text-black text-lg font-medium mb-2">Program Fee</h2>
            <p>{program.fee}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={handleViewStructure}
          className="bg-orange-300 text-blue-900 py-2 px-4 rounded-md font-medium hover:bg-orange-400 transition-colors duration-200"
        >
          View Course Structure
        </button>
        <button className="bg-blue-900 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200">
          Admission Not Open
        </button>
      </div>
    </div>
  );
};

const PGPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      "title": "MBA International Business Management",
      "code": "C03",
      "campus": "DSEU PUSA-II Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "PG Diploma in Cyber Law (1 year program)",
      "code": "E01",
      "campus": "Ambedkar DSEU Shakarpur-I Campus",
      "duration": "1 Year",
      "fee": "₹25,000 per semester"
    },
    {
      "title": "MBA Entrepreneurship",
      "code": "E02",
      "campus": "Bhai Parmanand DSEU Shakarpur-II",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "Master of Computer Application",
      "code": "E02",
      "campus": "Bhai Parmanand DSEU Shakarpur-II",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MBA Data Analytics",
      "code": "E02",
      "campus": "Bhai Parmanand DSEU Shakarpur-II",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MBA Retail Management",
      "code": "E04",
      "campus": "DSEU Vivek Vihar Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MTech Tool Engineering",
      "code": "N05",
      "campus": "DSEU Wazirpur-I Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "PG Diploma in Precision Engineering (1 year program)",
      "code": "N05",
      "campus": "DSEU Wazirpur-I Campus",
      "duration": "1 Year",
      "fee": "₹50,000 per semester"
    },
    {
      "title": "MBA Finance",
      "code": "W02",
      "campus": "DSEU Dwarka Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MBA Healthcare Facility Management",
      "code": "S01",
      "campus": "CHAMPS Okhla-II",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MTech Computer Science Engineering - AI & ML",
      "code": "S02",
      "campus": "DSEU Okhla-I Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MTech Electronics & Communication Engineering - IoT",
      "code": "S02",
      "campus": "DSEU Okhla-I Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MTech Mechanical Engineering",
      "code": "S02",
      "campus": "DSEU Okhla-I Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "MBA Management Information System",
      "code": "S03",
      "campus": "DSEU Okhla-II Campus",
      "duration": "2 Years",
      "fee": "₹87,000 per semester"
    },
    {
      "title": "B.Lib. (1 year program)",
      "code": "S04",
      "campus": "Meerabai DSEU Maharani Bagh Campus",
      "duration": "1 Year",
      "fee": "₹50,000 per semester"
    },
    {
      "title": "M.Sc Medical Laboratory Sciences",
      "code": "W02",
      "campus": "DSEU Dwarka Campus",
      "duration": "2 Years",
      "fee": "₹50,000 per semester"
    }
  ]
  

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">PG Programs</h1>

        <div className="space-y-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-500 bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setSelectedProgram(program)}
            >
              <p className="text-lg font-semibold text-gray-800">{program.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <CourseDetailsCard program={selectedProgram} onClose={() => setSelectedProgram(null)} />
        </div>
      )}
    </div>
  );
};

export default PGPrograms;
