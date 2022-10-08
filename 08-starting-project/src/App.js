import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
const userlist=[
  {
    id: 'e1',
    name: 'Yin',
    age: 10,
  },
];
const [users,setUsers]=useState(userlist);
const addUserHandler = (user)=>{
  setUsers((preUsers)=>{
    return [...preUsers,user];
  })
}
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
