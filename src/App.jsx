// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { AttendanceForm } from './AttendanceForm';
import { StudentList } from './StudentList';
import scheduleData from './data/schedule.json';

const App = () => {
  const [sessions, setSessions] = useState([]);

  // Load and structure sessions from JSON file on component mount, with Arabic sorting
  useEffect(() => {
    const parsedSessions = Object.entries(scheduleData).flatMap(([day, times]) =>
      Object.entries(times).map(([time, students]) => ({
        day,
        time,
        students: students.sort((a, b) => a.name.localeCompare(b.name, 'ar')),
      }))
    );
    setSessions(parsedSessions);
  }, []);

  return (
    <div className="App">
      <h1 className="title">Student Attendance Tracker</h1>
      <div className="sessions">
        {sessions.map((session, index) => (
          <div key={index} className="session card">
            <h2>{session.day}</h2>
            <h3>{session.time}</h3>
            <StudentList students={session.students} sessionId={index} />
            <AttendanceForm sessionId={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
