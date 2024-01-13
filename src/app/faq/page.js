'use client'
import { IoSearchSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import { useForm } from "react-hook-form"


const faq = () =>{

    const { register,   handleSubmit   } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        //login(data)
  
     }

    return(
        <div className="w-full  h-[900px] bg-violet-300 flex justify-center items-start " >

            <div className="w-[800px] my-10 ">

                <div className="w-full h-[220px] bg-white flex  justify-center items-center">

                    <div className="w-[400px]  flex flex-col justify-center items-center">

                        <div className="text-slate-800 text-[20px] w-full text-center font-bold mb-5">
                            How can Out Brand Help You?
                        </div>

                        <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full h-8 flex justify-center items-center relative">

                            <input 
                                {...register("faq")} 
                                className="w-[380px] h-[35px] text-[12px] text-slate-500 bg-slate-100 rounded-[10px] pl-2 pr-[19px] outline-none"
                                placeholder="What Help are you looking for?"
                            />

                            <button
                                className="w-[40px] h-[35px] absolute top-0 right-[-13px] bg-indigo-600 text-white rounded-lg flex justify-center items-center"
                                type="submit"
                            >
                            <IoSearchSharp   />
                            </button>

                        </form>

                    </div>

                </div>

                <div className="w-full  bg-gray-100 py-10 relative">

                    <div className="w-full h-[80px]  absolute left-0 top-[-30px] flex justify-center items-center">
                        <div className="h-[80px] w-1/2  flex flex-row justify-evenly">
                            <div className="h-full w-[70px] text-neutral-600 hover:text-indigo-600 hover:cursor-pointer bg-slate-200 flex justify-center items-center flex-col shadow-md">

                                <button
                                    className="  "
                                >
                                <FaBookOpen className="w-[30px] h-[30px] "  />
                                
                                <div className="text-[12px] font-bold mt-2">
                                    Learn
                                </div>

                                </button>
                                
                            </div>
                            <div className="h-full w-[70px] bg-slate-200 flex justify-center text-neutral-600 hover:text-indigo-600 hover:cursor-pointer items-center flex-col shadow-md">

                                <button>
                                    <FaQuestion className="w-[30px] h-[30px]" />
                                
                                    <div className="text-[12px] font-bold mt-2">
                                        FAQs
                                    </div>

                                </button>

                            </div>
                            <div className="h-full w-[70px] bg-slate-200 text-neutral-600 hover:text-indigo-600 hover:cursor-pointer flex justify-center items-center flex-col shadow-md">

                                <button
                                    className="flex justify-center items-center flex-col"
                                >
                                    <FaCircleExclamation className="w-[30px] h-[30px] rotate-[180deg]" />

                                    <div className="text-[12px] font-bold mt-2">
                                        General
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full h-[100px] bg-gray-100 flex justify-center items-center flex-col">

                    <div className="w-[500px] h-[70px]">

                        <div className="flex justify-center items-center text-[20px] text-indigo-600 font-semibold">
                            General
                        </div>

                        <div className=" w-full flex justify-center items-center mt-1 text-[12px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </div>

                    </div>

                </div>

                <div className="w-full h-[100px] bg-gray-100 flex justify-center items-center relative">

                    <div className="w-[500px] h-[90px] left-50% top-[-5px] bg-white absolute drop-shadow-xl">

                        <div className="w-[300px] left-0 top-0 text-[15px] m-[6px] font-medium">
                            What type of reports can be created
                        </div>

                        <div className="w-[470px] left-0 top-3 ml-[8px] text-[10px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>

                        <button className="absolute top-0 right-0 m-2 hover:text-indigo-600">

                            <CiCircleMinus className="w-[25px] h-[25px]"/>

                        </button>
                        
                    </div>

                </div>

                <div className="w-full h-[330px] bg-gray-100 relative">

                    <div className="w-[500px] left-[150px] top-0 flex-col absolute">

                        <div className="w-full h-[50px] bg-white my-4 flex items-center drop-shadow-md">
                            
                            <div className="flex-grow ml-[5px] text-[15px] font-medium">
                                What type of Visuals can be created
                            </div>

                            <button className="hover:text-indigo-600">

                                <CiCirclePlus className="w-[25px] h-[25px] ml-auto mr-2"/>

                            </button>

                        </div>

                        <div className="w-full h-[50px] flex justify-center items-center bg-white my-4 drop-shadow-md">
                            
                            <div className="flex-grow ml-[5px] text-[15px] font-medium">
                                How to change the credentials
                            </div>

                            <button className="hover:text-indigo-600">

                            <CiCirclePlus className="w-[25px] h-[25px] ml-auto mr-2"/>

                            </button>

                        </div>

                        <div className="w-full h-[50px] flex justify-center items-center bg-white my-4 drop-shadow-md">
                            
                            <div className="flex-grow ml-[5px] text-[15px] font-medium">
                                How to change the access to the date
                            </div>

                            <button className="hover:text-indigo-600">

                            <CiCirclePlus className="w-[25px] h-[25px] ml-auto mr-2"/>
                            
                            </button>

                        </div>

                        <div className="w-full h-[50px] flex justify-center items-center bg-white my-4 drop-shadow-md">
                            
                            <div className="flex-grow ml-[5px] text-[15px] font-medium">
                                What formats data can be uploaded
                            </div>

                            <button className="hover:text-indigo-600">

                            <CiCirclePlus className="w-[25px] h-[25px] ml-auto mr-2"/>
                            
                            </button>

                        </div>

                    </div>

                </div>

                <div className="w-full h-[150px] bg-indigo-500 flex justify-center items-center ">

                    <div className="w-[500px] flex-col">
                        
                        <div className="flex justify-center items-center text-[22px] text-white font-medium">
                            Is your query not answered?
                        </div>

                        <div className="flex justify-center items-center text-white text-[19px]">
                            Mail your question to support@codelab.com
                        </div>
                    </div>

                </div>

            </div>
    
        </div>
    );
}

export default faq;