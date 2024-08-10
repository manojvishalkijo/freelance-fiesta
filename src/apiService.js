import axios from 'axios';
import { useEffect, useState } from 'react';

function UserCrud() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8084/api/auth/users');
      setUsers(result.data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8084/api/auth/register', {
        username,
        email,
        password
      });
      setMessage('User registered successfully');
      resetForm();
      loadUsers();
    } catch (error) {
      setMessage('User registration failed');
      console.error('Error registering user:', error);
    }
  };

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post('http://localhost:8084/api/auth/login', {
        username,
        password
      });
      setMessage(result.data);
      resetForm();
    } catch (error) {
      setMessage('Login failed');
      console.error('Error logging in:', error);
    }
  };

  const updateUser = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8084/api/auth/update/${id}`, {
        username,
        email,
        password
      });
      setMessage('User updated successfully');
      resetForm();
      loadUsers();
    } catch (error) {
      setMessage('User update failed');
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8084/api/auth/delete/${userId}`);
      setMessage('User deleted successfully');
      loadUsers();
    } catch (error) {
      setMessage('User deletion failed');
      console.error('Error deleting user:', error);
    }
  };

  const editUser = (user) => {
    setId(user.id);
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);
  };

  const resetForm = () => {
    setId('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  
}

export default UserCrud;
