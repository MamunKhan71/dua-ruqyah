import { useEffect } from "react";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import PlayAudio from "./PlayAudio";
const MainContent = ({ currentCat }) => {
    const [contents, setContent] = useState([]);
    useEffect(() => {
        fetch('dua.json')
            .then(res => res.json())
            .then(data => setContent(data));
    }, [])

    return (
        <div className="font-inter lg:w-full 2xl:w-1/2 space-y-4 overflow-scroll h-dvh">
            <div className="bg-white p-4 font-medium w-full rounded-lg">
                <p className="w-full"><span className="text-[#1FA45B]">Section</span> The Servant dependent on his lord</p>
            </div>
            {

                contents.filter(cntents => cntents.cat_id === currentCat).map(content => (
                    <>

                        <div className="bg-white rounded-lg p-4 space-y-7 font-medium">
                            <div className="flex items-center gap-4  font-bold text-[#1FA45B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8233 2.41379L12.4054 4.82759H8.80159H5.19788L5.01277 5.01277L4.82759 5.19788V8.80159V12.4054L2.41379 14.8233C0.193254 17.0478 0 17.2619 0 17.4978C0 17.7336 0.193858 17.9487 2.41379 20.1755L4.82759 22.5967V26.1995V29.8021L5.01277 29.9872L5.19788 30.1724H8.80054H12.4033L14.8245 32.5862C17.043 34.7979 17.2671 35 17.5 35C17.7329 35 17.957 34.7979 20.1755 32.5862L22.5967 30.1724H26.1995H29.8021L29.9872 29.9872L30.1724 29.8021V26.1995V22.5967L32.5862 20.1755C34.7979 17.957 35 17.7329 35 17.5C35 17.2671 34.7979 17.043 32.5862 14.8245L30.1724 12.4033V8.80054V5.19788L29.9872 5.01277L29.8021 4.82759H26.1995H22.5967L20.1755 2.41379C17.9487 0.193858 17.7336 0 17.4978 0C17.2619 0 17.0478 0.193254 14.8233 2.41379ZM19.8019 3.77155L22.0693 6.03448H25.5174H28.9655V9.48259V12.9307L31.2456 15.2153L33.5258 17.5L31.2456 19.7847L28.9655 22.0693V25.5174V28.9655H25.5174H22.0693L19.7847 31.2456L17.5 33.5258L15.2153 31.2456L12.9307 28.9655H9.48259H6.03448V25.5174V22.0693L3.75435 19.7847L1.47422 17.5L3.75435 15.2153L6.03448 12.9307V9.48259V6.03448H9.48289H12.9313L15.1968 3.77193C16.4428 2.52747 17.4785 1.50915 17.4984 1.509C17.5183 1.50877 18.5548 2.52694 19.8019 3.77155ZM15.4272 6.63793L13.6113 8.44828H11.2149H8.81857L8.63346 8.63346L8.44828 8.81857V11.2149V13.6113L6.63793 15.4272C4.99218 17.078 4.82759 17.2662 4.82759 17.4971C4.82759 17.728 4.99301 17.9175 6.63793 19.5713L8.44828 21.3913V23.7864V26.1814L8.63346 26.3665L8.81857 26.5517H11.2136H13.6087L15.4287 28.3621C17.0742 29.9987 17.273 30.1724 17.5 30.1724C17.727 30.1724 17.9258 29.9987 19.5713 28.3621L21.3913 26.5517H23.7864H26.1814L26.3665 26.3665L26.5517 26.1814V23.7864V21.3913L28.3621 19.5713C29.9987 17.9258 30.1724 17.727 30.1724 17.5C30.1724 17.273 29.9987 17.0742 28.3621 15.4287L26.5517 13.6087V11.2136V8.81857L26.3665 8.63346L26.1814 8.44828H23.7864H21.3913L19.5713 6.63793C17.9175 4.99301 17.728 4.82759 17.4971 4.82759C17.2662 4.82759 17.078 4.99218 15.4272 6.63793ZM19.1989 7.99569L20.8644 9.65517H23.1046H25.3448V11.8954V14.1356L27.021 15.8178L28.6971 17.5L27.021 19.1822L25.3448 20.8644V23.1046V25.3448H23.1046H20.8644L19.1822 27.021L17.5 28.6971L15.8178 27.021L14.1356 25.3448H11.8954H9.65517V23.1046V20.8644L7.97902 19.1822L6.30294 17.5L7.97902 15.8178L9.65517 14.1356V11.8954V9.65517H11.8958H14.1364L15.7993 7.99614C16.7139 7.08373 17.4783 6.33696 17.4978 6.33666C17.5174 6.33643 18.2829 7.08297 19.1989 7.99569ZM17.6852 14.0645L17.5 14.2496V17.1983V20.1469L17.3148 20.3321C17.1981 20.4488 17.0435 20.5172 16.8966 20.5172C16.7496 20.5172 16.595 20.4488 16.4783 20.3321L16.2931 20.1469V17.8017V15.4565L16.1079 15.2714C15.863 15.0264 15.5163 15.0264 15.2714 15.2714C15.1696 15.3732 15.0862 15.5042 15.0862 15.5625C15.0862 15.6418 14.9277 15.6783 14.4534 15.7078C13.928 15.7406 13.7416 15.7894 13.3557 15.9951C12.8375 16.2713 12.6079 16.5095 12.313 17.0771C12.1423 17.4056 12.1128 17.5566 12.1128 18.1034C12.1128 18.6502 12.1423 18.8013 12.313 19.1298C12.6084 19.6983 12.8375 19.9356 13.3601 20.2141C13.7665 20.4307 13.9215 20.469 14.5195 20.5003L15.2098 20.5364L15.3914 20.8788C15.6092 21.2893 16.0919 21.6206 16.5785 21.6936C16.9869 21.7548 17.5858 21.6298 17.8769 21.4226L18.087 21.273L18.4473 21.4744C19.4184 22.0171 20.7428 21.4601 21.0418 20.3834C21.0877 20.2179 21.12 19.1469 21.1202 17.7795L21.1207 15.4565L20.9355 15.2714C20.8188 15.1546 20.6642 15.0862 20.5172 15.0862C20.3703 15.0862 20.2157 15.1546 20.099 15.2714L19.9138 15.4565V17.8017V20.1469L19.7286 20.3321C19.6119 20.4488 19.4573 20.5172 19.3103 20.5172C19.1634 20.5172 19.0088 20.4488 18.8921 20.3321L18.7069 20.1469V17.1983V14.2496L18.5217 14.0645C18.405 13.9477 18.2504 13.8793 18.1034 13.8793C17.9565 13.8793 17.8019 13.9477 17.6852 14.0645ZM21.9093 14.6679L21.7241 14.853V18.1034V21.3538L21.9093 21.539C22.026 21.6557 22.1806 21.7241 22.3276 21.7241C22.4745 21.7241 22.6292 21.6557 22.7459 21.539L22.931 21.3538V18.1034V14.853L22.7459 14.6679C22.6292 14.5512 22.4745 14.4828 22.3276 14.4828C22.1806 14.4828 22.026 14.5512 21.9093 14.6679ZM15.0862 18.1034V19.3103H14.6689C14.1383 19.3103 13.8006 19.1685 13.5504 18.8406C13.1915 18.3699 13.1945 17.7734 13.558 17.3414C13.8239 17.0253 14.1266 16.9031 14.6525 16.8995L15.0862 16.8966V18.1034Z" fill="#1FA45B" />
                                </svg>
                                <span>{content.dua_id}. {content.dua_name_en}</span>
                            </div>
                            <p className="text-justify">{content.top_en ? content.top_en : ""}</p>
                            <p className="text-right font-medium text-3xl text tracking-wide">{content.clean_arabic ? content.dua_arabic : ""}</p>

                            <p className="text-justify">{content.transliteration_en ? (
                                <><span className="font-bold">Transliteration: </span>
                                    {content.transliteration_en}</>
                            ) : ""}</p>
                            <p className="text-justify">{content.translation_en ? (
                                <><span className="font-bold">Translation: </span>
                                    {content.translation_en}</>
                            ) : ""}</p>
                            <div>
                                <p className="text-[#1FA45B] font-medium">Reference:</p>
                                <p>{content.refference_en}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    {
                                        <PlayAudio content={content}></PlayAudio>
                                    }
                                </div>
                                <div className="flex gap-4">
                                    <svg onClick={() => <>
                                        {navigator.clipboard.writeText(`${content.dua_name_en}\n ${content.top_en}\n${content.clean_arabic ? content.clean_arabic : ""}\n${content.transliteration_en ? content.transliteration_en : ""}\n${content.translation_en ? content.translation_en : ""}\n`)}
                                        {toast("Text Copied to clipboard")}
                                    </>} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.00027 16.0011H6.00027C5.46984 16.0011 4.96113 15.7904 4.58606 15.4153C4.21099 15.0402 4.00027 14.5315 4.00027 14.0011V6.0011C4.00027 5.47067 4.21099 4.96196 4.58606 4.58688C4.96113 4.21181 5.46984 4.0011 6.00027 4.0011H14.0003C14.5307 4.0011 15.0394 4.21181 15.4145 4.58688C15.7896 4.96196 16.0003 5.47067 16.0003 6.0011V8.0011M10.0003 20.0011H18.0003C18.5307 20.0011 19.0394 19.7904 19.4145 19.4153C19.7896 19.0402 20.0003 18.5315 20.0003 18.0011V10.0011C20.0003 9.47067 19.7896 8.96196 19.4145 8.58688C19.0394 8.21181 18.5307 8.0011 18.0003 8.0011H10.0003C9.46984 8.0011 8.96113 8.21181 8.58606 8.58688C8.21099 8.96196 8.00027 9.47067 8.00027 10.0011V18.0011C8.00027 18.5315 8.21099 19.0402 8.58606 19.4153C8.96113 19.7904 9.46984 20.0011 10.0003 20.0011Z" stroke="#868686" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <ToastContainer
                                        position="bottom-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                        transition:Bounce
                                    />
                                    <div className="font-inter">
                                        <label htmlFor="my_modal_6" className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4.99973 5C4.99973 4.46956 5.21044 3.96086 5.58551 3.58579C5.96058 3.21071 6.46929 3 6.99972 3H16.9997C17.5301 3 18.0388 3.21071 18.4139 3.58579C18.789 3.96086 18.9997 4.46956 18.9997 5V21L11.9997 17.5L4.99973 21V5Z" stroke="#868686" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></label>
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal" role="dialog">
                                            <div className="space-y-4 modal-box">
                                                <h3 className="font-bold text-lg">Favorite</h3>
                                                <div className="space-y-4">
                                                    <label className="form-control w-full">
                                                        <div className="label">
                                                            <span className="label-text text-lg font-semibold">Folder Name</span>
                                                        </div>
                                                        <label className="input input-bordered flex items-center gap-2">
                                                            <input type="text" className="grow" value="Favorite" placeholder="Search" />
                                                            <img width="16" height="16" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1" />
                                                        </label>
                                                    </label>
                                                    <div className="label">
                                                        <span className="label-text text-lg font-semibold">Or,</span>
                                                    </div>
                                                    <label className="input input-bordered flex items-center gap-2">
                                                        <input type="text" className="grow" placeholder="Create a new bookmark holder" />
                                                    </label>
                                                    <div className="label">
                                                        <span className="label-text text-lg font-semibold">Change Folder Color</span>
                                                    </div>
                                                    <div className="w-full flex justify-between">
                                                        <div className="h-10 w-10 bg-[#1fa45b] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#ffc107] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#9c27b0] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#2196f3] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#e91e63] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#3f51b5] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#00bcd4] rounded-md"></div>
                                                        <div className="h-10 w-10 bg-[#8bc34a] rounded-md"></div>
                                                    </div>
                                                </div>
                                                <div className="modal-action">
                                                    <label htmlFor="my_modal_6" className="btn bg-gray-200 text-black px-20">Cancel</label>
                                                    <label onClick={()=> toast("Bookmark Added Successfully")} htmlFor="my_modal_6" className="btn btn-success text-white px-20">Save</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <svg onClick={()=> toast("Coming Soon Insha-Allah")} className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_1_1008)">
                                            <path d="M17.994 2.28842C16.7734 1.19781 15.2786 0.460703 13.6703 0.156437C12.062 -0.147829 10.4012 -0.00773287 8.86658 0.561647C7.33198 1.13103 5.98172 2.10813 4.96111 3.38779C3.9405 4.66746 3.28819 6.20123 3.0744 7.82402C2.88242 9.24701 3.03607 10.6953 3.52234 12.0463C4.00861 13.3974 4.81319 14.6114 5.868 15.5856C6.52006 16.1576 7.0462 16.8588 7.41306 17.6448C7.77993 18.4308 7.97952 19.2845 7.9992 20.1516V20.3124C8.00015 21.2908 8.38922 22.2288 9.08103 22.9206C9.77283 23.6124 10.7108 24.0015 11.6892 24.0024H12.3096C13.288 24.0015 14.226 23.6124 14.9178 22.9206C15.6096 22.2288 15.9986 21.2908 15.9996 20.3124V19.7628C16.0146 18.9964 16.1951 18.2422 16.5285 17.5519C16.8619 16.8616 17.3406 16.2515 17.9316 15.7632C18.89 14.9237 19.6592 13.8901 20.1881 12.7309C20.7169 11.5717 20.9935 10.3134 20.9994 9.03929C21.0053 7.76516 20.7404 6.50433 20.2223 5.34029C19.7042 4.17626 18.9446 3.13679 17.994 2.28842ZM12.3096 22.002H11.688C11.2401 22.0014 10.8107 21.8232 10.494 21.5065C10.1772 21.1897 9.99903 20.7603 9.9984 20.3124L9.99 20.0028H13.998V20.3124C13.9974 20.7603 13.8191 21.1897 13.5024 21.5065C13.1857 21.8232 12.7563 22.0014 12.3084 22.002H12.3096ZM16.6092 14.262C15.4708 15.2494 14.6485 16.5504 14.2452 18.0024H12.9996V10.818C13.5822 10.6119 14.087 10.2308 14.4448 9.72687C14.8026 9.22297 14.9961 8.62085 14.9988 8.00282C14.9862 7.74619 14.8754 7.50422 14.6893 7.32703C14.5032 7.14985 14.2561 7.05102 13.9992 7.05102C13.7423 7.05102 13.4951 7.14985 13.3091 7.32703C13.123 7.50422 13.0122 7.74619 12.9996 8.00282C12.9996 8.26809 12.8942 8.5225 12.7066 8.71007C12.5191 8.89765 12.2647 9.00303 11.9994 9.00303C11.7341 9.00303 11.4797 8.89765 11.2921 8.71007C11.1046 8.5225 10.9992 8.26809 10.9992 8.00282C10.9992 7.73771 10.8939 7.48346 10.7064 7.296C10.519 7.10854 10.2647 7.00322 9.9996 7.00322C9.73449 7.00322 9.48023 7.10854 9.29277 7.296C9.10531 7.48346 9 7.73771 9 8.00282C9.00267 8.62085 9.19615 9.22297 9.55399 9.72687C9.91183 10.2308 10.4166 10.6119 10.9992 10.818V18.0024H9.678C9.22695 16.5117 8.38108 15.1708 7.23 14.1216C6.20156 13.1631 5.48561 11.9171 5.17536 10.5459C4.86512 9.17465 4.97498 7.74179 5.49063 6.4339C6.00627 5.12601 6.90381 4.00371 8.06634 3.21315C9.22888 2.42259 10.6025 2.00042 12.0084 2.00162C13.7261 1.99659 15.3844 2.63046 16.6608 3.78002C17.4002 4.43978 17.991 5.24911 18.394 6.1544C18.797 7.0597 19.0031 8.0403 18.9986 9.03124C18.994 10.0222 18.779 11.0009 18.3677 11.9024C17.9564 12.804 17.3582 13.6079 16.6128 14.2608H16.6092V14.262Z" fill="#868686" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1008">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg onClick={()=> toast("Coming Soon Insha-Allah")} className="hover:cursor-pointer"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.68408 13.3424C8.88608 12.9384 9.00008 12.4824 9.00008 12.0004C9.00008 11.5184 8.88608 11.0624 8.68408 10.6584M8.68408 13.3424V10.6584M8.68408 13.3424C8.38178 13.9467 7.88428 14.4314 7.27217 14.7177C6.66007 15.0041 5.96921 15.0754 5.31152 14.9201C4.65384 14.7648 4.06785 14.3919 3.64849 13.862C3.22914 13.3321 3.00098 12.6761 3.00098 12.0004C3.00098 11.3246 3.22914 10.6686 3.64849 10.1387C4.06785 9.60877 4.65384 9.23596 5.31152 9.08066C5.96921 8.92535 6.66007 8.99665 7.27217 9.283C7.88428 9.56934 8.38178 10.054 8.68408 10.6584M8.68408 13.3424L15.3161 16.6584M8.68408 10.6584L15.3161 7.34236M15.3161 16.6584C14.9602 17.3702 14.9016 18.1943 15.1533 18.9493C15.4049 19.7043 15.9462 20.3284 16.6581 20.6844C17.3699 21.0403 18.194 21.0988 18.949 20.8472C19.704 20.5955 20.3282 20.0542 20.6841 19.3424C21.04 18.6305 21.0986 17.8064 20.8469 17.0514C20.5952 16.2964 20.0539 15.6723 19.3421 15.3164C18.9896 15.1401 18.6059 15.035 18.2128 15.0071C17.8197 14.9792 17.425 15.0289 17.0511 15.1535C16.2961 15.4052 15.672 15.9465 15.3161 16.6584ZM15.3161 7.34236C15.4923 7.69476 15.7362 8.009 16.0339 8.26714C16.3316 8.52527 16.6772 8.72225 17.051 8.84682C17.4248 8.97139 17.8195 9.02111 18.2125 8.99315C18.6055 8.96519 18.9892 8.86009 19.3416 8.68386C19.694 8.50762 20.0082 8.26371 20.2664 7.96603C20.5245 7.66835 20.7215 7.32274 20.846 6.94894C20.9706 6.57514 21.0203 6.18046 20.9924 5.78744C20.9644 5.39442 20.8593 5.01076 20.6831 4.65836C20.3272 3.94665 19.7031 3.40548 18.9482 3.1539C18.1932 2.90232 17.3693 2.96094 16.6576 3.31686C15.9459 3.67278 15.4047 4.29685 15.1531 5.05177C14.9015 5.8067 14.9602 6.63065 15.3161 7.34236Z" stroke="#868686" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg onClick={()=> toast("Coming Soon Insha-Allah")} className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7.86055 1.9989H16.1406L22.0005 7.8589V16.1389L16.1406 21.9989H7.86055L2.00055 16.1389V7.8589L7.86055 1.9989Z" stroke="#868686" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 7.9989V11.9989" stroke="#868686" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 16.0012H12.01" stroke="#868686" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div >
                    </>
                ))
            }
        </div >
    );
};

MainContent.propTypes = {
    currentCat: PropTypes.array,
}
export default MainContent;