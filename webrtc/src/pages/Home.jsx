import React from 'react'

function Home() {
    return (
        <div className='flex bg-slate-500 '>
            <div className=''>
                <input type="email" placeholder='Enter your email' />
                <input type="text" placeholder='Enter room code' />
                <button>Enter room</button>
            </div>
        </div>
    )
}

export default Home