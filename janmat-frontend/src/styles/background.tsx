// src/components/common/Background.tsx
import React from "react";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const stars = Array.from({ length: 200 });
    return (
        <div className="relative min-h-screen min-w-screen flex flex-col bg-gradient-to-b from-indigo-900 to-purple-900 overflow-hidden">
            {/* Floating stars */}
            {stars.map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full opacity-20"
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `floatStars ${5 + Math.random() * 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}

            {/* Page Content */}
            <div className="relative z-10">{children}</div>

            <style>{`
        @keyframes floatStars {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-20px) translateX(10px); opacity: 0.2; }
        }
      `}</style>
        </div>
    );
};

export default Background;
