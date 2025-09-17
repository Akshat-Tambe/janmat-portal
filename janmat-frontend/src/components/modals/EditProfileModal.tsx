// src/components/modals/EditProfileModal.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    if (!isOpen) return null;

    // ✅ Validation
    const validate = () => {
        const newErrors = { fullName: "", email: "", phone: "" };
        let isValid = true;

        if (!form.fullName.trim()) {
            newErrors.fullName = "Full name is required";
            isValid = false;
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email";
            isValid = false;
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Phone must be 10 digits";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("✅ Form Submitted:", form);

        // TODO: Call API here
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50"
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 w-full max-w-lg mx-4 z-10">
                <h2 className="text-xl font-bold text-white mb-4">Edit Profile</h2>

                <form className="space-y-4 text-gray-200" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm mb-1">Full Name</label>
                        <input
                            type="text"
                            value={form.fullName}
                            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            placeholder="Enter full name"
                            className={`w-full px-3 py-2 rounded-lg bg-gray-800/50 border ${errors.fullName ? "border-red-500" : "border-white/20"
                                } text-white focus:outline-none focus:ring-2 ${errors.fullName ? "focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                        />
                        {errors.fullName && (
                            <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Enter email"
                            className={`w-full px-3 py-2 rounded-lg bg-gray-800/50 border ${errors.email ? "border-red-500" : "border-white/20"
                                } text-white focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm mb-1">Phone</label>
                        <input
                            type="text"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="Enter phone number"
                            className={`w-full px-3 py-2 rounded-lg bg-gray-800/50 border ${errors.phone ? "border-red-500" : "border-white/20"
                                } text-white focus:outline-none focus:ring-2 ${errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                        />
                        {errors.phone && (
                            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-6">
                        <Button variant="secondary" onClick={onClose} type="button">
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default EditProfileModal;
