import Address from "../adress";
import Car from "../Car";
import "./index.css";

function User(props) {
  const { user } = props;
  return (
    <div className="user">
      <p>
        <b>Ismi Familiyasi: </b>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </p>
      <p>
        <b>Telefon: </b>
        {user.phone}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
      <Address region={user.address.region} zip={user.address.zip} />
      <div>
        <h4>Cars:</h4>
        {user.cars.length > 0 &&
          user.cars.map((car, index) => <Car key={index} car={car} />)}

        {user.cars.length == 0 && <p>Mashinasi yo'q</p>}
      </div>
    </div>
  );
}

export default User;
