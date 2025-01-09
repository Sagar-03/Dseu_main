import React, { useState, useEffect } from "react";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/notices");
        if (response.ok) {
          const data = await response.json();
          setNotices(data);
        } else {
          alert("Failed to fetch notices!");
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
        alert("An error occurred!");
      }
    };

    fetchNotices();
  }, []);

  const deleteNotice = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/notices/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Notice deleted successfully");
        setNotices(notices.filter((notice) => notice._id !== id));
      } else {
        alert("Failed to delete the notice!");
      }
    } catch (error) {
      console.error("Error deleting notice:", error);
      alert("An error occurred!");
    }
  };
  const fetchNotices = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/notices", {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotices(data);
      } else {
        alert("Failed to fetch notices!");
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
      alert("An error occurred!");
    }
  };
  return (
    <div>
      <h2>Uploaded Notices</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <a
              href={`http://localhost:5000/${notice.filepath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {notice.filename}
            </a>
            <button
              onClick={() => deleteNotice(notice._id)}
              style={{
                marginLeft: "10px",
                color: "red",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
