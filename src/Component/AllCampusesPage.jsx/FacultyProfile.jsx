import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import faculty from "../../assets/teacher.png";

const FacultyProfile = () => {
  const currentPath = window.location.pathname;

  // Define different profile data based on the URL
  const profileData = {
    "/BPIBS": {
      name: "Prof. Girish Kumar",
      designation: "Professor in Computer Applications (MCA)",
      education: [
        "Ph.D.( Applications of Graph Theory and Queueing Models in Distributed Operating System Architecture) awarded in 2005.",
        "MCA from Gurukul Kangri Vishwavidyalaya in 1996.",
        "M.Sc.( Physics ) from Gurukul Kangri Vishwavidyalaya in 1993.",
        
      ],
    },
    "/vivekvihar": {
      name: "Prof. Vivek Kumar",
      designation: "Associate Professor in Computer Science",
      education: [
        "Ph.D. in Computer Science and Engineering.",
        "M.Tech. from IIT Delhi.",
        "B.Tech. in Computer Science from DCE."
      ],
    },
    "/Mayurvihar": {
      name: "Prof. Ankit Agarwal",
      designation: "Assistant Professor in Information Technology",
      education: [
        "Ph.D. in Information Security.",
        "M.Tech. in Computer Science from BITS Pilani.",
        "B.Tech. in Information Technology from IGDTUW."
      ],
    },
    "/shakarpur2": {
      name: "Prof. Priya Gupta",
      designation: "Assistant Professor in Data Science",
      education: [
        "Ph.D. in Data Science and Machine Learning.",
        "M.Sc. in Data Analytics from JNU.",
        "B.Sc. in Computer Science from DU."
      ],
    },
  };

  const profile = profileData[currentPath] || profileData["/BPIBS"]; // Default to '/BPIBS' if path doesn't match

  return (
    <div className="max-w-5xl bg-gray-100 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-60 h-60 bg-white rounded-lg shadow-sm p-1">
            <img
              src={faculty}
              alt="Faculty profile photo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-grow space-y-2 my-6">
          <ProfileItem text={profile.designation} />
          {profile.education.map((item, index) => (
            <ProfileItem key={index} text={item} />
          ))}
        </div>
      </div>
      <div className="mx-6 mt-2">
        <div className="inline-block px-5 py-2 bg-amber-500 text-white rounded-xl" >
          {profile.name}
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ text }) => (
  <div className="text-gray-800">
    <p className="flex items-start">
      <FontAwesomeIcon icon={faAnglesRight} className="text-gray-600 mr-2 mt-1.5" />
      <span>{text}</span>
    </p>
  </div>
);

export default FacultyProfile;
