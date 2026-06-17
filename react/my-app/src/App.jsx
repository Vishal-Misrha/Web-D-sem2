import Student from './student';

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Srishti"
        course="Computer Science"
        marks={90}
      />

      <Student
        name="yashi"
        course="Information Technology"
        marks={92}
      />

      <Student
        name="Vishal"
        course="Electronics"
        marks={88}
      />
    </div>
  );
}

export default App;