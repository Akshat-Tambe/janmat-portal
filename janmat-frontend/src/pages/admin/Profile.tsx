import React, { useState } from "react";
import { Edit, Lock } from "lucide-react";
import Button from "../../components/common/Button";
import EditProfileModal from "../../components/modals/EditProfileModal";
import ChangePasswordModal from "../../components/modals/ChangePasswordModal";

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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

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
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Admin Profile
      </h2>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 md:p-10 transition hover:shadow-2xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-white/20 pb-6">
          <img
            src="https://drive.google.com/thumbnail?id=1djfw37eMPkiZxpX2vzJ8t3W0xG97n6MM"
            onError={(e) => {
              e.currentTarget.src =
                "https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563EB&color=fff";
            }}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />

          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-white">
              {admin.admin_name}
            </h3>
            <p className="text-lg text-blue-400 font-medium">
              {admin.designation}
            </p>
            <p className="text-sm text-gray-300">{admin.department}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-gray-200">
          <div>
            <p className="font-semibold text-gray-300">📧 Email</p>
            <p>{admin.email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-300">📞 Phone</p>
            <p>{admin.phone_number}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-300">🎂 Age</p>
            <p>{admin.age}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-300">👤 Role</p>
            <p>{admin.role}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-semibold text-gray-300">📍 Address</p>
            <p>{admin.address}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-semibold text-gray-300">📝 Bio</p>
            <p className="leading-relaxed">{admin.bio}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            onClick={() => setIsEditOpen(true)}
          >
            <Edit size={18} /> Edit Profile
          </Button>
          <Button
            variant="primary"
            className="flex items-center gap-2"
            onClick={() => setIsPasswordOpen(true)}
          >
            <Lock size={18} /> Change Password
          </Button>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
      <ChangePasswordModal isOpen={isPasswordOpen} onClose={() => setIsPasswordOpen(false)} />
    </div>
  );
};

export default Profile;
