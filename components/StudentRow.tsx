
import React from 'react';
import type { Student, Assignments } from '../types';
import StatusDropdown from './StatusDropdown';

interface StudentRowProps {
  student: Student;
  onNameChange: (id: number, value: string) => void;
  onAssignmentChange: (id: number, assignmentKey: keyof Assignments, field: 'status' | 'notes', value: string) => void;
}

const assignmentKeys: (keyof Assignments)[] = ['pengTalk', 'mindDiary', 'bookReports', 'mathWorkbook'];

const StudentRow: React.FC<StudentRowProps> = ({ student, onNameChange, onAssignmentChange }) => {

  return (
    <tr className="hover:bg-slate-50 transition-colors duration-150">
      <td className="whitespace-nowrap py-4 px-3 text-sm text-center text-slate-500 sticky left-0 bg-white hover:bg-slate-50 z-10">{student.id}</td>
      <td className="whitespace-nowrap py-2 px-3 text-sm text-slate-900 sticky left-16 bg-white hover:bg-slate-50 z-10">
        <input
          type="text"
          value={student.name}
          onChange={(e) => onNameChange(student.id, e.target.value)}
          placeholder="학생 이름"
          className="w-full px-2 py-1 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </td>
      {assignmentKeys.map(key => (
        <React.Fragment key={key}>
            <td className="whitespace-nowrap py-2 px-3 text-sm">
            <StatusDropdown
                value={student.assignments[key].status}
                onChange={(e) => onAssignmentChange(student.id, key, 'status', e.target.value)}
            />
            </td>
            <td className="whitespace-nowrap py-2 px-3 text-sm">
            <textarea
                value={student.assignments[key].notes}
                onChange={(e) => onAssignmentChange(student.id, key, 'notes', e.target.value)}
                placeholder="미완료 내용 기입"
                rows={1}
                className="w-full px-2 py-1 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[38px] min-w-[180px]"
            />
            </td>
        </React.Fragment>
      ))}
    </tr>
  );
};

export default React.memo(StudentRow);
