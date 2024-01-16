'use client'

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import React, { useState } from 'react';



const cardJuanes = () => {

const [numberCard, setNumberCard] = useState('');
const [nameCard, setNameCard] = useState('');
const [expirityCard, setExpirityCard] = useState('');
const [ccvCard, setCcvCard] = useState('');


function handleChangeNum(e) {
    setNumberCard(e.target.value);
}

function handleChangeNam(e) {
    setNameCard(e.target.value);
}

function handleChangeExp(e) {
    setExpirityCard(e.target.value);
}

function handleChangeCcv(e) {
    setCcvCard(e.target.value);
}

    return(
        <div>
            <div className="w-full h-screen bg-red-100 relative ">
                <div>

                </div>
                <div className="w-full h-screen  flex flex-row">
                    <div className="w-1/2 bg-black flex justify-center items-center">
                        <div className="cursor-pointer absolute flex top-1 left-1 items-center h-6 text-xs">
                            <FaChevronLeft className="text-white"/>
                            <div className=" text-white">CONTINUE SHOPPING</div>
                        </div>
                        <div className="w-[300px] bg-black flex flex-col">

                            <div className="flex items-center text-gray-400 justify-between text-xs flex-row">
                                <div>Cart</div>
                                <FaChevronRight />
                                <div>Place Order</div>
                                <FaChevronRight />
                                <div className="text-white">Pay</div>
                                <FaChevronRight className="text-white"/>
                                <div>Order complete</div>
                            </div>
                            <div className="w-full h-8 justify-between items-end flex px-4">
                                <div className=" cursor-pointer font-bold text-xs w-32 h-5 bg-gray-100 rounded justify-center items-center flex ">
                                    New card
                                </div>
                                <div className="cursor-pointer font-bold text-xs w-32 h-5 bg-slate-400 rounded justify-center items-center flex">
                                    checkout
                                </div>
                            </div>
                            <div className=" w-full h-48 bg-black px-4 flex justify-center items-center ">
                                <div className="flex-col  w-[270px] h-40 bg-slate-600 rounded-3xl">
                                    <div className="h-1/2 justify-center items-center flex">
                                        <div className="w-1/2 h-full">
                                            <div className="left-5 top-3 w-10 bg-slate-800 h-7 items-center flex-col relative rounded-lg">
                                                <div className="right-0.5  h-2.5 text-white  text-xs font-semibold flex top-0.5 absolute" >
                                                    AM
                                                </div>
                                                <div className="right-0.5  h-2 text-white  text-xs font-semibold flex bottom-2 absolute" >
                                                    EX
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 h-full flex ">
                                            <div className="text-white left-2 text-xs font-semibold flex top-4 relative" >
                                                American Express
                                            </div>                                          
                                        </div>
                                    </div>
                                    <div className="h-1/2 flex-col">
                                        <div className="w-full h-10 text-xl text-white font-bold flex items-center pl-5 ">
                                            <p>{numberCard}</p>
                                        </div>
                                        <div className="justify-between flex">
                                            <div className="w-1/2 flex">
                                                <div className=" h-4 text-xs text-white flex  pl-5 ">
                                                    ccv/ccv2
                                                </div>
                                                <div className=" h-4 w-1/2 text-xs text-white pl-2 font-semibold">
                                                    <p>{expirityCard}</p>
                                                </div>
                                            </div>
                                            <div className="w-1/2 flex">
                                                <div className="w-1/2 h-4 text-xs text-white flex ">
                                                    Good thru
                                                </div>
                                                <div className=" h-4 w-1/2 text-xs text-white font-semibold">
                                                    <p>{ccvCard}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full text-xs pl-5 text-white font-semibold justify-start flex">
                                            <p>{nameCard}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="text-xs text-white">
                                    CARD NUMBER
                                </div>
                                <input type="text" value={numberCard} onChange={handleChangeNum} className="border-[1.5px] text-sm bg-slate-600 text-white my-1 w-[268px] px-3 h-8 rounded-lg"/>
                                <div className="mt-3 text-xs text-white">
                                    NAME ON CARD
                                </div>
                                <input type="text" value={nameCard} onChange={handleChangeNam} className="border-[1.5px] text-sm bg-slate-600 text-white my-1 w-[268px] px-3 h-8 rounded-lg"/>
                                <div className="px-0 flex justify-between " >
                                    <div className=" ">
                                        <div className="mt-3 text-xs text-white">
                                        EXPIRITY DATE
                                        </div>
                                        <input type="text" value={expirityCard} onChange={handleChangeExp} className="border-[1.5px] text-sm bg-slate-600 text-white my-1 px-3 w-32 h-8 rounded-lg"/>
                                    </div>
                                    <div className=" ">
                                        <div className="mt-3 text-xs text-white">
                                        CVV
                                        </div>
                                        <input type="text" value={ccvCard} onChange={handleChangeCcv} className="border-[1.5px] text-sm bg-slate-600 text-white my-1 px-3 w-32 h-8 rounded-lg"/>
                                    </div>
                                </div>
                                <div className="cursor-pointer font-bold text-black text-xs bg-white mt-3 w-[268px] px-3 h-8 rounded-lg justify-center items-center flex">
                                    Add your card
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="w-1/2 bg-red-400">
                        2
                    </div>
                </div>
               
            </div>
        </div>
    );

}

export default cardJuanes;