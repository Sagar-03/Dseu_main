import  { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const JobPortal = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const relatedPages = [
    { id: 'overview', title: 'About DSEU: Overview' },
    { id: 'vision', title: 'Vision and Mission' },
    { id: 'messages', title: "VC's Messages & Videos" },
    { id: 'ranking', title: 'DSEU Ranking' },
    { id: 'outreach', title: 'Social Outreach' },
    { id: 'nirf', title: 'DSEU-NIRF' },
    { id: 'naac', title: 'DSEU - NAAC' },
    { id: 'journals', title: 'DSEU e-Journals' },
    { id: 'handbooks', title: 'University Handbooks' }
  ];

  const jobPostings = [
    {
      id: 1,
      title: 'Advt. No. R&P/311/2024 dated 12.12.2024 for various Non-Teaching posts',
      publishedOn: '12.12.2024',
      lastDate: '16.01.2025',
      status: 'Last date extended upto 16.01.2025 and Correction/Update window Open for all application forms'
    },
    {
      id: 2,
      title: 'Advt. No. R&P/310/2024 dated 28.11.2024 for the post of Controller of Examination',
      publishedOn: '28.11.2024',
      lastDate: '04.01.2025',
      status: 'Extension of last date for receipt of applications upto 04.01.2025'
    },
    {
      id: 3,
      title: 'Advt. No. R&P/309/2024 dated 03.10.2024 for the post of Professor in various Departments',
      publishedOn: '03.10.2024',
      lastDate: '16.11.2024',
      status: 'Notice regarding Screening status'
    },
    {
      id: 4,
      title: 'Advt. No. R&P/308/2024 dated 03.10.2024 for the post of Associate Professor in various Departments',
      publishedOn: '03.10.2024',
      lastDate: '16.11.2024',
      status: 'Notice regarding Screening status'
    }
  ];

  const renderContent = () => {
    if (activeSection === 'overview') {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Work with DSEU</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left w-24">Published on</th>
                  <th className="p-3 text-left w-24">Last Date of Submission</th>
                  <th className="p-3 text-left w-20">Details</th>
                  <th className="p-3 text-left w-48">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobPostings.map((job) => (
                  <tr key={job.id} className="border-b hover:bg-blue-50">
                    <td className="p-3">{job.title}</td>
                    <td className="p-3">{job.publishedOn}</td>
                    <td className="p-3">{job.lastDate}</td>
                    <td className="p-3">
                      <button className="text-blue-600 hover:underline">View</button>
                    </td>
                    <td className="p-3 text-sm">{job.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold">{relatedPages.find(page => page.id === activeSection)?.title}</h2>
        <p className="mt-4 text-blue-600">Content for {relatedPages.find(page => page.id === activeSection)?.title}</p>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-blue-700 font-semibold">Related Pages</h2>
        </div>
        <nav className="p-2">
          {relatedPages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActiveSection(page.id)}
              className={`w-full text-left p-2 rounded flex items-center gap-2 transition-colors ${
                activeSection === page.id 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-blue-100'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
              {page.title}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t flex gap-2">
          <button className="text-blue-700 hover:underline text-sm">View Colleges</button>
          <span className="text-gray-300">|</span>
          <button className="text-blue-700 hover:underline text-sm">View Departments</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="text-sm text-gray-500 mb-4">
          You are here: About DSEU
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default JobPortal;