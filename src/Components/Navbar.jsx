
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Search App</a>
                </div>
                <div className="flex-none">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/CB27syc/Wahid.jpg" />
                            </div>
                        </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;