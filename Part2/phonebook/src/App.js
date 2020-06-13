import React, { useState } from 'react'

const Filter = (props)=>{
  return (
    <div style={{height: 50}}>filter show with 
        <input value={props.filter} onChange={props.filterChange}/>
      </div>
  );
}

const PersonForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
    <div>
      name: <input value={props.newName} onChange={props.nameChange}/>
    </div>
    <div>number: <input value={props.phoneNumber} onChange={props.phoneNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = ({persons, filter})=>{
  return (
    <div>
      {persons.filter(p=>p.name.toLowerCase().includes(filter))
        .map(person=><div  key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )

}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('') 
  const [ filter, setFilter ] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(persons.findIndex(p=>p.name === newName) > -1)
      alert(`${newName} is already added to phonebook`);
    else{
      const person = {name: newName, number: phoneNumber};
      setPersons(persons.concat(person));
    }
  }
  console.log("phone:", phoneNumber);
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} filterChange={(e)=>setFilter(e.target.value)}/>
      
      <PersonForm
        handleSubmit={handleSubmit} 
        newName={newName} 
        nameChange={(e)=>setNewName(e.target.value)}
        phoneNumber={phoneNumber} 
        phoneNumberChange={(event)=>setPhoneNumber(event.target.value)}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App