// src/components/modals/ChangePasswordModal.tsx
import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 w-full max-w-md mx-4 z-10">
                <h2 className="text-xl font-bold text-white mb-4">Change Password</h2>

                <form className="space-y-4 text-gray-200">
                    <div>
                        <label className="block text-sm mb-1">Current Password</label>
                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full px-3 py-2 rounded-lg bg-gray-800/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-3 py-2 rounded-lg bg-gray-800/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-3 py-2 rounded-lg bg-gray-800/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-6">
                        <Button variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="primary">Update Password</Button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ChangePasswordModal;
