import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [agency, setAgency] = useState("");

  return (
    <div className="flex rubik  min-h-[90vh] bg-[#F7F8F9]">
      <div className="flex flex-col p-6 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-xl mt-2 rubik font-medium text-gray-900 text-left">
          Create your <br /> PopX account
        </h1>

        <form className="mt-2 space-y-3 text-left flex-grow">
        <div>
  <label className="block text-sm font-semibold relative top-3.5 left-2.5 text-purple-600">
    <span className="font-medium rubik bg-[#F7F8F9]">Full Name</span><span className="text-red-500 ">*</span>
  </label>
  <input
    type="text"
    placeholder="Marry Doe"
    className="w-full rubik mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>

<div>
  <label className="block rubik text-sm font-semibold relative top-3.5 left-2.5 text-purple-600">
    <span className="font-medium  bg-[#F7F8F9]">Phone Number</span><span className="text-red-500 ">*</span>
  </label>
  <input
    type="text"
    placeholder="Marry Doe"
    className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>

<div>
  <label className="block text-sm font-medium relative top-3.5 left-2.5 text-purple-600">
    <span className="font-bold  bg-[#F7F8F9]">Email address</span><span className="text-red-500 ">*</span>
  </label>
  <input
    type="email"
    placeholder="Marry Doe"
    className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>
<div>
  <label className="block text-sm font-medium relative top-3.5 left-2.5 text-purple-600">
    <span className="font-bold  bg-[#F7F8F9]">Password</span><span className="text-red-500 ">*</span>
  </label>
  <input
    type="password"
    placeholder="Marry Doe"
    className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>

<div>
  <label className="block text-sm font-medium relative top-3.5 left-2.5 text-purple-600">
    <span className="font-bold  bg-[#F7F8F9]">Company name</span>
  </label>
  <input
    type="text"
    placeholder="Marry Doe"
    className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="form-radio font-medium text-[#6C25FF]"
                  onChange={() => setAgency("yes")}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="form-radio font-medium text-[#6C25FF]"
                  onChange={() => setAgency("no")}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          
        </form>
        <Link
        to="/account-setting"
            type="submit"
            className="w-full  font-medium bg-[#6C25FF] text-white py-2 rounded-lg shadow-md hover:bg-purple-700 mt-4"
          >
            Create Account
          </Link>
      </div>

    </div>
  );
};

export default Register;
