import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between px-6 py-6'>
            <Link to='/'>
                <h1 className='text-4xl font-bold'>Minh Auth App</h1>
            </Link>
            <ul className='flex text-2xl items-center justify-between gap-8'>
                <Link to='/'><li>Trang chủ</li></Link>
                <Link to='/about'><li>Về chúng tôi</li></Link>
                <Link to='/login'><li>Đăng nhập</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBar