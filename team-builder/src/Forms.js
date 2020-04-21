import React from 'react'




const Forms = (props) => {

const {values, onInputChange, onSubmit,} = props

return(
  <form className='member-container'>
    <h2>Friend Form</h2>
    <label>Username:&nbsp;
    <input
      value={values.username}
      onChange={onInputChange}
      name='username'
      type='text'

    /></label>
    <label>Email:&nbsp;
    <input
      value={values.email}
      onChange={onInputChange}
      name='email'
      type='text'
      /></label>

      <label>Role:&nbsp;
      <input
      value={values.role}
      onChange={onInputChange}
      name='role'
      type='text'
      /></label>










<button onClick={onSubmit}>submit</button>


  </form>
)


}


export default Forms;
