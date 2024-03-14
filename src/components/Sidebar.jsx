const Sidebar = () => {
    return (
        <div className="w-96 rounded-xl flex flex-col items-end gap-7">
            <div className="flex gap-4 items-center">
                <img src="profile.png" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686" />
                </svg>
            </div>
            <div className="bg-white px-5 pt-8 w-full space-y-4 rounded-[32px]">
                <h1 className="text-center font-bold text-xl">Settings</h1>
                <div className="flex flex-col gap-4">
                    <div className="bg-[#F7F8FA] p-3 rounded-lg">
                        <div className=" flex gap-2 rounded-lg items-center">
                            <button className='flex items-center justify-center bg-[#E8F0F5] h-12 w-12 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className="text-[#868686]">Language Settings</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F8FA] p-3 rounded-lg">
                        <div className=" flex gap-2 rounded-lg items-center">
                            <button className='flex items-center justify-center bg-[#E8F0F5] h-12 w-12 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7H17M19 11H5H19ZM19 11C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11H19ZM19 11V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7L19 11ZM5 11V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7L5 11ZM7 7V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7H7Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p className="text-[#868686]">General Settings</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F8FA] p-3 rounded-lg">
                        <div className=" flex gap-2 rounded-lg items-center">
                            <button className='flex items-center justify-center bg-[#E8F0F5] h-12 w-12 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z" stroke="#868686" stroke-width="1.5" />
                                    <path d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z" stroke="#868686" stroke-width="1.5" />
                                    <path d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z" stroke="#868686" stroke-width="1.5" />
                                    <path d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z" stroke="#868686" stroke-width="1.5" />
                                </svg>
                            </button>
                            <p className="text-[#868686]">Font Settings</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F8FA] p-3 rounded-lg">
                        <div className=" flex gap-2 rounded-lg items-center">
                            <button className='flex items-center justify-center bg-[#E8F0F5] h-12 w-12 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z" stroke="#1FA45B" stroke-width="1.5" />
                                    <path d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z" stroke="#1FA45B" stroke-width="1.5" />
                                    <path d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z" stroke="#1FA45B" stroke-width="1.5" />
                                    <path d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z" stroke="#1FA45B" stroke-width="1.5" />
                                </svg>
                            </button>
                            <p className="text-[#1FA45B] font-bold">Appearance Settings</p>
                        </div>
                    </div>
                    <div className="rounded-lg pb-8">
                        <div className=" flex gap-2 rounded-lg items-center justify-between">
                            <p>Night Mode</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                <line x1="13" y1="8" x2="25" y2="8" stroke="#C1C1C1" stroke-opacity="0.7" stroke-width="10" stroke-linecap="round" />
                                <circle cx="8" cy="8" r="8" fill="#A4A4A4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;