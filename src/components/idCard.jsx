import React, { useState, useRef, useEffect } from "react";
import "./idCard.css";
import Webcam from "react-webcam";
// import logo from "../..//assets/logo-url.png";
import logo from "../assets/logo-url.png";
import qr from "../assets/Invitation_QR.png";
import html2canvas from "html2canvas";
import axios from "axios";
// import { uploadImageToCloudinary } from './utils/cloudinary.js';

const downloadAsJPG = () => {
  const node = document.getElementById("id-card-to-download");

  if (!node) {
    console.error(
      "Element not found. Ensure the element is properly rendered before conversion."
    );
    return;
  }

  html2canvas(node, {
    scale: 2, // Set scale to override DPR, where 2 represents 2x the normal resolution
  })
    .then((canvas) => {
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      link.download = "id-card.jpg";
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error("Oops, something went wrong while generating JPEG!", error);
    });
};

const Appy = () => {
  const [name, setName] = useState("");
  const [jnv, setJnv] = useState("");
  const [batch, setBatch] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [photo, setPhoto] = useState(
    "data:image/png;base64,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"
  );
  const [useWebcam, setUseWebcam] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [row, setRow] = useState("");
  const [serial, setSerial] = useState("");
  const [timing, setTiming] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const [selectedJNV, setSelectedJNV] = useState("");
  const [division, setDivision] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [foodTiming, setFoodTiming] = useState("");
  const [otherJnv, setOtherJnv] = useState("");
  const webcamRef = useRef(null);
  const generateButtonRef = useRef(null);

  const divisions = {
    Agra: ["Agra", "Mathura", "Firozabad", "Mainpuri"],
    Aligarh: ["Aligarh", "Etah", "Hathras", "Kasganj"],
    Ayodhya: [
      "Faizabad",
      "Ambedakar Nagar",
      "Sultanpur",
      "Amethi",
      "Barabanki",
    ],
    Azamgarh: ["Azamgarh", "Ballia", "Mau"],
    Bareilly: ["Bareilly", "Badaun", "Pilibhit", "Shahjahanpur"],
    Basti: ["Basti", "Siddharth Nagar", "Santkabir Nagar"],
    Chitrakoot: ["Banda", "Chitrakoot", "Hamirpur", "Mahoba"],
    Devipatan: ["Balrampur", "Gonda", "Bharaich", "Shravasti"],
    Gorakhpur: ["Gorakhpur", "Deoria", "Kushinagar", "Maharajganj"],
    Jhansi: ["Jhansi", "Jalaun", "Lalitpur"],
    Kanpur: [
      "Kanpur Nagar",
      "Kanpur Dehat",
      "Farrukhabad",
      "Kannauj",
      "Auraiya",
      "Etawah",
    ],
    Lucknow: [
      "Lucknow",
      "Sitapur-I",
      "Sitapur-II",
      "Lakhimpur Kheri",
      "Raebareli",
      "Unnao",
      "Hardoi",
    ],
    Meerut: [
      "Meerut",
      "Ghaziabad",
      "GB Nagar",
      "Baghpat",
      "Hapur",
      "Bulandshahr",
    ],
    Mirzapur: ["Mirzapur", "Bhadohi", "Sonbhadra"],
    Moradabad: ["Moradabad", "Amroha", "Sambhal", "Rampur", "Bijnor"],
    Prayagraj: ["Prayagraj", "Kaushambi", "Pratapgarh", "Fatehpur"],
    Saharanpur: ["Saharanpur", "Muzaffarnagar", "Shamli"],
    Varanasi: ["Varanasi", "Chandauli", "Ghazipur", "Jaunpur"],
  };

  const jnvs = [
    "Agra",
    "Aligarh",
    "Ambedakar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Azamgarh",
    "Badaun",
    "Baghpat",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bahraich",
    "Bijnor",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Fatehpur",
    "Farrukhabad",
    "Faizabad",
    "Firozabad",
    "GB Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hardoi",
    "Hathras",
    "Hapur",
    "Jhansi",
    "Jalaun",
    "Jaunpur",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kannauj",
    "Kushinagar",
    "Lalitpur",
    "Lakhimpur Kheri",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Santkabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharth Nagar",
    "Sitapur-I",
    "Sitapur-II",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
    "Others",
  ];

  // Extract districts using slice()
  const jnvDistricts = jnvs.map((jnv) => jnv.slice(jnv.indexOf(",") + 2));
  function getDivision(district) {
    for (const division in divisions) {
      if (divisions[division].includes(district)) {
        return division;
      }
    }
    return "Unknown";
  }

  const formatDateTime = (date) => {
    const d = new Date(date);

    let day = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  };

  const handleJNVChange = (event) => {
    // const selectedDistrict = event.target.value.slice(
    //   event.target.value.indexOf(",") + 2
    // );
    const selectedDistrict = event.target.value;
    console.log("hllo", event.target.value);
    // console.log(event.target.value)
    setSelectedJNV(event.target.value);
    const foundDivision = getDivision(selectedDistrict);
    setDivision(foundDivision);
    console.log("...", selectedJNV, division);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const today = new Date();
    const cutoffDate = new Date(today.getFullYear(), 10, 10); // November 10th of this year

    if (today > cutoffDate) {
      alert("Submissions are closed after November 10th."); // Alert for date condition
      setLoading(false); // Hide loader if date condition is not met
      return; // Stop further execution
    }
    // console.log(accomodation);
    if (!accomodation) {
      setErrorMessage("Accommodation preference is required field."); // Set error message
      // console.log('sjdfnj');
      setLoading(false);
      return;
    } else {
      setErrorMessage(""); // Clear error message
      // Proceed with form submission (e.g., send data to server)
      // console.log("Accommodation selected:", accomodation);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    } else {
      setErrorMessage("");
    }

    const res = await axios.get(
      "https://api.sheetbest.com/sheets/b49707e6-8a6e-418e-a307-014aee6b9d24"
    );
    const data = {
      Name: name,
      JNV: selectedJNV !== "Others" ? selectedJNV : otherJnv,
      Passing_Year: batch,
      Phone_Number: phone,
      Profession: profession,
      Location: location,
      Timestamp: formatDateTime(Date.now()),
      Email: email,
      Job_Status: jobStatus,
      id: res.data.length,
      has_sent_email: "0",
      id_card_url: "",
      Mandal: division,
      Accomodation: accomodation,
    };
    const res1 = await axios.post(
      "https://api.sheetbest.com/sheets/b49707e6-8a6e-418e-a307-014aee6b9d24",
      data
    );

    setSerial(res.data.length + 1);
    if (res.data.length >= 1 && res.data.length <= 700) {
      setFoodTiming("12:30-13:00");
    } else if (res.data.length >= 701 && res.data.length <= 1400) {
      setFoodTiming("13:00-13:30");
    } else if (res.data.length >= 1401 && res.data.length <= 2100) {
      setFoodTiming("13:30-14:00");
    } else if (res.data.length >= 2101 && res.data.length <= 2800) {
      setFoodTiming("14:00-14:30");
    } else if (res.data.length >= 2801 && res.data.length <= 3500) {
      setFoodTiming("14:30-15:00");
    } else {
      setFoodTiming("15:00-15:30"); // Add more ranges if needed
    }
    setGenerated(true);
    setLoading(false); // Hide loader after submission
  };

  const uploadImageToCloudinary = async (imageDataUrl) => {
    const formData = new FormData();
    formData.append("file", imageDataUrl);
    formData.append("upload_preset", "ID_CARD_GENERATOR");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsxtm75zl/image/upload",
        formData
      );
      // console.log(response.data.secure_url);
      return response.data.secure_url; // Cloudinary URL of the uploaded image
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw new Error("Image upload failed");
    }
  };

  const generateIDCardImage = async () => {
    const node = document.getElementById("id-card-to-download");

    if (!node) {
      console.error(
        "Element not found. Ensure the element is properly rendered before conversion."
      );
      return;
    }

    try {
      const canvas = await html2canvas(node);
      return canvas.toDataURL("image/jpeg", 0.95); // Generate the image data as a base64 encoded string
    } catch (error) {
      console.error("Oops, something went wrong while generating JPEG!", error);
      throw new Error("Image generation failed");
    }
  };
  useEffect(() => {
    if (generated) {
      const uploadImage = async () => {
        try {
          // Step 4: Generate the ID card image
          const idCardImage = await generateIDCardImage();

          // Step 5: Upload the ID card image to Cloudinary and get the URL
          const cloudinaryImageUrl = await uploadImageToCloudinary(idCardImage);

          // Step 6: Update the Google Sheet with the Cloudinary image URL
          await axios.patch(
            `https://api.sheetbest.com/sheets/b49707e6-8a6e-418e-a307-014aee6b9d24/id/${
              serial - 1
            }`,
            {
              id_card_url: cloudinaryImageUrl,
            }
          );

          // console.log('Image uploaded and sheet updated successfully!', cloudinaryImageUrl, serial);
        } catch (error) {
          console.error("Error uploading image or updating sheet:", error);
        }
      };

      uploadImage(); // Call the image upload function
    }
  }, [generated, serial]);

  useEffect(() => {
    // console.log("Updated values -> selectedJNV:", selectedJNV, ", division:", division);
  }, [selectedJNV, division]);

  const handleReset = () => {
    setGenerated(false);
    setName("");
    setJnv("");
    setBatch("");
    setPhone("");
    setProfession("");
    setLocation("");
    setPhoto(
      "data:image/png;base64,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"
    );
    setRow("");
    setTiming("");
    setEmail("");
    setJobStatus("");
    setSerial("");
    setDivision("");
    setAccomodation("");
    setSelectedJNV("");
    setFoodTiming("");
    setOtherJnv("");
  };

  const handleBatch = (e) => {
    e.preventDefault();
    const newBatch = e.target.value;
    setBatch(newBatch);

    const newRow = newBatch - 1993;
    let rowLetter;
    if (newRow >= 25) {
      rowLetter = "Z";
    } else {
      rowLetter = String.fromCharCode(65 + newRow);
    }
    setRow(rowLetter);

    if (newBatch >= 1994 && newBatch <= 2002) {
      setTiming("1:00-1:30");
    } else {
      setTiming("2:00-2:30");
    }
  };

  const handleUploadPhoto = (e) => {
    const uploadedPhoto = URL.createObjectURL(e.target.files[0]);
    setPhoto(uploadedPhoto);

    // Scroll to the Generate ID Card button
    if (generateButtonRef.current) {
      generateButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capturePhoto = () => {
    const capturedPhoto = webcamRef.current.getScreenshot();
    setPhoto(capturedPhoto);
  };

  return (
    <div className="form-container">
      <div className="container1">
        {loading ? (
          <div className="card">
            <div className="loader">
              <p>Generating</p>
              <div className="words">
                <span className="word">Card</span>
                <span className="word">Card</span>
                <span className="word">Card</span>
                <span className="word">Card</span>
                <span className="word">Card</span>
              </div>
            </div>
          </div>
        ) : !generated ? (
          <>
            <h1 className="form-title">
              UP State Navodaya Almuni Open Meet(Navotsava-2024) Registration
              Form
            </h1>
            <h1 className="form-title-2"> 17th November, 2024</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>NAME:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="choose-jnv">
                <label>Choose JNV:</label>
                <select
                  value={selectedJNV}
                  onChange={handleJNVChange}
                  className="JNV"
                  required
                >
                  <option value="">Select your JNV</option>
                  {jnvs.map((jnv, index) => (
                    <option key={index} value={jnv}>
                      {jnv}
                    </option>
                  ))}
                </select>
                {selectedJNV === "Others" && (
                  <input
                    type="text"
                    placeholder="Enter your JNV Name"
                    value={otherJnv}
                    onChange={(e) => setOtherJnv(e.target.value)}
                    className="other-jnv"
                    required
                  />
                )}
                {division && <p className="Mandal">MANDAL: {division}</p>}
              </div>
              <div className="form-group">
                <label className="passing-year">PASSING YEAR:</label>
                <select
                  value={batch}
                  onChange={handleBatch}
                  required
                  className="Year"
                >
                  <option value="">Select your passing year</option>
                  {Array.from({ length: 2024 - 1993 + 1 }, (_, i) => (
                    <option key={1993 + i} value={1993 + i}>
                      {1993 + i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>PHONE NO.:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Regex to allow only numbers (and limit to 10 digits)
                    const regex = /^[0-9\b]+$/;
                    if (
                      value === "" ||
                      (regex.test(value) && value.length <= 10)
                    ) {
                      setPhone(value); // Set the phone number if valid
                    }
                  }}
                  required
                  placeholder="Enter 10-digit phone number"
                />
              </div>
              <div className="form-group">
                <label>PROFESSION:</label>
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>WORKING LOCATION:</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>EMAIL:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Status:</label>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="seeking-job"
                    name="jobStatus"
                    value="Seeking for a Job"
                    checked={jobStatus === "Seeking for a Job"}
                    onChange={(e) => setJobStatus(e.target.value)}
                  />
                  <label htmlFor="seeking-job">Seeking for a Job</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="providing-job"
                    name="jobStatus"
                    value="Providing a Job"
                    checked={jobStatus === "Providing a Job"}
                    onChange={(e) => setJobStatus(e.target.value)}
                  />
                  <label htmlFor="providing-job">Providing a Job</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="NA"
                    name="jobStatus"
                    value="NA"
                    checked={jobStatus === "NA"}
                    onChange={(e) => setJobStatus(e.target.value)}
                  />
                  <label htmlFor="NA">NA</label>
                </div>
              </div>
              <div className="form-group">
                <label>Accomodation Required:</label>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="seeking-accomodation"
                    name="accomodation"
                    value="YES"
                    checked={accomodation === "YES"}
                    onChange={(e) => setAccomodation(e.target.value)}
                  />
                  <label htmlFor="seeking-accomodation">YES</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="providing-accomodation"
                    name="accomodation"
                    value="NO"
                    checked={accomodation === "NO"}
                    onChange={(e) => setAccomodation(e.target.value)}
                  />
                  <label htmlFor="providing-accomodation">NO</label>
                </div>
              </div>
              <div className="form-group">
                <label>Upload Photo:</label>
                <input type="file" onChange={handleUploadPhoto} />
              </div>
              <div className="form-group">
                <label>OR Capture Photo with Webcam:</label>
                <button
                  type="button"
                  onClick={() => setUseWebcam(!useWebcam)}
                  className={useWebcam ? "btn-reset" : "btn-download"}
                >
                  {useWebcam ? "Disable Webcam" : "Enable Webcam"}
                </button>
                {useWebcam && (
                  <div className="webcam-container">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      videoConstraints={{
                        width: 480,
                        height: 480,
                        facingMode: "user",
                      }}
                      style={{
                        width: "100%",
                        maxWidth: "450px", // Set max width to 480px for 1:1 ratio
                        height: "auto",
                        objectFit: "cover",
                        aspectRatio: "1 / 1", // Ensure 1:1 aspect ratio
                        borderRadius: "10px",
                      }}
                    />
                    <button
                      type="button"
                      onClick={capturePhoto}
                      className="btn-update"
                    >
                      Capture Photo
                    </button>
                  </div>
                )}
                {photo && (
                  <div className="captured-photo">
                    <h3>Captured Photo:</h3>
                    <img src={photo} alt="Captured" />
                  </div>
                )}
              </div>
              <button onClick={handleReset} className="btn-reset">
                Reset
              </button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <button
                ref={generateButtonRef}
                type="submit"
                className="btn-download"
              >
                Submit
              </button>
              <div className="warning">
                Registration only valid till 10/11/2024
              </div>
            </form>
          </>
        ) : (
          <>
            <h1>Generated Id Card</h1>
            <div className="id-card" id="id-card-to-download">
              <div>
                <div className="center-content">
                  <div className="logo-container">
                    <img src={logo} alt="Event Logo" className="logo-img" />
                    <div>
                      <div className="navotsav-title">NAVOTSAV 2024</div>
                      <div className="navotsav-subsubtitle">
                        U.P. STATE NAVODAYA ALUMNI OPEN MEET
                      </div>
                    </div>
                  </div>
                  {/* <div className='navotsav-subtitle'>2024</div> */}
                  <div className="id-photo">
                    <img src={photo} alt="Profile" />
                  </div>
                  {/* <div className="serial">Serial No.: NV-2024-0{serial}</div> */}
                  <div className="name-title-container">
                    <h2 className="name-title">{name.toUpperCase()}</h2>
                  </div>
                  <div className="details">
                    <div className="id-details">
                      <p>
                        <span>JNV:</span>{" "}
                        {selectedJNV !== "Others"
                          ? selectedJNV.toUpperCase()
                          : otherJnv.toUpperCase()}
                      </p>
                      <p>
                        <span>BATCH:</span> {batch.toUpperCase() - 7}-
                        {batch.toUpperCase()}
                      </p>
                      <p>
                        <span>PHONE NO.:</span> {phone}
                      </p>
                      {/* <p>
              <span>SEAT ROW:</span> {row} ROW
            </p> */}
                      <p>
                        <span>MANDAL:</span> {division.toUpperCase()}
                      </p>
                      <p>
                        {/* <span>LUNCH TIMINGS:</span> {timing} */}
                        <span>PROFESSION:</span> {profession.toUpperCase()}
                      </p>
                      <p>
                        {/* <span>LUNCH TIMINGS:</span> {timing} */}
                        <span>WORK LOCATION:</span> {location.toUpperCase()}
                      </p>
                    </div>
                    {/* <div className="id-details id-details-qr">
            <div className="qr-container">
              <img
                src={qr}
                alt="QR Code"
                className="id-details-img"
              />
            </div>
          </div> */}
                  </div>
                  <div className="last-line">
                    <span className="connect-collaborate-contribute connect">
                      Connect.{" "}
                    </span>
                    <span className="connect-collaborate-contribute collaborate">
                      Collaborate.{" "}
                    </span>
                    <span className="connect-collaborate-contribute contribute">
                      Contribute.{" "}
                    </span>
                  </div>
                </div>
                <div className="serial">Serial No.: NV-2024-0{serial - 1}</div>
                <div className="serial2">Lunch Timing:{foodTiming}</div>
              </div>
            </div>
            <button onClick={handleReset} className="btn-reset">
              Back
            </button>
            <button className="btn-download" onClick={downloadAsJPG}>
              Download as JPG
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Appy;
