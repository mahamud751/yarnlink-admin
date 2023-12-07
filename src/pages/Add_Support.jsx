import axios from "axios";
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_Support = () => {
  const MySwal = withReactContent(Swal);
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data2 = {
      email: formData.get("email"),
      number: formData.get("number"),
    };
    try {
      const product = {
        ...data2,
      };

      await axios.post(
        "https://yarnlink-server.onrender.com/api/support",
        product
      );
      MySwal.fire("Good job!", "successfully added", "success");
      formRef.current.reset();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="customize registration_div card">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row p-3">
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Email
                </label>

                <input
                  type="email"
                  className="main_form w-100"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Number
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="number"
                  placeholder="Number"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
              >
                Add Support
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Support;
