const { useState } = React;

// ==================== SEMESTER DATA ====================
const semesterData = {
    '1-1': {
        title: 'I Year - I Semester',
        courses: [
            // Add your semester 1-1 data here
        ]
    },
    '1-2': {
        title: 'I Year - II Semester',
        courses: []
    },
    '2-1': {
        title: 'II Year - I Semester',
        courses: []
    },
    '2-2': {
        title: 'II Year - II Semester',
        courses: []
    },
    '3-1': {
        title: 'III Year - I Semester',
        courses: []
    },
    '3-2': {
        title: 'III Year - II Semester',
        courses: []
    },
    '4-1': {
        title: 'IV Year - I Semester',
        courses: [
            { code: 'A1532', name: 'CRYPTOGRAPHY AND NETWORK SECURITY', month: 'November 2025', grade: 'B', gradeClass: 'grade-b', points: 6, credits: 3.00, result: 'P' },
            { code: 'A1754', name: 'DATA MINING', month: 'November 2025', grade: 'B+', gradeClass: 'grade-b-plus', points: 7, credits: 3.00, result: 'P' },
            { code: 'A1534', name: 'DEVOPS', month: 'November 2025', grade: 'A', gradeClass: 'grade-a', points: 9, credits: 3.00, result: 'P' },
            { code: 'A1594', name: 'PRINCIPLES OF ENTREPRENEURSHIP', month: 'November 2025', grade: 'A', gradeClass: 'grade-a', points: 9, credits: 3.00, result: 'P' },
            { code: 'A1576', name: 'SOFTWARE PROCESS & PROJECT MANAGEMENT', month: 'November 2025', grade: 'A', gradeClass: 'grade-a', points: 9, credits: 3.00, result: 'P' },
            { code: 'A1533', name: 'CRYPTOGRAPHY AND NETWORK SECURITY LAB', month: 'November 2025', grade: 'A', gradeClass: 'grade-a', points: 8, credits: 1.00, result: 'P' },
            { code: 'A1535', name: 'DEV OPS LAB', month: 'November 2025', grade: 'A+', gradeClass: 'grade-a', points: 10, credits: 1.00, result: 'P' },
            { code: 'A1536', name: 'PROJECT STAGE-I', month: 'November 2025', grade: 'A+', gradeClass: 'grade-a', points: 10, credits: 3.00, result: 'P' }
        ]
    }
};

// ==================== LOGIN COMPONENT ====================
function LoginPage({ onLogin }) {
    const [rollNo, setRollNo] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rollNo && password) {
            onLogin(rollNo);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <div className="logo-icon"></div>
                    <div className="login-subtitle">WELCOME</div>
                    <div className="login-title">SREYAS</div>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Roll Number</label>
                            <input 
                                type="text" 
                                placeholder="Enter your roll number"
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-btn">Log In</button>
                        <div className="form-footer">
                            Enter your credentials to view academic results
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// ==================== RESULTS COMPONENT ====================
function ResultsPage({ rollNo, onLogout }) {
    return (
        <div className="results-page">
            <div className="header">
                <div className="header-logo">
                    <div className="header-icon"></div>
                    <div className="header-title">SREYAS</div>
                </div>
                <button className="logout-btn" onClick={onLogout}>Logout</button>
            </div>

            <div className="student-banner">
                <div className="student-photo">SVN</div>
                <div className="student-info">
                    <div className="student-name">22VE1A0560-SUDINI VENKAT NARAYAN REDDY</div>
                    <div className="student-roll">Roll No: 22VE1A0560</div>
                    <div className="student-email">svnreddy63@gmail.com</div>
                </div>
            </div>

            <div className="content">
                {Object.keys(semesterData).map(semKey => {
                    const sem = semesterData[semKey];
                    return (
                        <div key={semKey} className="semester-section">
                            <div className="semester-title">{sem.title}</div>
                            
                            {sem.courses.length === 0 ? (
                                <div className="no-data">Course data will be added soon. Provide the information to add it here.</div>
                            ) : (
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Course Code</th>
                                                <th>Course Name</th>
                                                <th>Month Year</th>
                                                <th>Grade</th>
                                                <th>Grade Points</th>
                                                <th>Credits</th>
                                                <th>Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sem.courses.map((course, idx) => (
                                                <tr key={idx}>
                                                    <td className="course-code">{course.code}</td>
                                                    <td>{course.name}</td>
                                                    <td>{course.month}</td>
                                                    <td><span className={`grade ${course.gradeClass}`}>{course.grade}</span></td>
                                                    <td>{course.points}</td>
                                                    <td>{course.credits.toFixed(2)}</td>
                                                    <td className="result-p">{course.result}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ==================== MAIN APP COMPONENT ====================
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [rollNo, setRollNo] = useState('');

    const handleLogin = (roll) => {
        setRollNo(roll);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRollNo('');
    };

    return isLoggedIn ? 
        <ResultsPage rollNo={rollNo} onLogout={handleLogout} /> : 
        <LoginPage onLogin={handleLogin} />;
}

// ==================== RENDER APP ====================
ReactDOM.render(<App />, document.getElementById('root'));
