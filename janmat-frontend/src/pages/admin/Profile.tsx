import React, { useState } from "react";
import { Edit, Lock } from "lucide-react"; // icons

interface Admin {
  id: number;
  admin_name: string;
  age: number;
  email: string;
  phone_number: string;
  department: string;
  designation: string;
  address: string;
  role: string;
  bio: string;
}

const Profile: React.FC = () => {
  const [admin] = useState<Admin>({
    id: 1,
    admin_name: "Rahul Sharma",
    age: 31,
    email: "rahul.sharma@example.com",
    phone_number: "+91 9876543210",
    department: "Election Commission",
    designation: "Chief Admin",
    address: "Bhopal, Madhya Pradesh, India",
    role: "ADMIN",
    bio: "Responsible for managing candidate approvals and overseeing elections.",
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Admin Profile
      </h2>

      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 transition hover:shadow-xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
       <img
  src="https://drive.google.com/thumbnail?id=1djfw37eMPkiZxpX2vzJ8t3W0xG97n6MM"
  onError={(e) => {
    e.currentTarget.src = "https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563EB&color=fff";
  }}
  alt="Profile"
  className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
/>


          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              {admin.admin_name}
            </h3>
            <p className="text-lg text-blue-600 font-medium">
              {admin.designation}
            </p>
            <p className="text-sm text-gray-500">{admin.department}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="font-semibold text-gray-700">📧 Email</p>
            <p className="text-gray-600">{admin.email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">📞 Phone</p>
            <p className="text-gray-600">{admin.phone_number}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">🎂 Age</p>
            <p className="text-gray-600">{admin.age}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">👤 Role</p>
            <p className="text-gray-600">{admin.role}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-semibold text-gray-700">📍 Address</p>
            <p className="text-gray-600">{admin.address}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-semibold text-gray-700">📝 Bio</p>
            <p className="text-gray-600 leading-relaxed">{admin.bio}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
          <button className="flex items-center gap-2 px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <Edit size={18} /> Edit Profile
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            <Lock size={18} /> Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
