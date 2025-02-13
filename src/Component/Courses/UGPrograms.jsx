import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const CourseDetailsCard = ({ program, onClose }) => {
  const navigate = useNavigate();
  const pdfUrl = "/Admission_Brochure_Degree__2024-25.pdf"; // PDF file link

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

const UGPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      "title": "B.S. Automotive Retail Management",
      "code": "114500",
      "campus": "BPIBS DSEU Campus-II",
      "duration": "4 Years",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Banking, Financial Services and Insurance",
      "code": "114501",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. E-Commerce Operations and Digital Application",
      "code": "114502",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Retail Management",
      "code": "114503",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Supply Chain Management",
      "code": "114504",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Hospitality Management",
      "code": "114505",
      "fee": "87000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Community Organisation and Development Practice",
      "code": "114506",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Digital Marketing and Data Analytics",
      "code": "114507",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Computer Applications",
      "code": "114508",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.A. (Hons.) Spanish",
      "code": "114509",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Beauty Therapy",
      "code": "114510",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.Sc. (Hons.) Mathematics",
      "code": "114511",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Office Management",
      "code": "114512",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.A. (Hons) Fine Arts",
      "code": "114513",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Digital Media Design",
      "code": "114514",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Business Process Management",
      "code": "114515",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Fashion Design",
      "code": "114516",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Interior Design",
      "code": "114517",
      "fee": "25000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Hospital Facility Management",
      "code": "114518",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Optometry",
      "code": "114519",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Entrepreneurship",
      "code": "114520",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Dialysis Technology",
      "code": "114521",
      "fee": "87000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Emergency Medical Technology",
      "code": "114522",
      "fee": "87000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Medical Laboratory Sciences",
      "code": "114523",
      "fee": "50000 Tuition Fees per Semester"
    },
    {
      "title": "B.S. Facility Management",
      "code": "114524",
      "fee": "50000 Tuition Fees per Semester"
    }
  ]
  

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">UG Programs</h1>

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

export default UGPrograms;
