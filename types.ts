
export type AssignmentStatus = 'O' | 'X' | '';

export interface AssignmentDetail {
  status: AssignmentStatus;
  notes: string;
}

export interface Assignments {
  pengTalk: AssignmentDetail;
  mindDiary: AssignmentDetail;
  bookReports: AssignmentDetail;
  mathWorkbook: AssignmentDetail;
}

export interface Student {
  id: number;
  name: string;
  assignments: Assignments;
}
