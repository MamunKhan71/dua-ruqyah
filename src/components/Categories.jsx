import { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
const Categories = ({ catShow }) => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    useEffect(() => {
        fetch('sub_category.json')
            .then(res => res.json())
            .then(data => setSubCategory(data))
    }, [])

    const [visibleCat, setVisibleCat] = useState([]);

    const toggleCategory = catId => {
        if (visibleCat === catId) {
            setVisibleCat(null);
        } else {
            catShow(catId);
            setVisibleCat(catId);
        }
    }
    return (
        <div className="max-w-96 space-y-3 bg-white font-inter">
            <div className="bg-[#1FA45B] rounded-t-xl py-4 text-center">
                <p className="text-white font-semibold">Categories</p>
            </div>
            <div className="px-4">
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                    <input type="text" className="grow" placeholder="Search by Categories" />
                </label>
            </div>
            <div className=" h-dvh overflow-y-scroll font-inter">
                <div className="bg-white rounded-xl flex flex-col font-inter">
                    <div className="p-4 space-y-4">

                        {
                            category.map(cat => (
                                <>
                                    <div onClick={() => toggleCategory(cat.cat_id)} className="w-full flex justify-between items-center cursor-pointer bg-[#E8F0F5] p-2 rounded-md min-w-[340px]">
                                        <div className="flex gap-4 items-center justify-start">
                                            <img className="w-12 h-12 p-2 rounded-md bg-gray-200" src="dua.png" alt="" />
                                            <div>
                                                <p className="font-medium text-[#1FA45B]">{cat.cat_name_en}</p>
                                                <p>Subcategory: {cat.no_of_subcat}</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p><strong>{cat.no_of_dua}</strong></p>
                                            <p>Duas</p>
                                        </div>

                                    </div>
                                    {
                                        <Transition
                                            show={visibleCat === cat.cat_id}
                                            enter="transition-all ease-in-out duration-200"
                                            enterFrom="opacity-0 translate-y-6"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition-all ease-in-out duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div>
                                                <ul className="list-disc list-inside font-medium">
                                                    {subCategory
                                                        .filter(SubCat => SubCat.cat_id === visibleCat)
                                                        .map(gCat => (
                                                            <li key={gCat.subcat_id}>{gCat.subcat_name_en}</li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </Transition>
                                    }
                                    
                                </>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;