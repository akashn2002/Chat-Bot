import { useContext } from "react";
import { Context } from "./Context/Context";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { SiGooglegemini } from "react-icons/si";
import { GrMicrophone } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
        mode,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };

    return (
        <div className={`flex-1 min-h-screen pb-36 relative p-5 ${mode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex ustify-between items-center text-xl md:text-2xl p-5">
                <p>Chat Bot</p>
            </div>
            <div className="max-w-4xl mx-auto">
                {!showResults ? (
                    <>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 mt-0 text-4xl font-medium ml-2 lg:ml-20">
                            <p>Hello, Akash</p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="flex w-full h-full gap-1 overflow-x-auto hide-scrollbar mt-8 lg:gap-5 lg:ml-20">
                            <div 
                                className="h-36 p-4 bg-teal-600 rounded-lg cursor-pointer flex flex-col justify-between hover:bg-teal-700 "
                                onClick={() =>
                                    handleCardClick("Suggest Some Place To Visit In Karnataka")
                                }
                            >
                                <p>Suggest Some Place To Visit In Karnataka</p>
                                <FaMapLocationDot size={20} />
                            </div>
                            <div
                                className="h-36 p-4 bg-teal-600 rounded-lg cursor-pointer flex flex-col justify-between hover:bg-teal-700 "
                                onClick={() =>
                                    handleCardClick("Help me write an essay")
                                }
                            >
                                <p>Help me write an essay</p>
                                <HiMiniPencilSquare size={20} />
                            </div>
                            <div
                                className="h-36 p-4 bg-teal-600 rounded-lg cursor-pointer flex flex-col justify-between hover:bg-teal-700 "
                                onClick={() =>
                                    handleCardClick("How to Create a Gyroscope using Disc?")
                                }
                            >
                                <p>How to Create a Gyroscope using Disc?</p>
                                <FaRegLightbulb size={20} />
                            </div>
                            <div
                                className="h-36 p-4 bg-teal-600 rounded-lg cursor-pointer flex flex-col justify-between hover:bg-teal-700 "
                                onClick={() =>
                                    handleCardClick("Create a Script for the YouTube video about coding")
                                }
                            >
                                <p>Create a Script for the YouTube video</p>
                                <MdDescription size={20} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="overflow-y-auto max-h-[70vh]">
                        <div className="my-10 flex items-center gap-5">
                            <SiGooglegemini size={25} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="flex items-start gap-5">
                            <SiGooglegemini />
                            {loading ? (
                                <div className="loader w-full flex flex-col gap-3 animate-pulse">
                                    <BsThreeDots size={45} />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="absolute bottom-0 w-full max-w-4xl px-5 mx-auto">
                    <div className="flex items-center justify-between gap-5 p-3 md:p-5 bg-gray-100 rounded-full dark:bg-gray-700">
                        <input 
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                            className="flex-1  outline-none bg-transparent border-0 p-2 text-base md:text-lg"
                        />
                        <div className="flex items-center gap-4 md:gap-6">
                            <GrMicrophone size={20} />
                            <IoSend 
                                size={20}
                                onClick={() => {
                                    onSent();
                                }}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-3 text-xs md:text-sm font-light">
                        <p>
                            Chat Bot may display inaccurate info, including about people, so
                            double-check its responses. Your privacy & Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
