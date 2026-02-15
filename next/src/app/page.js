import Image from "next/image";

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <h1 className="text-4xl font-bold text-center mt-8">WELCOME to Our Website</h1>
     <image src="src/app/favicon.ico"></image>
    </div>
  );
}
