import Link from 'next/link'
import React from 'react'

function Nav() {
  const Links = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Services',
        link: '/services'
    },
    {
        id: 4,
        name: 'Contact',
        link: '/contact'
    },
  ]
  return (
    <nav className='w-full py-2 flex justify-center border-b'>
        <div className='w-10/12 flex justify-between'>
            <div>
                Logo
            </div>
            <div>
                <ul className='flex gap-16'>
                    {Links.map((l,i) => {
                        return <Link href={l.link} key={i}><li>{l.name}</li></Link>
                    })

                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav