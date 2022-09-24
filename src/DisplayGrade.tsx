export default function DisplayGrade(props: displayGradeProps) {
  function display(grade: number) {
    if (grade >= 90) {
      return (
        <div>
          <h3>Excellent</h3>
        </div>
      );
    } else if (grade <= 90 && grade > 80) {
      return (
        <div>
          <h3>Very Good</h3>
        </div>
      );
    } else if (grade >= 0 && grade <= 80) {
      return (
        <div>
          <h3>Better luck next time</h3>
        </div>
      );
    } else {
      throw 'this is imposible!';
    }
  }
  return <>{display(props.grade)}</>;
}
interface displayGradeProps {
  grade: number;
}
