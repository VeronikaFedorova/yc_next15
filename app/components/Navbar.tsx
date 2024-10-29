import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';import { cookies } from 'next/headers';

const Navbar = async () => {
  const session = await auth();
  const cookieStore = await cookies();
  
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={144} height={30}></Image>
        </Link>
        <div className='flex items-center gap-5 text-bleck'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>
              <button onClick={signOut}>
                <span>Logout</span>
              </button>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={signIn('github')}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
