import Image from 'next/image'
import React from 'react'
import profilePic from "../../../assets/img/pexels-karolina-grabowska-7876050.jpg"

function MainHero() {
  return (
    <div className='w-full flex h-[80vh] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
        <div className='w-1/2 flex h-full'>
            <p className='m-auto w-2/3 text-2xl text-white'>
                Discover Mo & Co: Your gateway to innovative 
                software solutions. We&#96;re passionate developers 
                turning ideas into high-performance applications. 
                Explore our services, trend insights, and collaborate 
                to craft user-centric software. Join us in the coding 
                adventure, where creativity meets functionality for a 
                connected world            
            </p>
        </div>
        <div className='w-1/2'>
            <Image
            src={profilePic}
            alt="Picture of the author"
            width={500} //automatically provided
            height={500} //automatically provided
            blurDataURL="data:..." //automatically provided
            placeholder="blur" // Optional blur-up while loading
            />

        </div>
    </div>
  )
}

export default MainHero