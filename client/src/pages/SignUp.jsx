import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-4xl font-semibold text-center my-8'>Đăng Ký Ngay</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Tên người dùng' id='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='email' placeholder='Email đăng ký' id='email' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='password' placeholder='Mật khẩu' id='password' className='bg-slate-100 p-3 rounded-lg'/>

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Đăng ký</button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p>Bạn đã có tài khoản?</p>
        <Link to="/login">
          <span className='text-blue-500'>Đăng nhập</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp