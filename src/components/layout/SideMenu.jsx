import React from "react";

function SideMenu({ formData, sideBar, setSideBar }) {
  return (
    <div>
      <div className="flex justify-between items-center px-4 pt-3 relative">
        <button
          className="hover:underline "
          onClick={() => setSideBar(!sideBar)}
        >
          <i className="fa-solid text-[#c1cbd7] fa-angle-left" />
        </button>

        <button
          className="hover:underline text-[#c1cbd7]"
          onClick={() => setSideBar(!sideBar)}
        >
          Hide Menu
        </button>
      </div>
      <div className="divider my-1">
        <i className="fa-solid fa-code" />
      </div>

      {/* BELOW DIVIDER */}
      <div>
        <h1 className="text-3xl font-bold pl-5 pb-1 text-[#e0a969]">
          {formData?.name}
        </h1>
        <figure className="p-4">
          <img
            className="rounded-xl shadow-2xl"
            src={formData?.src}
            alt="project"
          />
        </figure>
        <div>
          <h1 className="text-2xl font-bold pl-4 text-[#e0a969]">About</h1>
          <p className="text-[17px] px-4 pt-2 text-[#c1cbd7]">
            {formData?.description}
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold pl-4 pt-4 text-[#e0a969]">
            Languages Used
          </h1>
          <p className="flex flex-wrap gap-2 px-3 pt-2">
            {formData?.languagesUsed.map((item) => {
              return (
                <div className="badge text-[#c1cbd7] py-4 px-8 mt-1 max-w-[4rem] text-[13px]">
                  {item}
                </div>
              );
            })}
          </p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold pl-4 pt-3 mb-0 pb-0 text-[#e0a969]">
            Visit Website
          </h1>
          <a
            target="_blank"
            href={formData?.website}
            className="text-[17px] text-[#c1cbd7] px-4 hover:underline "
          >
            <p className="mt-[-20px] px-4">{formData?.website}</p>
          </a>

          <h1 className="text-xl  font-bold pl-4 mb-0 pb-0 text-[#e0a969]">
            GitHub
          </h1>
          <a
            target="_blank"
            href={formData?.gitHub}
            className="text-[17px] text-[#c1cbd7] px-4 hover:underline "
          >
            <p className="mt-[-20px] px-4">{formData?.gitHub}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
