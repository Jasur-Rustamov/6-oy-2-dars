import "./index.css";
function Address(props) {
  const { region, zip } = props;
  return (
    <div className="adress">
      <h4>Adress:</h4>
      <p>Region: {region}</p>
      <p>Zip Code: {zip}</p>
    </div>
  );
}

export default Address;