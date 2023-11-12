import   {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
const Posts = () => {
    const {id} = useParams()
    const [post , setPost] = useState([])
    const getPost = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPost(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getPost()
    }, [])
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
                            {post.title}
                        </p>
                        <div className="w-6 flex justify-center items-center h-6 bg-slate-400 rounded-full text-sm text-white text-center ">
                            <p>
                                {post.userId}
                            </p>
                        </div>
                    
                    </div>
                    <p
                    className="text-xs mt-2 w-full  text-slate-600/70"
                    >
                        {post.body}
                    </p>
                    <div className=" w-full flex justify-end items-center gap-3 ">
                        <AiOutlineHeart className=" cursor-pointer mt-2 text-red-500" />
                        <BsBookmark className=" cursor-pointer mt-2 text-sm  text-slate-500" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts