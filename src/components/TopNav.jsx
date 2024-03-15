const TopNav = () => {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row gap-2 lg:gap-0 justify-center lg:justify-between items-end lg:items-center px-4 lg:px-0">
            <h1 className="text-2xl font-medium w-full text-center lg:text-left lg:max-w-96">Duas Page</h1>
            <div className="w-full lg:w-[620px]">
                <div className="flex justify-end w-full">
                    <label className="input input-bordered hidden lg:flex flex-col lg:flex-row items-center justify-end p-2 gap-2 w-full lg:w-1/2 relative">
                        <input type="text" className="grow" placeholder="Search" />
                        <button className="bg-gray-100 py-2 px-4 absolute right-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-7"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                        </button>
                    </label>
                    <div className="flex flex-col items-center justify-center gap-4 lg:hidden w-full">
                    <input type="text" className="w-full p-4 rounded-xl" placeholder="Search" />
                    <button className="btn w-full">Search</button>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <img src="profile.png" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686" />
                </svg>
                <div className="2xl:hidden cursor-pointer">
                    <img src="settings.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopNav;