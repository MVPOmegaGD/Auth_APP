import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-4xl font-semibold text-center my-8'>Đăng Nhập</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='Email đăng ký' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChanges} />
        <input type='password' placeholder='Mật khẩu' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChanges} />

        <button disabled = {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Đăng Nhập'}
        </button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p>Bạn chưa có tài khoản?</p>
        <Link to="/signup">
          <span className='text-blue-500'>Đăng ký ngay</span>
        </Link>
      </div>
      <p className='text-red-500 mt-5'>{ error && 'Tên người dùng hoặc email đã tồn tại!' }</p>
    </div>
  )
}

export default Login