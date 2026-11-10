import { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Initialize Vite React project', done: true },
    { id: 2, text: 'Create git feature branch', done: true },
    { id: 3, text: 'Write dashboard UI component', done: true },
    { id: 4, text: 'Push branch and open GitHub PR', done: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const completedCount = tasks.filter(t => t.done).length;

  return (
    <div style={{ maxWidth: '480px', margin: '40px auto', fontFamily: 'sans-serif', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h2 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>Dev Sprint Tracker</h2>
      <p style={{ margin: '0 0 20px 0', color: '#64748b', fontSize: '14px' }}>
        Progress: <strong>{completedCount} / {tasks.length}</strong> tasks completed
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              padding: '12px 16px',
              marginBottom: '8px',
              borderRadius: '8px',
              backgroundColor: task.done ? '#f0fdf4' : '#f8fafc',
              border: `1px solid ${task.done ? '#bbf7d0' : '#e2e8f0'}`,
              color: task.done ? '#166534' : '#334155',
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{task.text}</span>
            <span>{task.done ? '✓' : '○'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}