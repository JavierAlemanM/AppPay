'use client'
import { FcSimCardChip } from "react-icons/fc";
import { IoWifi } from "react-icons/io5";
import React, { useState } from 'react';
import Image from 'next/image'
import imgpc from '../../../public/img/computer.png'


const cardCuervo = () =>{

    const [cardNumber, setCardNumber] = useState('');

    const changerNumber = (event) => {
        const newNumber = event.target.value;
        setCardNumber(newNumber);
      };

    const [cardName, setCardName] = useState('');

    const changerName = (event) =>{
        const newName = event.target.value;
        setCardName(newName);
    }

    const [cardCode, setCardCode] = useState('');

    const changerCode = (event) =>{
        const newCode = event.target.value;
        setCardCode(newCode);
    }

    const [cardExpirity, setCardExpirity] = useState('');

    const changerExpirity = (event) =>{
        const newExpirity = event.target.value;
        setCardExpirity(newExpirity);
    }



   return(
    <div>
        <div className="w-full h-screen bg-gray-50  relative">

            <div>

            </div>

            <div className="hidden w-full h-screen absolute top-0 left-0">

                <div className="w-[450px] h-[650px] bg-amber-400 top-16 left-52 absolute flex flex-col">

                    
                </div>

            </div>

            <div className="w-full h-screen flex flex-row">
                <div className="w-1/2 bg-[rgb(37,37,37)] flex justify-center items-center">

                    <div className="w-[400px] flex justify-center items-center flex-col">

                        <div className="w-[500px] mb-[9px] h-[20px] flex justify-center items-center flex-row font-bold text-slate-200">

                            <div className="p-[13px] text-[16px]">
                                Cart
                            </div>

                            <div className="p-[13px] text-[16px]">
                                &gt;
                            </div>

                            <div className="p-[13px] text-[16px]">
                                Place order
                            </div>

                            <div className="p-[13px] text-[16px]">
                                &gt;
                            </div>

                            <div className="p-[13px] text-[16px]">
                                Pay
                            </div>

                            <div className="p-[13px] text-[16px]">
                                &gt;
                            </div>

                            <div className="p-[13px] text-[16px]">
                                Order complete
                            </div>

                        </div>
                        
                        <div className=" w-full h-[60px] flex justify-center items-center flex-row">

                            <div>
                                <button className="hover:bg-white w-[190px] h-[32px] flex justify-center items-center bg-[rgb(140,140,140)] mr-1 rounded-[7px] text-[13px] font-bold">New card</button>
                            </div>

                        <div>
                            <button className="hover:bg-white w-[190px] h-[32px] flex justify-center items-center bg-[rgb(140,140,140)] ml-1 rounded-[7px] text-[13px] font-bold">Checkout</button>
                        </div>
                    </div>

                    <div className="w-full h-[200px] flex justify-center items-center">

                        <div className="w-[380px] h-[190px] bg-gradient-to-r from-red-700 via-rose-600 to-purple-700 rounded-[30px] relative">

                            <div className="w-[170px] h-[30px] top-0 right-0 flex absolute mr-7 mt-7">
                                <div className="m-1 text-slate-200 font-bold font-sans text-[20px]">
                                    Cuervo Express
                                </div>
                            </div>

                            <div className="w-[200px] flex flex-row">
                                <div>
                                    <FcSimCardChip className="w-[70px] h-[60px] mt-5 ml-5"/>
                                </div>

                                <div>
                                    <IoWifi className="w-[40px] h-[30px] mt-[34px] text-slate-200 rotate-[90deg]"/>
                                </div>
                                

                                
                            </div>

                            <div className="w-[310px] h-[80px] ml-[30px] mr-[50px] mt-[15px] flex flex-col">

                                <div className="w-full h-[40px] ">
                                    <p className="mt-[6px] ml-[9px] text-[20px] font-bold text-slate-200">{cardNumber}</p>
                                </div>

                                <div className="w-full h-[20px] flex flex-row">

                                    <div className="w-[155px] h-full flex flex-row">
                                        <p className="text-[11px] mt-[3px] ml-[9px] text-slate-100">CCV/CCV2</p>
                                        <p className="text-[14px] mb-[4px] ml-[9px] font-bold text-slate-200">{cardCode}</p>
                                    </div>

                                    <div className="w-[155px] h-full flex flex-row">
                                        <p className="text-[12px] mt-[1px] ml-[9px] text-slate-100">Good thru</p>
                                        <p className="text-[12px] mt-[2px] ml-[9px] font-bold text-slate-200">{cardExpirity}</p>
                                    </div>

                                </div>

                                <div className="w-[155px] h-[20px]">
                                    <p className="text-[16px] mt-[2px] ml-[9px] font-bold text-slate-200">{cardName}</p>
                                </div>

                            </div>


                        </div>

                    </div>

                    <div className="w-full h-[150px] flex flex-col">

                        <div className="w-full h-[75px] flex flex-col">
                            <div className="top-0 left-0 ml-[7px] mb-[3px] text-slate-200  font-bold">
                                CARD NUMBER
                            </div>
                            <div className=" flex justify-center items-center">
                                <input className="w-[435px] h-[37px] bg-[rgba(249,249,250,0.1)] text-slate-200 border-[1px] border-slate-200 rounded-[10px] pl-6 pr-6"
                                        type="text"
                                        value={cardNumber}
                                        onChange={changerNumber}
                                />
                            </div>                               
                        </div>

                        <div>
                                <div className="top-0 left-0 ml-[7px] mb-[3px] text-slate-200 font-bold">
                                    NAME ON CARD
                                </div>
                            <div className=" flex justify-center items-center">
                                <input className="bg-[rgba(249,249,250,0.1)] border-[1px] text-slate-200 border-slate-200 w-[435px] h-[37px] pl-6 pr-6 rounded-[10px]" 
                                        type="text"
                                        value={cardName}
                                        onChange={changerName}
                                />

                                
                            </div> 
                        </div>    
                    </div>

                    <div className="w-full h-[75px] px-2 flex justify-between items-center flex-row">

                        <div className="w-[200px]">
                            <div className="text-slate-200 font-bold mb-[3px]">
                                EXPIRITY DATE
                            </div>
                            <input className="w-[185px] h-[35px] bg-[rgba(249,249,250,0.1)] border-[1px] text-slate-200 border-slate-200 rounded-[10px] pl-4 pr-4" 
                                    type="text"
                                    value={cardExpirity}
                                    onChange={changerExpirity}
                            /> 
                        </div>

                        <div className="w-[200px]">
                            <div className="text-slate-200 font-bold mb-[3px]">
                                CVV
                            </div>
                            <input className="w-[185px] h-[35px] bg-[rgba(249,249,250,0.1)] border-[1px] text-slate-200 border-slate-200 rounded-[10px] pl-4 pr-4" 
                                    type="text"
                                    value={cardCode}
                                    onChange={changerCode}
                            /> 
                        </div>
                    </div>

                    <div className=" w-full h-[60px] flex justify-center items-center">
                        <button className="hover:bg-white w-[435px] h-[40px] bg-[rgb(140,140,140)] font-bold flex justify-center items-center rounded-[10px]">
                            Add your card
                        </button>
                    </div>


                    </div>

                </div>

                <div className="w-1/2 bg-[rgb(203,203,203)] flex justify-center items-center flex-col">
                    
                    <div className="w-[400px] h-[50px] mb-7 mt-[125px] flex justify-center items-center text-[25px] font-bold">
                        <h1>Asus ROG Zephyrus Duo 15 SE</h1>
                    </div>

                    <div>
                        <Image
                            src={imgpc}
                            width={400}
                            height={400}
                            alt="Asus ROG Zephyrus Duo 15 SE"
                        />
                    </div>

                    <div className="mt-7 text-[20px] font-bold">
                        $6879,65
                    </div>


                </div>

            </div>


        </div>

    </div>
   );


}

export default cardCuervo;