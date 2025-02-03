import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import faculty from "../../assets/teacher.png"
const FacultyProfile = () => {
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
        <div className="flex-grow space-y-2">
          <ProfileItem text="Professor in Computer Applications (MCA)" />
          <ProfileItem text="Ph.D.( Applications of Graph Theory and Queueing Models in Distributed Operating System Architecture) awarded in 2005." />
          <ProfileItem text="MCA from Gurukul Kangri Vishwavidyalaya in 1996." />
          <ProfileItem text="M.Sc.( Physics ) from Gurukul kangri Vishwavidyalaya in 1993." />
          <ProfileItem text="B.Sc.( PCM ) with second Position in University in 1990 from Gurukul Kangri Vishwavidyalaya." />
        </div>
      </div>
      <div className="mt-[-16px]">
        <div className="inline-block px-5 py-2 bg-amber-500 text-white rounded-xl mb-4">
          Prof. Girish Kumar Sharma
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
