import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const Home = () => {
    const api_key = import.meta.env.VITE_Pixabay_Api_Key;
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);


    useEffect(() => {
        if (searchQuery) {
            fetch(`https://pixabay.com/api/?key=${api_key}&q=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(searchQuery)}&colors=${encodeURIComponent(searchQuery)}&orientation=horizontal`)
                .then(res => res.json())
                .then(data => setImages(data))
        } else{
            setImages([])
            
        }

    }, [api_key, searchQuery])

    const handleSearch = (event) => {
   
        setSearchQuery(event.target.value);
    };


    return (
        <div className="mt-10">
         
                <div className="text-center flex items-center justify-center">
                    <FaSearch className='absolute left-[39%]'></FaSearch>
                    <input type="text" value={searchQuery} onChange={handleSearch} placeholder= "Search For Images..." className="pl-10 shadow-lg input input-bordered w-full max-w-xs" />
                </div>
        

            <div className='grid grid-cols-3 mt-20 gap-5'>
                {
                    images.hits?.map(image => (
                        <div key={image.id} >
                            <img src={image.webformatURL} alt="" />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;