import React from 'react';

const TravelBody = () => {
    const [openTab, setOpenTab] = React.useState(1);
    
    return(
        <div>
            {/* gallery slider */}
            <div class="flex flex-col">
                <div class="flex flex-row justify-evenly">
                    <p class="self-center" onClick={e => openTab > 1 ? setOpenTab(openTab - 1) : setOpenTab(1)}>Previous</p>                    
                    <div>
                        <div class={openTab === 1? "block" : "hidden"} id="link1">
                            <img src="https://images.unsplash.com/photo-1572376390533-dca20771dc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vza3klMjBrcnVtbG92fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div class={openTab === 2? "block" : "hidden"} id="link2">
                            <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJhZ3VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div class={openTab === 3? "block" : "hidden"} id="link3">
                            <img src="https://images.unsplash.com/photo-1592838530410-6d5867c196d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGN6ZWNoJTIwcmVwdWJsaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div class={openTab === 4? "block" : "hidden"} id="link4">
                            <img src="https://images.unsplash.com/photo-1584900935944-961e0d298694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGF0cmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </div>
                    <p class="self-center" onClick={e => openTab < 4? setOpenTab(openTab + 1) : setOpenTab(4)}>Next</p>                  
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

            {/* Body of page */}
            <div>

            </div>
        </div>
    )
};

export default TravelBody;