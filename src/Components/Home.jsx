import { FaSearch } from 'react-icons/fa';


const Home = () => {
    return (
        <div className="mt-10">
            <div className="text-center flex items-center justify-center">
                <input type="text" placeholder="Search Here..." className="shadow-lg input input-bordered w-full max-w-xs" />
                <button className="ml-2 border btn capitalize shadow-lg"><FaSearch></FaSearch></button>
            </div>

        </div>
    );
};

export default Home;