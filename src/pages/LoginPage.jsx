import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css'
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [userLogged, setuserLogged] = useState()
  const {handleSubmit, reset, register } = useForm();
  const {loginUser} = useAuth();
  const navigate = useNavigate()

  const submit = (data) => {
    loginUser(data)
    reset({
      email: '',
      password: '',
    });
    navigate('/');
    Swal.fire({
      title: "You are now logged!",
      text: "Welcome to Acadmlo Hotels",
      icon: "success",
      confirmButtonColor: '#000',
    })
  }

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('userLogged');
    if(userFromLocalStorage) {
      const parsedUser = JSON.parse(userFromLocalStorage);
      setuserLogged(parsedUser);
    }
  }, [])

  const handleDeleteLocalStorage = () => {

    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "You can login again",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#999",
      cancelButtonColor: "#ea4959",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('userLogged');
        navigate('/');
        Swal.fire({
          title: "Logout!",
          text: "Succesfully logged out",
          icon: "success",
          confirmButtonColor: "#000",
        });
      }
    });
  }
  

  return (
    <section className=' login flex-container'>
      {
        userLogged ? (
          <div>
            {
              userLogged === 'female' ? <i className='bx bx-female user__logo' ></i> : <i className='bx bx-body user__logo'></i> 
            } 
            <h2 className='user__welcome'>
              {'Welcome, '}{' '}
              <span className='user__name'>{userLogged.firstName} {userLogged.lastName}</span>
            </h2>
            <button className='user__btn' onClick={handleDeleteLocalStorage}>Logout</button>
          </div>
        ) : (
          <div>
            <i className='bx bxs-user-circle ' ></i>
            <form className='user__form flex-container' onSubmit={handleSubmit(submit)}>
              <h2 className='user__name'>Login user</h2>
              
                <label className='user__form-field grid-container'>
                  <span className='user__form-label'>Email</span>
                  <input className='user__form-input' type="text" {...register('email')} />
                </label>
                <label className='user__form-field grid-container'>
                  <span className='user__form-label'>Password</span>
                  <input className='user__form-input' type="password" {...register('password')} />
                </label>
              <button className='user__btn user__btn-login'>Submit</button>
            </form>
          </div>
        )
      } 
    </section>
  )
}

export default LoginPage
