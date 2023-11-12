import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Users = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const getUser = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getUser()
    }, [])
    // add al the data and style it
  return (
    <div
    className="w-full flex justify-center items-center flex-col gap-5 relative"
    >
        <div className="w-[60%] mt-32 flex flex-col gap-2 justify-start items-start">
            <p
            className=' text-cyan-600/80'
            >
            You can see all the users and posts here:
            </p>
            <div className="mt-4 w-full grid grid-cols-1 gap-2 place-items-center">
                <div
                className='w-full max-w-md flex flex-col gap-2 justify-start items-start relative rounded-md shadow-md p-2 col-span-1 border border-slate-600'
                >
                    <div className="w-full flex justify-between items-center">
                        <p
                        className="text-xs w-52 truncate  text-slate-600"
                        >
                            {user.name}
                        </p>
                        <div className="w-6 flex justify-center items-center h-6 bg-slate-400 rounded-full text-sm text-white text-center ">
                            <p>
                                {user.id}
                            </p>
                        </div>
                    
                    </div>
                    <p
                    className="text-xs mt-2 w-full  text-slate-600/70"
                    >
                        {user.email}
                    </p>
                    <p
                    className="text-xs mt-2 w-full  text-slate-600/70"
                    >
                        {user.phone}
                    </p>
                    <p
                    className="text-xs mt-2 w-full  text-slate-600/70"
                    >
                        {user.website}
                    </p>
                    <div className=" w-full flex justify-end items-center gap-3 ">
                        <p className="text-xs mt-2 w-full  text-slate-600/70">
                            {user.company?.name}
                        </p>
                        <p className="text-xs mt-2 w-full  text-slate-600/70">
                            {user.company?.catchPhrase}
                        </p>
                        <p className="text-xs mt-2 w-full  text-slate-600/70">
                            {user.company?.bs}
                        </p>
                    </div>
                    <div className="w-full flex justify-end items-center text-xs text-slate-400 mt-3">
                        <Link to={`/albums/${id}/`}>
                        <p>
                            see albums 
                        </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users