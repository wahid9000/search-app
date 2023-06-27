import { useEffect, useState } from 'react';
import { FaComments, FaEye, FaSearch, FaThumbsUp } from 'react-icons/fa';
import '../../src/index.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);

    const api_key = import.meta.env.VITE_Pixabay_Api_Key;
    const url = `https://pixabay.com/api/?key=${api_key}&q=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(searchQuery)}&colors=${encodeURIComponent(searchQuery)}&orientation=horizontal`


    useEffect(() => {
        if (searchQuery) {
            fetch(url)
                .then(res => res.json())
                .then(data => setImages(data))
        } else {
            setImages([])

        }

    }, [url, api_key, searchQuery])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <div className="mt-10 bg-img min-h-screen">

            <div className="text-center flex items-center justify-center">
                <FaSearch className='absolute left-[10%] md:left-[30%] lg:left-[39%]'></FaSearch>
                <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search By Name, Category or etc..." className="pl-10 shadow-lg input input-bordered w-full max-w-xs" />
            </div>

            {searchQuery === '' && <p className='text-center mt-32 italic'>No Picture To Display. Please search above...</p>}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5 justify-center'>
                {
                    images.hits?.map(image => (
                        <div key={image.id} className="card card-compact mx-auto w-full md:w-96 bg-base-100 shadow-xl">

                            <figure><img src={image.webformatURL} className='rounded-lg h-48 shadow-lg mt-5 px-5' alt="chef" /></figure>

                            <div className="card-body mt-2">
                                <div className='flex justify-evenly mt-2'>
                                    <div className='flex items-center gap-1.5'>
                                        <FaEye className='text-lg text-green-700'></FaEye>
                                        <p>{image.views} views</p>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <FaThumbsUp className='text-lg text-blue-500'></FaThumbsUp>
                                        <p>{image.likes} likes</p>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <FaComments className='text-lg text-blue-500'></FaComments>
                                        <p>{image.comments} comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;



