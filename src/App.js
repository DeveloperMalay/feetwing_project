import "./App.css";
import React from "react";
import BusinessBody from "./Components/BusinessBody";

import Navbar from "./Components/Navbar";
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  function Careerdashboard() {
    const [formdata, setFormdata] = React.useState({
      title: "",
      Paid: "",
      short_description: "",
      description: "",
      worktype: "",
    });

    function handlechange(event) {
      setFormdata((prevdata) => {
        return { ...prevdata, [event.target.name]: event.target.value };
      });
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(formdata);
    }

    const navigate = useNavigate();
    return (
      <div className="dashboard">
        <div className="header">
          <p>Career Dashboard</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formdetails">
            <div className="name">
              <div className="title">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  onChange={handlechange}
                  value={formdata.title}
                />
              </div>
              <div className="empoymentType">
                <select name="employmenttype">
                  <option value="0">Employment type ( Option Choose )</option>
                  <option value="1">Full-Time</option>
                  <option value="2">Part-Time</option>
                  <option value="3">Contract</option>
                  <option value="4">Temporary</option>
                  <option value="5">Volunteer</option>
                  <option value="6">Internship</option>
                </select>
              </div>
            </div>
            <div className="otherdetail">
              <div className="location">
                <input type="text" name="location" placeholder="Location" />
              </div>
              <div className="jobsection">
                <select name="employment" id="employment">
                  <option value="0">Job Section ( Option Choose )</option>
                  <option value="1">Business Systems</option>
                  <option value="2">Design</option>
                  <option value="3">Engineering</option>
                  <option value="4">Finance</option>
                  <option value="5">Human Resources</option>
                  <option value="6">Legal</option>
                  <option value="7">Marketing</option>
                  <option value="8">Operations</option>
                  <option value="9">Product</option>
                  <option value="10">Sales</option>
                  <option value="11">Security</option>
                  <option value="12">Support</option>
                </select>
              </div>
              <div className="workplacetype">
                <select
                  name="worktype"
                  id="employment"
                  onChange={handlechange}
                  value={formdata.worktype}
                >
                  <option value="0">Workplace type ( Option Choose )</option>
                  <option value="On-site">
                    On-site
                    {/* <sub>Employees come to work in-person</sub> */}
                  </option>
                  <option value="Hybrid">
                    Hybrid
                    {/* <sub>Employees work on-site and off-site</sub> */}
                  </option>
                  <option value="Remote">
                    Remote
                    {/* <sub>Employees work off-site</sub> */}
                  </option>
                </select>
              </div>
              <div className="paid2">
                <select
                  name="Paid"
                  id="employment"
                  onChange={handlechange}
                  value={formdata.Paid}
                >
                  <option value="0">Paid / Gratis ( Option Choose )</option>
                  <option value="Paid">Paid</option>
                  <option value="Gratis">Gratis</option>
                </select>
              </div>
            </div>
            <div className="short_description">
              <input
                type="text"
                name="short_description"
                id="description"
                placeholder="Short Description ( 150 Words )"
                onChange={handlechange}
                value={formdata.short_description}
              />
            </div>
            <div className="job_description">
              <h3>Add a job description</h3>
              <p>Description*</p>
              <div className="logos">
                {/* <FormatBoldIcon />
                <FormatUnderlinedIcon />
                <FormatListBulletedOutlinedIcon />
                <FormatListNumberedOutlinedIcon />
                <FormatItalicOutlinedIcon /> */}
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M321.1 242.4C340.1 220.1 352 191.6 352 160c0-70.59-57.42-128-128-128L32 32.01c-17.67 0-32 14.31-32 32s14.33 32 32 32h16v320H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h224c70.58 0 128-57.41 128-128C384 305.3 358.6 264.8 321.1 242.4zM112 96.01H224c35.3 0 64 28.72 64 64s-28.7 64-64 64H112V96.01zM256 416H112v-128H256c35.3 0 64 28.71 64 63.1S291.3 416 256 416z" />
                  </svg>
                </div>

                <div className="icon1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M384 64.01c0 17.69-14.31 32-32 32h-58.67l-133.3 320H224c17.69 0 32 14.31 32 32s-14.31 32-32 32H32c-17.69 0-32-14.31-32-32s14.31-32 32-32h58.67l133.3-320H160c-17.69 0-32-14.31-32-32s14.31-32 32-32h192C369.7 32.01 384 46.33 384 64.01z" />
                  </svg>
                </div>
                <div className="icon2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 448H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h384c17.69 0 32-14.31 32-32S433.7 448 416 448zM48 64.01H64v160c0 88.22 71.78 159.1 160 159.1s160-71.78 160-159.1v-160h16c17.69 0 32-14.32 32-32s-14.31-31.1-32-31.1l-96-.0049c-17.69 0-32 14.32-32 32s14.31 32 32 32H320v160c0 52.94-43.06 95.1-96 95.1S128 276.1 128 224v-160h16c17.69 0 32-14.31 32-32s-14.31-32-32-32l-96 .0049c-17.69 0-32 14.31-32 31.1S30.31 64.01 48 64.01z" />
                  </svg>
                </div>
                <div className="icon3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z" />
                  </svg>
                </div>
                <div className="icon4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M55.1 56.04C55.1 42.78 66.74 32.04 79.1 32.04H111.1C125.3 32.04 135.1 42.78 135.1 56.04V176H151.1C165.3 176 175.1 186.8 175.1 200C175.1 213.3 165.3 224 151.1 224H71.1C58.74 224 47.1 213.3 47.1 200C47.1 186.8 58.74 176 71.1 176H87.1V80.04H79.1C66.74 80.04 55.1 69.29 55.1 56.04V56.04zM118.7 341.2C112.1 333.8 100.4 334.3 94.65 342.4L83.53 357.9C75.83 368.7 60.84 371.2 50.05 363.5C39.26 355.8 36.77 340.8 44.47 330.1L55.59 314.5C79.33 281.2 127.9 278.8 154.8 309.6C176.1 333.1 175.6 370.5 153.7 394.3L118.8 432H152C165.3 432 176 442.7 176 456C176 469.3 165.3 480 152 480H64C54.47 480 45.84 474.4 42.02 465.6C38.19 456.9 39.9 446.7 46.36 439.7L118.4 361.7C123.7 355.9 123.8 347.1 118.7 341.2L118.7 341.2zM512 64C529.7 64 544 78.33 544 96C544 113.7 529.7 128 512 128H256C238.3 128 224 113.7 224 96C224 78.33 238.3 64 256 64H512zM512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288H256C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224H512zM512 384C529.7 384 544 398.3 544 416C544 433.7 529.7 448 512 448H256C238.3 448 224 433.7 224 416C224 398.3 238.3 384 256 384H512z" />
                  </svg>
                </div>
              </div>
              <div className="descriparea">
                <textarea
                  name="description"
                  id="description"
                  cols="140"
                  rows="10"
                  onChange={handlechange}
                  value={formdata.description}
                ></textarea>
              </div>
              <h3>Add skills</h3>
              <p className="skillpara">
                Add skill keyword to make your job more visible to the right
                candidates(Select up to 10)
              </p>
              <div className="btn">
                <span>Add skill +</span>
              </div>
            </div>
            <div className="submit">
              <button
                type="submit"
                onClick={() => {
                  navigate("/BusinessBody");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Careerdashboard />} />
        <Route
          path="/BusinessBody"
          element={<BusinessBody  />}
        />
      </Routes>
    </Router>
  );
  return (
    <div className="App">
      <Navbar />
      {/* <BusinessBody /> */}
      {/* <Careerdashboard /> */}
    </div>
  );
}

export default App;
