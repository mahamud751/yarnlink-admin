import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_Supplier = () => {
  const [files, setFiles] = useState("");
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data2 = {
      name: formData.get("name"),
    };

    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtpvtjiry/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const product = {
        ...data2,
        photos: list,
      };

      await axios.post(
        "https://yarnlink-server.onrender.com/api/supplier",
        product
      );
      MySwal.fire("Good job!", "successfully added", "success");
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
    event.target.reset();
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="customize registration_div card">
          <form onSubmit={handleSubmit}>
            <div className="row p-3">
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Name
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="name"
                  placeholder="Supplier Name"
                />
              </div>

              <div className="col-md-12 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Image upload
                </label>

                <input
                  type="file"
                  className="main_form w-100 p-0"
                  name="img"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                />
              </div>
            </div>

            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
              >
                Add Supplier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Supplier;
