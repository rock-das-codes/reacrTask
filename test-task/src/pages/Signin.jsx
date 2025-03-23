import { Link } from "react-router";
const SignIn = () => {
    return (
      <div className="flex  rubik justify-end min-h-[90vh] bg-gray-100">
        <div className="w-[300px] p-6 bg-[#F7F8F9] border border-gray-300 shadow-md">
          {/* Title */}
          <h2 className="text-lg font-medium text-[#1D2226]">Signin to your <br /> <span className="font-medium">PopX account</span></h2>
          
          {/* Subtitle */}
          <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          
          {/* Form */}
          <form className="mt-2">
          <div>
  <label className="block text-sm font-semibold relative top-3.5 left-2.5 text-purple-600">
    <span className="font-medium rubik bg-[#F7F8F9]">Email Address</span><span className="text-red-500 ">*</span>
  </label>
  <input
    type="text"
    placeholder="Enter email address"
    className="w-full rubik mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>
            
<div>
  <label className="block text-sm font-semibold relative top-3.5 left-2.5 text-purple-600">
    <span className="font-medium rubik bg-[#F7F8F9]">Enter password</span><span className="text-red-500 ">*</span>
  </label>
  <input
    type="password"
    placeholder="Enter password"
    className="w-full rubik mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</div>
            
            {/* Login Button */}
            <Link to="/account-setting">
            <button 
              type="submit" 
              className="w-full text-[#FFFFFF] bg-gray-300  p-2 rounded-md mt-4 font-semibold hover:bg-gray-400"
            >
              Login
            </button></Link>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignIn;