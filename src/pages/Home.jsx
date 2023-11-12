import  { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../components/Post'
const Home = () => {
    const [posts, setPosts] = useState([])


    const getPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div
    className="w-full flex justify-center items-center flex-col gap-5 "
    >
        <div className="w-[60%] mt-32 flex flex-col gap-2 justify-start items-start">
            
            <div className="mt-4 w-full grid grid-cols-1 gap-2 place-items-center">
                {
                    posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home