import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    containsCheckbox?: boolean;
    onAgreeChange?: (checked: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({
    open,
    onClose,
    title,
    content,
    containsCheckbox = false,
    onAgreeChange,
}) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Box */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative z-10 w-[90%] max-w-2xl p-6 rounded-2xl bg-gray-900 text-gray-200 shadow-2xl border border-white/10"
                    >
                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>

                        {/* Scrollable Content */}
                        <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4">
                            {content}
                        </div>

                        {/* Checkbox (optional) */}
                        {containsCheckbox && (
                            <div className="mt-6 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="w-4 h-4 accent-purple-500"
                                    onChange={(e) => onAgreeChange?.(e.target.checked)}
                                />
                                <label
                                    htmlFor="agree"
                                    className="text-sm text-gray-300 select-none"
                                >
                                    I agree to the above {title.toLowerCase()}.
                                </label>
                            </div>
                        )}

                        {/* Close Button */}
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-purple-500/40 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Dialog;
