import React from 'react';
import style from '../styles/blog.module.css'
import { getSession } from 'next-auth/react';

export default function blog({blog}) {
    console.log(blog)
  return (
    <>
    <div className={style.heading}>
        This is blog page {blog?.length}
    </div>

    </>

  )
}
export async function  getServerSideProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    const session = await getSession(context)
    if(!session){
      return{
        redirect:{
          destination:'/api/auth/signin?callbackUrl=http://localhost:3000/blog',
          permanent: false
        }
      }
    }
    return{
        props:{
            session,
            blog: data
        }
    }
}

