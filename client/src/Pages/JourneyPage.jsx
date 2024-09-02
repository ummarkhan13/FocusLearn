import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { journey, textss } from "../Constants";
import CreateChapter from "../Components/forms/CreateChapter";
import AddNotes from "../Components/forms/AddNotes";
import EditChapter from "../Components/forms/EditChapter";
import VideoPlayer from "../Components/VideoPlayer";

const JourneyPage = () => {
  const [toggleDropDown, setToggleDD] = useState("hidden");
  const toggleDD = () => {
    setToggleDD(toggleDropDown === "hidden" ? " " : "hidden");
  };

  const { jId } = useParams();
  console.log(jId);
  const [open, setOpen] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openV, setOpenV] = useState(false);
  const journies = journey[jId];
  

  return (
    <div>
      {/* Banner  */}
      <section class="bg-white px-4 py-3 antialiased dark:bg-gray-900 md:py-8">
        <div class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          <div class="lg:col-span-10 lg:mt-0">
            <div className="flex flex-col gap-3">
              <div className="font-bold text-4xl text-white">
                {journies.journey}{" "}
              </div>
              <div className="font-bold text-2xl text-white">
                {journies.subject}{" "}
              </div>
              <div className="font-semi text-xl text-white">
                {journies.Description}{" "}
              </div>

              <div class="my-6 w-full bg-gray-200 rounded-full h-4">
                <div class="bg-blue-600 h-4 rounded-full w-[40%]"></div>
                <div className="font-semi text-xl text-white my-1">
               Progress: 40%
              </div>
                
              </div>
            </div>
          </div>

          <div class="my-5 me-auto place-content-end place-self-start place-items-center  lg:col-span-1">
            <Link
              to="#"
              class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Notes
            </Link>
          </div>
        </div>

        <div className="my-4 mx-auto max-w-screen-xl rounded-lg text-white bg-gray-500 p-4 md:p-8 flex flex-col">
          <h1 className="text-4xl font-bold my-4">Chapters</h1>

          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                onClick={()=>setOpen(!open)}
                  type="button"
                  id="createProductModalButton"
                  data-modal-target="createProductModal"
                  data-modal-toggle="createProductModal"
                  className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <span className="font-bold text-2xl pb-1 mx-2"> +</span> Add
                  New Chapter
                </button>
                <CreateChapter open={open} setOpen={setOpen}/>
                {/* <AddNotes openNotes={openNotes} setOpenNotes={setOpenNotes}/> */}
                <EditChapter openEdit={openEdit} setOpenEdit={setOpenEdit}/>
                {/* <VideoPlayer openV={openV} setOpenV={setOpenV} videoId={videoId} /> */}

              </div>
              {textss[0]}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-4">
                      Chapter Id
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Chapter Title
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Actions
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 text-md font-semibold">
                      <input type="checkbox" />
                    </td>
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      1
                    </th>
                    <td className="px-4 py-3 text-md font-semibold cursor-pointer hover:underline"  >
                     <Link to={'/player/1'} >Introduction</Link> 
                    </td>
                    <td className="px-4 py-3">
                      <button 
                      className="text-yellow-500 rounded hover:bg-slate-900 p-2 text-md font-semibold border"
                      onClick={()=>setOpenNotes(!openNotes)}
                      >
                        Add Notes
                      </button>
                    </td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">
                      <button 
                      className="text-green-500 rounded hover:bg-slate-900 p-2 text-md font-semibold border"
                      onClick={()=>setOpenEdit(!openEdit)}
                      
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">
                      <button className="text-red-500 rounded hover:bg-slate-900 p-2 text-md font-semibold border">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyPage;
