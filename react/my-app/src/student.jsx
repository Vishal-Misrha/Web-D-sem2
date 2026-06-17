function Student(props) {
    return (
        <div>
            <h2>Student Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
            <p>Marks: {props.marks}</p>

        </div>
    );
}
export default Student;