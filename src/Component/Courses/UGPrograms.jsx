import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { code } from "framer-motion/client";

const CourseDetailsCard = ({ program, onClose }) => {
  const navigate = useNavigate();

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
          <p className="text-blue-900 text-lg">Program Code {program.code}</p>
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

          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">Institute</h2>
            <p>{program.institute}</p>
            <p className="text-blue-600 text-sm cursor-pointer hover:underline">
              [Click Here] to visit this institute's website
            </p>
          </div>

          <div>
            <h2 className="text-black text-lg font-medium mb-2">Eligibility</h2>
            <p>{program.eligibility}</p>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-black text-lg font-medium mb-2">University</h2>
            <p>{program.university}</p>
          </div>

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
      title: "B.S. Automative Retail Management",
      code: "114500",
      campus: "BPIBS DSEU Campus-II",
      institute: "DSEU University India",
      university: "DSEU University India",
      eligibility: " XII (senior secondary) Grade Pass or (ii) 10th+2-Yr NTC/NAC/CITS  (iii) 40 credits of NSQF level 4.0.",
      duration: "4 Years",
      fee : " 25000 Tuition Fees per Semester",
    },
    // {
    //   title: "BBA (Retail Mgmt)",
    //   code: "114500",
    //   campus: "BPIBS DSEU Campus-II",
    //   institute: "DSEU University India",
    //   university: "DSEU University India",
    //   eligibility: "X & XII (min 50%) with min. 60% in PCM",
    //   duration: "4 Years",
    //   fee: "AED 58000 Or USD 15895 per year",
    // },
    // {
    //   title: "B.Sc (Data Analytics)",
    //   code: "114500",
    //   campus: "BPIBS DSEU Campus-II",
    //   institute: "DSEU University India",
    //   university: "DSEU University India",
    //   eligibility: "X & XII (min 50%) with min. 60% in PCM",
    //   duration: "4 Years",
    //   fee: "AED 58000 Or USD 15895 per year",
    // },
    // {
    //   title: "BBA (Retail Mgmt)",
    //   code: "114500",
    //   campus: "BPIBS DSEU Campus-II",
    //   institute: "DSEU University India",
    //   university: "DSEU University India",
    //   eligibility: "X & XII (min 50%) with min. 60% in PCM",
    //   duration: "4 Years",
    //   fee: "AED 58000 Or USD 15895 per year",
    // },
    // {
    //   title: "B.Sc (Data Analytics)",
    //   code: "114500",
    //   campus: "BPIBS DSEU Campus-II",
    //   institute: "DSEU University India",
    //   university: "DSEU University India",
    //   eligibility: "X & XII (min 50%) with min. 60% in PCM",
    //   duration: "4 Years",
    //   fee: "AED 58000 Or USD 15895 per year",
    // },
    // {
    //   title: "BBA (Retail Mgmt)",
    //   code: "114500",
    //   campus: "BPIBS DSEU Campus-II",
    //   institute: "DSEU University India",
    //   university: "DSEU University India",
    //   eligibility: "X & XII (min 50%) with min. 60% in PCM",
    //   duration: "4 Years",
    //   fee: "AED 58000 Or USD 15895 per year",
    // },
    // {
    //   title: "BBA (Retail Mgmt)",
    //   code: "114500",
    //   campus: "BPIBS DSEU Campus-II",
    //   institute: "DSEU University India",
    //   university: "DSEU University India",
    //   eligibility: "X & XII (min 50%) with min. 60% in PCM",
    //   duration: "4 Years",
    //   fee: "AED 58000 Or USD 15895 per year",
    // },
    {
      title:"B.S. Banking, Financial Services and Insurance",
      code:"114501",

    },
    {
      title:"B.S. E-Commerce Operations and Digital Application",
      code:""
    },
    {
      title:"B.S. Retail Management",
      code:""
    },
    {
      title:"B.S. Supply Chain Management",
      code:""
    },
    {
      title:"B.S. Hospitality Management",
      code:""
    },
    {
      title:"B.S. Community Organisation and Development Practice",
      code:""
    },
    
    {
      title:"B.S. Digital marketing and DataAnalytics",
      code:""
    },

     {
      title:"B.S. Computer Applications",
      code:""
    }, {
      title:"B.A. (Hons.) Spanish",
      code:""
    },
    {
      title:"B.S. Beauty Therapy",
      code:""
    },
    {
      title:"B.Sc. (Hons.) Mathematics",
      code:""
    },
    {
      title:"B.S. Office Management",
      code:""
    },

    {
      title:"B.A. (Hons) Fine Arts",
      code:""
    },

    {
      title:"B.S. Digital Media Design",
      code:""
    }, {
      title:"B.S. Business Process Management ",
      code:""
    },
    {
      title:"B.S. Fashion Design ",
      code:""
    },
    {
      title:"B.S. Interior Design",
      code:""
    },

    {
      title:"B.S. Hospital Facility Management",
      code:""
    },
    {
      title:"B.S. Optometry ",
      code:""
    },
    {
      title:"B.S. Entrepreneurship",
      code:""
    }, {
      title:"B.S. Dialysis Technology",
      code:""
    },
    {
      title:"B.S. Emergency Medical Technology",
      code:""
    },
    {
      title:"B.S. Medical Laboratory Sciences",
      code:""
    },
    {
      title:"B.S. Facility Management ",
      code:""
    },

    
  ];

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
          <CourseDetailsCard
            program={selectedProgram}
            onClose={() => setSelectedProgram(null)}
          />
        </div>
      )}
    </div>
  );
};

export default UGPrograms;
