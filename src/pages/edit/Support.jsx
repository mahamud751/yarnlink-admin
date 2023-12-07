import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Main_steam.css";
import axios from "axios";

const Support = ({ data, refetch }) => {
  const { _id, email, number } = data;
  const [user, setUser] = useState(data);
  const [files, setFiles] = useState("");

  const MySwal = withReactContent(Swal);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...user };
    newInfo[field] = value;
    setUser(newInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      ...user,
    };
    try {
      await axios.put(
        `https://yarnlink-server.onrender.com/api/support/${_id}`,
        newPost
      );
      MySwal.fire("Good job!", "successfully edited", "success");
      refetch();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <div className="card-body">
              <div className="col-md-12 mb-3">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="main_form  w-100"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={email || ""}
                />
              </div>
              <div className="col-md-12 mb-3">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3"
                >
                  Number
                </label>
                <input
                  type="text"
                  className="main_form  w-100"
                  name="number"
                  onBlur={handleOnBlur}
                  defaultValue={number || ""}
                />
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="profile_btn"
                  style={{ width: 220 }}
                >
                  Edit Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Support;
