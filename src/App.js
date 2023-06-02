import React from 'react';
import AddUser from './component/user/AddUser';
import Userlist from './component/user/Userslist';


function App() {
  return (
    <div>
<AddUser/>
<Userlist users ={[]}/>
    </div>
  );
}

export default App;
