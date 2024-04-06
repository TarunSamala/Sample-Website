import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/NavBar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div class="container mt-24 mx-auto px-12 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-500 to-green-500">Hello</span> This is Loca<br></br>2024
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
      Unlock summer's potential: Dive into creativity, learning, and innovation. Explore endless possibilities at your fingertips.
      </p>
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-yellow-500 to-green-500 hover:bg-slate-200 text-white">Join Us!</button>
      </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-100 h-500">
      <Image
       src = "/Image/hero-image.png"
       alt = "hero image"
       width={500}
       height={500}
      />
      </div>
      </div>
      </div>
      </div>
    </main>
  );
}
