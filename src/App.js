import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>User List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;

/*import React, { useState } from 'react';
import { Paper } from '@mui/material';
const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the field when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no validation errors, you can proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Example validation rules
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex (you may want to use a more robust solution)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Paper style={{heihgt:"50px",width:"300px"}}>
      <center>
    <div>
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>
     <br></br>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
      <br></br>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
<br></br>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
          )}
        </div>
<br></br>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    </center>
    </Paper>
  );
};

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Mainpage = () => (
  
    <div>
      <h1>This is Mainpage</h1>
      <Link to="/returnpage" className="v2_21">
        Next Page
      </Link>
    </div>
  
);

const Returnpage = () => (
  
    <div>
      <h1>This is Next Page</h1>
      <Link to="/mainpage" className="v2_21">
        Back to mainpage
      </Link>
    </div>

);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/returnpage" element={<Returnpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*import React, { useState } from 'react';
 function App() {
  const [selectedValue, setSelectedValue] = useState(''); // State to manage selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <div className="dropdown-input">
          <select value={selectedValue} onChange={handleChange}>
            <option value="" disabled hidden>
              Select...
            </option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="meat">Meat</option>
            <option value="Groceries">Groceries</option>
            <option value="Snacks">Snacks</option>
            <option value="Footwears">Footwears</option>
          </select>
        </div>
      </div>
      You can use selectedValue in your application as needed 
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}
export default App;
/*import React,{useState} from 'react';
function App(){
  const[count,setCount]=useState(0);
  const handleAddClick=()=>{
    setCount( count +1);

  }
  const handleSubClick=()=>{
    setCount(count - 1);
  }
  return(
  <div>
    <center>
    <h1>Conditional Rendering:</h1>
     <button onClick={handleSubClick} style={{backgroundColor:'pink',width:'100px',height:'40px',fontSize:'25px'}}>-</button>&emsp;&emsp;
      Count:  {count}
      &emsp;&emsp;<button onClick={handleAddClick}style={{backgroundColor:'green',width:'100px',height:'40px',}}>+</button>&emsp;&emsp;
      </center>
  </div>

  )
}
export default App;

/*import React, { useState } from 'react';
import Searchbar from './Day-7/Searchbar';
import List from './Day-7/List';

const App = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (query) => {
    // Replace this with your actual data filtering logic
    const filteredData = dummyData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredItems(filteredData);
  };

  // Replace this with your actual data
  const dummyData = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <List items={filteredItems} />
    </div>
  );
};

export default App;
*/
