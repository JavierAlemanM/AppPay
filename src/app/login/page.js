import { CiMail, CiLock, CiUnread, } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { IoLogoStencil } from "react-icons/io5";
import { RiWhatsappLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";

const Login = () =>{


    return (
        <div >
            <div className="h-screen w-full flex" >
                <div className="w-1/2  bg-white flex justify-center items-center flex-col">

                    <div className="w-full max-w-[400px] h-9 flex ">
                        <div className="w-9 items-center justify-center flex">
                            <IoLogoStencil className="text-3xl text-green-500"/>
                        </div>
                        <div className="m-[5px] font-semibold text-xl text-blue-600">NovaSyncer</div>
                    </div>
                    <div className="w-full max-w-[400px] h-28 bg-white flex-col ">
                        <div className="text-xl pt-5 font-bold text-gray-600">
                            Log in to your Account
                        </div>
                        <div className="text-xs pt-2 text-gray-500">
                            lasldasdl lasdas lalasldlasasdasdlaksdlkasd
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] h-14 bg-white flex">
                        <div className="text-slate-400 cursor-pointer hover:font-medium hover:border-gray-400 hover:border-2 hover:bg-gray-100 w-48 h-full  bg-white mr-4 rounded-lg flex items-center justify-center border-2 border-slate-300 ">
                            <FcGoogle className="text-2xl mr-2 " />
                            Google
                        </div>
                        <div className="text-slate-400 cursor-pointer hover:font-medium hover:border-gray-400 hover:border-2 hover:bg-gray-100 w-48 h-full  bg-white rounded-lg flex items-center justify-center border-2 border-slate-300">
                        <SiFacebook className="text-2xl mr-2 text-blue-600"/>
                            Facebook
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] h-16 bg-white flex">
                        <div className="w-full max-w-[400px] h-[59px] bg-white absolute border-b-2 border-gray-400">
                         
                        </div>
                        <div className="w-1/3 h-4 bg-white top-11 left-1/3 relative flex justify-center text-gray-400 ">
                            separadooooor
                        </div>
                    </div>

                    <div className="w-full max-w-[400px]  bg-white py-2">
                        
                        <div className="w-full h-12 relative my-5 ">
                            <input 
                                placeholder="Email"
                                className="w-full h-12 outline-none border-[2px] text-slate-400 border-slate-300 bg-slate-100 rounded-md pl-[40px]" 
                            />
                            <div className="absolute left-0 top-0 h-12 w-10  flex justify-center items-center">
                                <CiMail className="text-slate-400 text-lg" />
                            </div>
                        </div>

                        <div className="w-full h-12 relative my-5 ">
                            <input 
                                placeholder="Password"
                                className="w-full h-12 outline-none border-[2px] text-slate-400 border-slate-300 bg-slate-100 rounded-md pl-[40px] pr-[40px]" 
                            />
                            <div className="absolute left-0 top-0 h-12 w-10  flex justify-center items-center">
                                <CiLock className="text-slate-400 text-lg" />
                            </div>

                            <div className="absolute right-0 top-0 h-12 w-10  flex justify-center items-center">
                                <CiUnread className="text-slate-400 text-xl hover:text-slate-500 cursor-pointer" />
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="w-full max-w-[400px] h-5 flex">
                        <div className="w-1/2 h-full  flex">
                            <input type="checkbox" className="w-5 h-5 justify-center items-center flex"/>
                            <div className="justify-center items-center pl-2 flex">
                                always remember
                            </div>
                        </div>
                        <div className="w-1/2 h-full relative justify-center items-center">
                            <div className="text-sm absolute right-0 text-blue-600">
                                recover password?
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] h-32 ">
                        <div className="text-xl text-white flex justify-center items-center w-full max-w-[400px] h-12 bg-blue-600 mt-10 rounded-lg hover:border-4 hover:border-blue-700 cursor-pointer">
                            Log in
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] h-5 flex  relative">
                        <div className="w-1/2 text-sm text-gray-600 mr-1 left-0 flex relative">
                            <div className="text-sm absolute right-0 text-gray-500">
                                You already have one?
                            </div>
                        </div>
                        <div className="w-1/2 text-sm text-blue-600 ml-1 "> 
                            <div className="text-sm absolute left-0-0">
                                create Account
                            </div>    
                        </div>
                         
                    </div>
                </div>
                

                <div className="w-1/2  bg-blue-600 flex justify-center items-center">
                    <div className="circulo-g w-full max-w-[580px] h-[600px] bg-blue-600 rounded-[50%] flex justify-center items-center">
                        <div className="circulo-m w-full max-w-[415px] h-[425px] bg-blue-500 relative rounded-[50%] flex">
                            <div className="flex-col cuadrado-min bg-white w-full max-w-[280px] h-[290px] absolute flex left-56 top-[70px] rounded-2xl justify-center ">
                                <div className=" w-full max-w-[240px] h-10 top-0 left-4 absolute flex ">
                                    <SlOptions className="text-5xl mr-2 left-0 bottom-[-3px] absolute"/>
                                        <div className="w-[90px] h-[6px] rounded-full bg-slate-400 flex right-0 top-4 absolute">
                                    </div>
                                </div>
                                <div className="flex-col w-full max-w-[260px] h-[248px] rounded-xl left-[9px] top-[35px] bg-slate-300 absolute flex ">
                                    <div className="w-full h-[48px] flex relative">
                                        <div className="w-[115px] h-7 left-4 bottom-0 flex bg-slate-400 absolute rounded-[6px]">
                                            <div className="w-[75px] h-[6px] rounded-full bg-slate-500 left-[19px] top-[11px] absolute">
                                            
                                            </div>
                                        </div>
                                        <div className="w-[75px] h-[6px] rounded-full bg-slate-400 right-8 bottom-[11px] absolute">

                                        </div>
                                    </div>
                                    <div className="w-full h-52 flex relative flex-col">
                                        <div className="w-56 h-[50px] left-4 bg-slate-50 top-4 flex relative mb-3 rounded-md">
                                            <PiUserCircleFill className="text-5xl left-1 top-[1px] flex absolute" />
                                            <div className="w-[110px] h-5 left-14 top-[13px] flex absolute">
                                                <div className="w-full h-2 bg-slate-500 rounded-full">
                                                </div>
                                                <div className="w-[70px] h-2 bg-slate-400 rounded-full flex bottom-0 absolute">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-56 h-[50px] left-4 bg-slate-50 top-4 flex relative mb-3 rounded-md">
                                            <PiUserCircleFill className="text-5xl left-1 top-[1px] flex absolute"/>
                                                <div className="w-[110px] h-5 left-14 top-[13px] flex absolute">
                                                    <div className="w-[70px] h-2 bg-slate-500 rounded-full">
                                                    </div>
                                                    <div className="w-full h-2 bg-slate-400 rounded-full flex bottom-0 absolute">
                                                    </div>    
                                                </div>
                                        </div>
                                        <div className="w-56 h-[50px] left-4 bg-slate-50 top-4 flex relative mb-3 rounded-md">
                                            <PiUserCircleFill className="text-5xl left-1 top-[1px] flex absolute"/>
                                            <div className="w-[110px] h-5 left-14 top-[13px] flex absolute">
                                                    <div className="w-full h-2 bg-slate-500 rounded-full">
                                                    </div>
                                                    <div className="w-[70px] h-2 bg-slate-400 rounded-full flex bottom-0 absolute">
                                                    </div>    
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[85px] h-[85px] bg-blue-400 left-1 top-10 absolute rounded-full">
                                <div className="w-[68px] h-[68px] bg-white flex left-2 top-[9px] relative rounded-full">
                                    <RiWhatsappLine className="text-5xl mr-2 left-[10px] top-[10px] absolute text-green-500" />
                                </div>
                            </div>
                            <div className="w-[85px] h-[85px] bg-blue-400 right-[368px] top-[170px] absolute rounded-full">
                                <div className="w-[68px] h-[68px] bg-white flex left-2 top-[9px] relative rounded-full">
                                    <IoLogoGithub className="text-5xl mr-2 left-[10px] top-[10px] absolute" />
                                </div>
                            </div>
                            <div className="w-[85px] h-[85px] bg-blue-400 left-1 top-[300px] absolute rounded-full">
                                <div className="w-[68px] h-[68px] bg-white flex left-2 top-[9px] relative rounded-full">
                                    <FcGoogle className="text-5xl mr-2 left-[10px] top-[10px] absolute" />
                                </div>    
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
       
    );


}
export default Login;