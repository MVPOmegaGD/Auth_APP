import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <div className='bg-orange-200 flex justify-between px-6 py-6'>
        <Link to='/'>
          <h1 className='text-4xl font-bold'>Minh Auth App</h1>
        </Link>
        <ul className='flex text-2xl items-center justify-between gap-8'>
          <Link to='/'><li>Trang chủ</li></Link>
          <Link to='/about'><li>Về chúng tôi</li></Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-10 w-10 rounded-full object-cover'/>
            ) : (
              <li>Đăng nhập</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar