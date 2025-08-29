
import React from 'react';
import type { AssignmentStatus } from '../types';

interface StatusDropdownProps {
  value: AssignmentStatus;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const getSelectClasses = (value: AssignmentStatus) => {
    const baseClasses = "w-24 appearance-none text-center px-3 py-1.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";
    switch (value) {
        case 'O':
            return `${baseClasses} bg-green-100 text-green-800 font-bold`;
        case 'X':
            return `${baseClasses} bg-red-100 text-red-800 font-bold`;
        default:
            return `${baseClasses} bg-white text-slate-500`;
    }
};

const StatusDropdown: React.FC<StatusDropdownProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={getSelectClasses(value)}
      >
        <option value="" disabled>선택</option>
        <option value="O">O</option>
        <option value="X">X</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
};

export default StatusDropdown;
