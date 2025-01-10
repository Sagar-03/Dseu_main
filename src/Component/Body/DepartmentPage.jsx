import { useState, useEffect } from "react";
import Faculty from "./Faculty";
import { Link, useLocation } from "react-router-dom";

const DepartmentPage = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState("arabics");

  const departments = [
    { id: 1, name: "Department of Arabic", path: "arabics" },
    { id: 2, name: "Department of Buddhist Studies", path: "buddhist" },
    { id: 3, name: "Department of Germanic & Romance Studies", path: "romance" },
    { id: 4, name: "Department of Hindi", path: "hindi" },
    { id: 5, name: "Department of Library & Information Science", path: "library" },
    { id: 6, name: "Department of Linguistics", path: "linguistics" },
    { id: 7, name: "Department of Modern Indian Languages", path: "indian-languages" },
    { id: 8, name: "Department of Persian", path: "persian" },
    { id: 9, name: "Department of Philosophy", path: "philosophy" },
    { id: 10, name: "Department of Psychology", path: "psychology" },
    { id: 11, name: "Department of Punjabi", path: "punjabi" },
    { id: 12, name: "Department of Sanskrit", path: "sanskrit" },
    { id: 13, name: "Department of Urdu", path: "urdu" },
  ];

  const activeDepartment = departments.find((dept) => dept.path === currentPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname.split("/dept/")[1];
    if (path) {
      setCurrentPage(path);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Sidebar for Desktop */}
        {!isMobile && (
          <aside className="w-64 h-1/2 bg-white shadow-lg rounded-lg p-4 overflow-auto">
            <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Departments</h2>
            <nav className="space-y-2">
              {departments.map((dept) => (
                <div key={dept.id}>
                  <Link to={`/dept/${dept.path}`}>
                    <button
                      onClick={() => setCurrentPage(dept.path)}
                      className={`block w-full text-left p-2 rounded-lg text-sm ${
                        currentPage === dept.path
                          ? "text-[#005CB9] font-bold bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {dept.name}
                    </button>
                  </Link>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile View for Departments */}
          {isMobile && (
            <section>
              <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Departments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <Link to={`/dept/${dept.path}`} key={dept.id}>
                    <button
                      onClick={() => setCurrentPage(dept.path)}
                      className={`block w-full p-4 rounded-lg text-md font-semibold ${
                        currentPage === dept.path ? "text-[#005CB9]" : "text-gray-700"
                      }`}
                    >
                      {dept.name}
                    </button>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Faculty Component */}
          <Faculty
            activeDepartmentName={
              activeDepartment ? activeDepartment.name : "Faculty Members"
            }
          />
        </main>
      </div>
    </div>
  );
};

export default DepartmentPage;
