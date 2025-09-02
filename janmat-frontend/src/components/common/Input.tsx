import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 font-medium text-text-primary">{label}</label>}
      <input
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? 'border-danger' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && <span className="text-danger text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
