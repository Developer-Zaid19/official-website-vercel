"use client"
import Image from "next/image";
// import { useRouter } from 'next/router';

export default function NotFound() {
  // const router = useRouter(); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-6">
      <ul className="flex items-center justify-center space-x-10 p-4">        
        <li className="text-center font-bold text-6xl text-(--textcolor)ray-800">
            <span className="block mb-1 text-5xl">404</span>
            <span className="block text-3xl font-semibold tracking-wide">Not Found</span>
            <span className="block text-lg font-normal text-(--textcolor)ray-600 leading-6">Wrong Address</span>
        </li>
        
        <li>
          <Image 
            src="/not-found.png" 
            alt="Wrong address"
            width={200} 
            height={200}
          />
        </li>
      </ul>
    </div>
  )
}


