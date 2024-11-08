// StudentList.js
import React, { useState } from 'react';
import './StudentList.css';

export const StudentList = ({ students }) => {
  const [attendanceStatus, setAttendanceStatus] = useState({});

  const handleAttendanceToggle = (studentId) => {
    setAttendanceStatus((prevStatus) => ({
      ...prevStatus,
      [studentId]: !prevStatus[studentId],
    }));
  };

  return (
    <div className="student-list">
      <h4>Students:</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Participation</th>
            <th>Project</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="student-row">
              <td>{student.name}</td>
              <td>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={attendanceStatus[student.id] || false}
                    onChange={() => handleAttendanceToggle(student.id)}
                  />
                  <span className="checkmark">
                    {attendanceStatus[student.id] && <span className="check">✔</span>}
                  </span>
                </label>
              </td>
              <td><input type="text" placeholder="Participation" /></td>
              <td><input type="text" placeholder="Project" /></td>
              <td><input type="text" placeholder="Comments" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
