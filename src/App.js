import logo from './logo.svg';
import './App.css';

function App() {
  const courseInfo = {
    courseTitle: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab Exercise",
    studentID: "101427560",
    studentName: "Bhavya vaghela",
    college: "George Brown College, Toronto"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{courseInfo.courseTitle}</h1>
        <h2>{courseInfo.subtitle}</h2>
        <p>{courseInfo.studentID}</p>
        <p>{courseInfo.studentName}</p>
        <p>{courseInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
