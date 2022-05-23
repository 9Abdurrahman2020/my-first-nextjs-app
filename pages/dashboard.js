import React from 'react'
import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';

export default function dashboard() {
    const [ loading, setLoading ] = useState(true);
    useEffect( ()=>{
        const securePage = async ()=>{
            const session = await getSession();
            if(!session){
                signIn()
            }else{
                setLoading(false)
            }
        }
        securePage()
    },[])

    if( loading){
        return <h3>Loading...</h3>
    }

  return (
    <div>
        <h2>This is a Dashboard page !</h2>
    </div>
  )
}
