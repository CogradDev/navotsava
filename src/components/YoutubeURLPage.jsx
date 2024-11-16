import React, { useState, useContext } from "react";
import { YouTubeURLContext } from "./YoutubeContext";
import { useNavigate } from "react-router-dom";

const YouTubeURLPage = () => {
  const { youtubeURL, updateYouTubeURL } = useContext(YouTubeURLContext);
  const [inputURL, setInputURL] = useState(youtubeURL);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validateYouTubeURL = (url) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateYouTubeURL(inputURL)) {
      updateYouTubeURL(inputURL);
      setError("");
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect after 2 seconds
    } else {
      setError("Please enter a valid YouTube URL.");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md transition-transform duration-300 hover:shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Set YouTube Live Stream URL
        </h2>
        <div className="mb-4">
          <label htmlFor="youtubeURL" className="block text-gray-700 mb-2">
            YouTube URL
          </label>
          <input
            type="text"
            id="youtubeURL"
            value={inputURL}
            onChange={(e) => {
              setInputURL(e.target.value);
              setError("");
              setSuccess(false);
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              URL saved successfully! Redirecting...
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save URL
        </button>
      </form>
    </div>
  );
};

export default YouTubeURLPage;
