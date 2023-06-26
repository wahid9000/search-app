import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const Home = () => {
    const api_key = import.meta.env.VITE_Pixabay_Api_Key;

    const [images, setImages] = useState([]);
    console.log(images.hits);
    useEffect( () => {
        fetch(`https://pixabay.com/api/?key=${api_key}`)
        .then(res => res.json())
        .then(data => setImages(data))
    }, [api_key])

    return (
        <div className="mt-10">
            <div className="text-center flex items-center justify-center">
                <input type="text" placeholder="Search Here..." className="shadow-lg input input-bordered w-full max-w-xs" />
                <button className="ml-2 border btn capitalize shadow-lg"><FaSearch></FaSearch></button>
            </div>

            <div className='grid grid-cols-3 mt-20'>
                {
                    images.hits?.map(image => (
                        <div key={image.id}>
                            <img src={image.webformatURL} alt="" />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;