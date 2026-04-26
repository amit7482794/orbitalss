 import styles from "./page.module.css";

 export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-lg font-semibold">ORBITALS</h1>

        <div className="hidden md:flex gap-13 text-gray-300">
          <a href="#" class="text-gray-100 hover:text-yellow-400 transition duration-800 hover:underline hover:scale-130">
  Why us
</a>
  <a href="#" class="text-gray-100 hover:text-yellow-400 transition duration-800 hover:underline hover:scale-130">
  What you'll learn
</a>
  <a href="#" class="text-gray-100 hover:text-yellow-400 transition duration-800 hover:underline hover:scale-130">
  Pricing
</a> 
        </div>

        <button className= "bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-sky-700">
          Join now
        </button>
      </nav>
      
<div className="flex-1 flex items-center justify-center">
  <div className="bg-slate-800 p-11 rounded-2xl shadow-lg w-full max-w-md">

    <h1 className="text-3xl font-bold text-center mb-6">
      SignUp
    </h1>

    <form className="flex flex-col gap-4">
      
      <input
        type="Name"
        placeholder="Enter you name"
        className="px-4 py-3 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="email"
        placeholder="Email"
        className="px-4 py-3 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="px-4 py-3 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      
      <input
        type="password"
        placeholder="confirm password"
        className="px-4 py-3 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <button
        type="submit"
        className="bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition hover:bg-sky-700"
      >
        Login
      </button>

    </form>

  </div>
</div>
    </main>
  );
}