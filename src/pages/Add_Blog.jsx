import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { TINY_MCE_EDITOR_INIT } from "../utils/constants";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_Blog = () => {
  const [files, setFiles] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const MySwal = withReactContent(Swal);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data2 = {
      desc: details,
      name: name,
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
        "https://yarnlink-server.onrender.com/api/blogs",
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
            <div className="row p-3 ">
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
                  value={name}
                  placeholder="Blog Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
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
              <div className="col-md-12 form_sub_stream">
                <Editor
                  apiKey="9i9siri6weyxjml0qbccbm35m7o5r42axcf3lv0mbr0k3pkl"
                  init={TINY_MCE_EDITOR_INIT}
                  value={details}
                  onEditorChange={(newValue) => setDetails(newValue)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Blog;
