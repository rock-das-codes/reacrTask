import {  Link } from "react-router";
import camera from "./../assets/Group 1585.svg"
const AccountSettings = () => {
    return (
        <div className="flex rubik  min-h-[90vh] bg-white">
        
      <div className="bg-[#F7F8F9] border border-black/10">
        <div className="w-full bg-white px-4 py-2"><h2 className="text-md my-4  font-semibold text-gray-800 mb-4">Account Settings</h2></div>
        <div className="w-full max-w-xs mx-auto p-4 bg-[#F7F8F9] border-b border-dashed border-black/20 rounded-lg">
        <div className="flex  space-x-3  bg-gray-100 rounded-lg">
        <div className="relative">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="User Profile"
                                className="w-14 h-14 rounded-full object-cover "
                            />
                            {/* Camera Icon Positioned Over Profile Picture */}
                            <img 
                                src={camera} 
                                alt="camera" 
                                className="w-6 h-6 absolute bottom-0 right-0 p-1 rounded-full shadow-md"
                            />
                        </div>
          <div>
            <h3 className="text-sm font-semibold text-[#1D2226]">Marry Doe</h3>
            <p className="text-xs text-[#1D2226]">Marry@Gmail.com</p>
          </div>
        </div>
        
        <p className="text-xs text-[#1D2226] mt-3 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
        </p></div>
      </div></div>
    );
  };
  
  export default AccountSettings;