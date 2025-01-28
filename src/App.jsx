import UserList from "./components/userLIst";
import users from "./user.json";

function App() {
  return (
    <div className="App">
      <UserList users = {users} />
    </div>
  );
}

export default App;