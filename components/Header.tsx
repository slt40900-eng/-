
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        여름방학 과제 검사표
      </h1>
      <p className="mt-2 text-lg text-slate-600">
        학생 수: 총 24명
      </p>
    </header>
  );
};

export default Header;
