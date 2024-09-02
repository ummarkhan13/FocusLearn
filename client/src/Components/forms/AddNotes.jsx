import React from "react";
import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { textss } from "../../Constants";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }], // Add color and background color options
    [{ align: [] }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
  "background", // Add color and background to formats
  "align",
];

const AddNotes = () =>
  // { openNotes, setOpenNotes }
  {
    // const open = openNotes;
    // const setOpen = setOpenNotes;
    const [value, setValue] = useState("");

    const handleSubmit = () => {
      textss.push(value);
      console.log(textss);

      console.log(value);
    };

    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-4xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            ADD Notes
          </h2>
          <form action="#" onSubmit={handleSubmit} className="text-white ">
            <ReactQuill
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
            />

            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Notes
            </button>
          </form>
        </div>
      </section>
    );
  };

export default AddNotes;
