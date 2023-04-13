import React, { useState } from "react";

const Library = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="bg-[#03c988] text-white active:bg-red-600 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[500px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#000000] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-bold text-[#03c988] uppercase">Spotify Premium SignIn</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-8 w-8 text-xl block bg-[#CF0A0A] pb-[2px] rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-[#03C988] shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-white text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-white text-sm font-bold mb-1">
                      Phone Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-[#03C988] font-semibold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 rounded"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white active:bg-[#5D9C59] bg-[#03C988] font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Library;