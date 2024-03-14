const Categories = () => {
    return (
        <div className="max-w-96 space-y-3">
            <div>
                <div className="bg-white rounded-t-xl flex flex-col">
                    <div className="bg-[#1FA45B] rounded-t-xl py-4 px-32">
                        <p className="text-white font-semibold">Categories</p>
                    </div>
                    <div className="p-4 space-y-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search by Categories" />
                        </label>
                        <div className="w-full flex justify-between items-center bg-[#E8F0F5] p-2 rounded-md">
                            <div className="flex gap-4 items-center justify-start">
                                <img className="w-12 h-12 p-2 rounded-md bg-gray-200" src="dua.png" alt="" />
                                <div>
                                    <p className="font-medium text-[#1FA45B]">Introduction to Dua</p>
                                    <p>Subcategory: 11</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p><strong>15</strong></p>
                                <p>Duas</p>
                            </div>

                        </div>
                        <div>
                            <ul className="list-disc list-inside font-medium">
                                <li>What is Dua</li>
                                <li>Conditions for Dua to be successful</li>
                                <li>The Method Of Dua</li>
                                <li>Before Dua</li>
                            </ul>
                        </div>
                        <div className="w-full flex justify-between items-center  p-2 rounded-md">
                            <div className="flex gap-4 items-center justify-start">
                                <img className="w-12 h-12 p-2 rounded-md bg-gray-200" src="dua.png" alt="" />
                                <div>
                                    <p className="font-medium text-[#1FA45B]">Introduction to Dua</p>
                                    <p>Subcategory: 11</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p><strong>15</strong></p>
                                <p>Duas</p>
                            </div>

                        </div>
                        <div className="w-full flex justify-between items-center  p-2 rounded-md">
                            <div className="flex gap-4 items-center justify-start">
                                <img className="w-12 h-12 p-2 rounded-md bg-gray-200" src="dua.png" alt="" />
                                <div>
                                    <p className="font-medium text-[#1FA45B]">Introduction to Dua</p>
                                    <p>Subcategory: 11</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p><strong>15</strong></p>
                                <p>Duas</p>
                            </div>

                        </div>
                        <div className="w-full flex justify-between items-center  p-2 rounded-md">
                            <div className="flex gap-4 items-center justify-start">
                                <img className="w-12 h-12 p-2 rounded-md bg-gray-200" src="dua.png" alt="" />
                                <div>
                                    <p className="font-medium text-[#1FA45B]">Introduction to Dua</p>
                                    <p>Subcategory: 11</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p><strong>15</strong></p>
                                <p>Duas</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;