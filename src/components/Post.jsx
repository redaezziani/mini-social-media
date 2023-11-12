import { Link } from "react-router-dom"

const Post = ({...post}) => {
    const { title, body, userId, id } = post
  return (
    <div
    className='w-full max-w-md flex flex-col gap-2 justify-start items-start relative rounded-md shadow-md p-2 col-span-1 border border-slate-600'
    >
        <div className="w-full flex justify-between items-center">
            <p
            className="text-xs w-52 truncate  text-slate-600"
            >
                {title}
            </p>
            <div className="w-6 flex justify-center items-center h-6 bg-slate-400 rounded-full text-sm text-white text-center ">
                <Link to={`/users/${userId}`}>
                <p>
                    {userId}
                </p>
                </Link>
            </div>
           
        </div>
        <p
        className="text-xs mt-2 w-full  text-slate-600/70"
        >
            {body}
        </p>
        <div className="flex mt-2 w-full  justify-end items-center  gap-2">
            <Link to={`/posts/${id}`}>
                <button
                className="text-slate-500 text-xs "
                >
                    See more
                </button>
            </Link>  
        </div>
    </div>
  )
}

export default Post