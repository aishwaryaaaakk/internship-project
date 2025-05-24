import React from 'react';
import './Accounts.css';

const Accounts = () => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div className='acc-container'>
            <p className='acc-heading'> Account Settings</p>
        <div className='details-sec'>
            <div className='personal-details'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaPm1n_KOyg3u6OhydCl3LDtIlFaDE4TEWFiHynb6-hkXdmVpyrahF1Q&s' alt='img' />
                <div className='acc-details'>
                    <h5>{storedData.fullName}</h5>
                    <p>{storedData.email}</p>
                </div>
            </div>
            <div className='acc-text'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, corrupti corporis assumenda necessitatibus totam veniam doloribus commodi consectetur numquam itaque.</p>
            </div>
        </div>
    </div>
  )
}

export default Accounts;