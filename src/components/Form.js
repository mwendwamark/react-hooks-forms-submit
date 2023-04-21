import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData,setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
  event.preventDefault();

  if (firstName.length >0){
const formData = {
    firstName: firstName,
    lastName: lastName,
  };
  const dataArray =[...submittedData, formData]
 setSubmittedData(dataArray)
  setFirstName("");
  setLastName("");
  setErrors([])
  }else{
    setErrors(["First name is required!"])
  }
  
}
const listOfSubmissions = submittedData.map((data ,index)=> {
  return (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  )
})
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} /><br /><br />
      <input type="text" onChange={handleLastNameChange} value={lastName} /><br /><br />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>Submissions</h3>
    <ol>
      {listOfSubmissions}
    </ol>
    
    </>
  );
}

export default Form;
