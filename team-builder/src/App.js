import React, {useState} from 'react';
import './App.css';

const memberList = [{
  name: 'Cody',
  email: 'cody@cody.com',
  role: 'Web Dev'
},
];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}





function App() {
  const [members, setMembers] = useState(memberList)
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <header className="App-header">
      <h1>Team Members</h1>
      </header>

      {
        memberList.map((member) =>{
          return <div key={member.name}>{member.name}</div>;
        })
      }
    </div>
  );
}

export default App;
