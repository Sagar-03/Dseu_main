import React, { useState } from "react";

const UploadPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store the JWT token
        setIsAuthenticated(true); // Update authentication state
        alert("Login successful!");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login");
    }
  };

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during upload");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Upload a File</h2>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
