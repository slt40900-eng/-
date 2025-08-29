
import React, { useState, useCallback } from 'react';
import type { Student, Assignments, AssignmentStatus } from './types';
import Header from './components/Header';
import StudentRow from './components/StudentRow';

const ASSIGNMENT_DETAILS = [
  { key: 'pengTalk', title: 'AI펭톡', description: '스테이지 모드 토픽 20까지 (스테이지 180까지)' },
  { key: 'mindDiary', title: 'AI마음일기', description: '7편 이상 쓰기, 3문장 이상' },
  { key: 'bookReports', title: '독서감상문', description: '5편 이상 (공책 또는 종이 절반 이상)' },
  { key: 'mathWorkbook', title: '수학익힘책 풀기', description: '40~60쪽' },
];

const studentRoster: { id: number, name: string }[] = [
  { id: 1, name: '강민채' },
  { id: 3, name: '권현서' },
  { id: 4, name: '김도은' },
  { id: 5, name: '김민솔' },
  { id: 6, name: '김아영' },
  { id: 7, name: '김지안' },
  { id: 8, name: '류승민' },
  { id: 9, name: '박시온' },
  { id: 10, name: '박시하' },
  { id: 11, name: '박지유' },
  { id: 12, name: '서지아' },
  { id: 13, name: '오예빈' },
  { id: 14, name: '유연진' },
  { id: 15, name: '이승혁' },
  { id: 16, name: '이온유' },
  { id: 17, name: '이재현' },
  { id: 18, name: '이지온' },
  { id: 19, name: '이현준' },
  { id: 20, name: '정민주' },
  { id: 21, name: '조세림' },
  { id: 22, name: '조은호' },
  { id: 23, name: '홍시우' },
  { id: 24, name: '홍주완' },
  { id: 25, name: '황유준' },
];

const initialStudents: Student[] = studentRoster.map(student => ({
  id: student.id,
  name: student.name,
  assignments: {
    pengTalk: { status: '', notes: '' },
    mindDiary: { status: '', notes: '' },
    bookReports: { status: '', notes: '' },
    mathWorkbook: { status: '', notes: '' },
  },
}));

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const handleAssignmentChange = useCallback((
    studentId: number,
    assignmentKey: keyof Assignments,
    field: 'status' | 'notes',
    value: AssignmentStatus | string
  ) => {
    setStudents(prevStudents =>
      prevStudents.map(student => {
        if (student.id === studentId) {
          const newAssignments = { ...student.assignments };
          newAssignments[assignmentKey] = {
            ...newAssignments[assignmentKey],
            [field]: value,
          };
          return { ...student, assignments: newAssignments };
        }
        return student;
      })
    );
  }, []);

  const handleNameChange = useCallback((studentId: number, name: string) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, name } : student
      )
    );
  }, []);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        <Header />
        <main className="mt-8">
          <div className="shadow-lg rounded-xl overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th scope="col" className="w-16 text-center py-3.5 px-3 text-sm font-semibold text-slate-900 sticky left-0 bg-slate-100 z-10">번호</th>
                    <th scope="col" className="w-40 py-3.5 px-3 text-left text-sm font-semibold text-slate-900 sticky left-16 bg-slate-100 z-10">이름</th>
                    {ASSIGNMENT_DETAILS.map(assignment => (
                      <React.Fragment key={assignment.key}>
                        <th scope="col" className="w-48 py-3.5 px-3 text-left text-sm font-semibold text-slate-900">
                          <div className="flex flex-col">
                              <span>{assignment.title}</span>
                              <span className="font-normal text-xs text-slate-500">{assignment.description}</span>
                          </div>
                        </th>
                        <th scope="col" className="min-w-[200px] py-3.5 px-3 text-left text-sm font-semibold text-slate-900">안한 내용 적기</th>
                      </React.Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {students.map(student => (
                    <StudentRow
                      key={student.id}
                      student={student}
                      onNameChange={handleNameChange}
                      onAssignmentChange={handleAssignmentChange}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
