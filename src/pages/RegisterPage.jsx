import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/RegisterPage.css'

const RegisterPage = () => {
  const {createUser} = useAuth()
  const {handleSubmit, register, reset, formState: {errors}} =  useForm({mode: 'onChange'})

  const submit = (data) => {
    createUser(data);
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'male',
    })
  }
  
  return (
    <section className='register flex-container'>
        <h2 className='register__title'>Register</h2>
        <form className='register__form grid-container' onSubmit={handleSubmit(submit)}>
          <label className='register__form-field grid-container'>
              <span className='register__form-label'>First Name</span>
              <input className='register__form-value' type="text" {...register('firstName')}/>
          </label>
          <label className='register__form-field grid-container'>
              <span className='register__form-label'>Last Name</span>
              <input className='register__form-value' type="text" {...register('lastName')}/>
          </label>
          <label className='register__form-field grid-container'>
              <span className='register__form-label'>Email</span>
              <input className='register__form-value' type="email" {...register('email')}/>
          </label>
          <label className='register__form-field grid-container'>
              <span className='register__form-label'>Password</span>
              <input className='register__form-value' type="password" suggested="current-password" name="password" {...register('password')}/>
          </label>
          <label className='register__form-field grid-container'>
              <span className='register__form-label'>Gender </span>
              <select className='register__form-select' {...register('gender')}>
                  <option className='register__form-option' value="male">Male</option>
                  <option className='register__form-option' value="female">Female</option>
                  <option className='register__form-option' value="other">Other</option>
              </select>
          </label>
          <button className='register__form-btn'>
              submit
          </button>
        </form>
    </section>
  )
}

export default RegisterPage
