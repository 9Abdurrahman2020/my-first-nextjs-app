import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <div>
        <nav>
            <div>
              <h3>NEXTAUTH</h3>
            </div>
            <div>
                <Link href="/"><h3>Home</h3></Link>
                {
                  session && <Link href="/dashboard"><h3>Dashboard</h3></Link>
                }
                <Link href="/blog"><h3>Blog</h3></Link>
                { !session ? <Link href="/api/auth/signin"><h3 onClick={ (e) =>{
                  e.preventDefault()
                  signIn('github')
                }}>Sign In</h3></Link> : <Link href="/api/auth/signout"><h3 onClick={ (e) =>{
                  e.preventDefault()
                  signOut()
                }}>Sign Out</h3></Link>}
            </div>
        </nav>
    </div>
  )
}
