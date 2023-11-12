import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
const Albums = () => {
    const { id } = useParams()
    const [photos, setPhotos] = useState([])
    // get the photos fro the user 
    const getAlbum = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        setPhotos(response.data)
        console.log(response.data)

    }
    useEffect(() => {
        getAlbum()
    }, [])

  return (
    <div className="w-[70%] mt-20 flex flex-col gap-5">
        <Link
        to="/"
        className="text-slate-600/80"
        >
            Home
        </Link>
        <Link
        to={`/users/${id}`}
        className="text-cyan-600/50 text-sm"
        >
            Back to user
        </Link>
        
            <div className=" w-full grid  grid-cols-4 gap-3 place-items-center">
        {
            photos.map((photo) => (
                
                    <div
                    key={photo.id}
                    className="w-full col-span-1 rounded-md overflow-hidden ">
                        <img
                        src={photo.url}
                        className='w-full h-full object-cover'
                        alt="" />
                    </div>
                
            ))
        }
    </div>
    </div>
  )
}

export default Albums