// InputField.jsx
import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder, icon, onBlur, error }) => {
  return (
    <div>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">{icon}</span>}
        <input
          className={`w-full pl-12 pr-4 py-3 bg-white/20 border ${error ? 'border-red-400' : 'border-white/30'} rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300`}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      </div>
      {error && <p className="text-red-300 text-sm mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default InputField;
