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
  username: 'Kade',
  email: 'kade@kade.com',
  role: 'Phone Salesman'
},
{
  id:3,
  username: 'Dalton',
  email: 'dalton@dalton.com',
  role: 'Student'
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

  const onInputChange = event =>{

    const name = event.target.name
    const value = event.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const rand = Math.random(100)
  
  const onSubmit = event => {
    event.preventDefault()

    const newFriend = {
    id: rand,
    username: formValues.username,
    email: formValues.email,
    role: formValues.role,
  }
  setMembers([ ...members, newFriend ])
  setFormValues(initialFormValues)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Team Members</h1>
      </header>

      {
        members.map((member) =>{
          return <div className='member-list' key={member.id}>

          <h2>{member.username}</h2>
          <p>Email: {member.email}</p>
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
