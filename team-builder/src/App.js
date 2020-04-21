import React, {useState} from 'react';
import './App.css';
import Forms from './Forms'

const memberList = [{
  id: 1,
  username: 'Cody',
  email: 'cody@cody.com',
  role: 'Web Dev Student'
},
{
  id: 2,
  username: 'Nate',
  email: 'nate@nate.com',
  role: 'Web Dev Student'
},
{
  id:3,
  username: 'Joseph',
  email: 'joseph@joseph.com',
  role: 'TL'
}
];

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}





function App() {
  const [members, setMembers] = useState(memberList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt =>{

    const username = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [username]: value
    })
  }
  const onSubmit = evt => {
    evt.preventDefault()

    const newFriend = {
    name: formValues.name,
    email: formValues.email,
    role: formValues.role,
  }
  setMembers([...members, newFriend])
  setFormValues(initialFormValues)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Team Members</h1>
      </header>

      {
        memberList.map((member) =>{
          return <div className='member-list' key={member.id}>

          <h2>{member.username}</h2>
          <div>Email: {member.email}</div>
          <p>Role: {member.role}</p>



          </div>;
        })
      }
      <Forms
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
       />
    </div>
  );
}

export default App;
