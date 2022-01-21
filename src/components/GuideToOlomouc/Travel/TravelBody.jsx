import React from 'react';

const TravelBody = () => {
    const [openTab, setOpenTab] = React.useState(1);
    
    return(
        <div>
            {/* gallery slider */}
            <div class="flex flex-col pt-12">
                <div class="flex flex-row justify-evenly">
                    <div class="self-center text-center hover:text-teal-700 w-1/12" onClick={e => openTab > 1 ? setOpenTab(openTab - 1) : setOpenTab(1)}>
                    <i class="fas fa-chevron-left fa-2x"></i>
                    </div>               
                    <div class="w-10/12">
                        <div class={openTab === 1? "block" : "hidden"} id="link1">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1572376390533-dca20771dc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vza3klMjBrcnVtbG92fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Title</p>
                                    <p class="self-center p-8 text-center">text about area of interest e.g prague is situated in the western region of the czech republic. it can be accessed from olomouc by train and coach. Here are a list of things that you can do there:</p>
                                </div>
                            </div>
                        </div>

                        <div class={openTab === 2? "block" : "hidden"} id="link2">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJhZ3VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Title</p>
                                    <p class="self-center p-8 text-center">text about area of interest e.g prague is situated in the western region of the czech republic. it can be accessed from olomouc by train and coach. Here are a list of things that you can do there:</p>
                                </div>
                            </div>
                        </div>

                        
                        <div class={openTab === 3? "block" : "hidden"} id="link3">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1592838530410-6d5867c196d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGN6ZWNoJTIwcmVwdWJsaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Title</p>
                                    <p class="self-center p-8 text-center">text about area of interest e.g prague is situated in the western region of the czech republic. it can be accessed from olomouc by train and coach. Here are a list of things that you can do there:</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class={openTab === 4? "block" : "hidden"} id="link4">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1584900935944-961e0d298694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGF0cmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Title</p>
                                    <p class="self-center p-8 text-center">text about area of interest e.g prague is situated in the western region of the czech republic. it can be accessed from olomouc by train and coach. Here are a list of things that you can do there:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="self-center text-center hover:text-teal-700 w-1/12" onClick={e => openTab < 4? setOpenTab(openTab + 1) : setOpenTab(4)}>
                        <i class="fas fa-chevron-right fa-2x"></i>
                    </div>                  
                </div>

                <div class="flex flex-row justify-center">
                    <div class="flex flex-row mt-6 my-2 w-max">
                        <a href="#link1" onClick={e => {e.preventDefault(); setOpenTab(1)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 1? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                        <a href="#link2" onClick={e => {e.preventDefault(); setOpenTab(2)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 2? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                        <a href="#link3" onClick={e => {e.preventDefault(); setOpenTab(3)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 3? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                        <a href="#link4" onClick={e => {e.preventDefault(); setOpenTab(4)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 4? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                    </div>
                </div>
            </div>

            {/* Travel card section */}
            <div>
                <div>
                    div
                </div>
            </div>
        </div>
    )
};

export default TravelBody;