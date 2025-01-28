import './index.css'
function Car(props) {
  const {car} = props
  return (
    <div className="cars">
      <span> {car}</span>
    </div>
  );
}

export default Car;