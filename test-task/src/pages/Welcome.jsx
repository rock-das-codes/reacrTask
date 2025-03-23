import { Link } from "react-router";

const Welcome = () => {
  return (
    <div className="flex flex-col  justify-end min-h-[90vh] bg-gray-100">
      <div className=" p-6 text-left rounded-lg shadow-md w-80 ">
        <div className="text-[28px]  rubik  font-medium text-[#1D2226]">Welcome to PopX</div>
        <p className="text-[#1D2226]/60 rubik font-regular  text-[18px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6">
          <Link to="/register">
            <button className="w-full rubik font-medium bg-[#6C25FF] text-white py-2 rounded-[6px] shadow-md hover:bg-purple-700">
              Create Account
            </button>
          </Link>
          <Link to="/signin">
          
            <button className="w-full mt-3 rubik font-medium bg-[#6C25FF4B] text-purple-900 py-2 rounded-[6px] shadow-md hover:bg-purple-400">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

