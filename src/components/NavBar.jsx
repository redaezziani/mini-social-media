
const NavBar = () => {
  return (
    <nav
    className="w-[60%] bg-white px-7 fixed top-1  py-3 flex justify-between items-center  rounded-md shadow-md"
    >
        <div className="logo">
            <h1 className="text-xl text-cyan-600  font-bold">UnityNet</h1>
        </div>
       <div className="min-w-[80] flex justify-start items-center gap-2 rounded-sm border-cyan-500/20 border">
              <input type="text" placeholder="Search" className="w-full placeholder:text-sm h-full px-2 py-1 rounded-sm outline-none bg-transparent" />
              <button className="bg-cyan-500 text-white px-2 py-1 rounded-sm">Search</button>
       </div>
    </nav>
  )
}

export default NavBar