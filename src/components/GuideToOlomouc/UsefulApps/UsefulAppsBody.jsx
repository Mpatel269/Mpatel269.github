import React from 'react';

const UsefulAppsBody = () => {
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
                                <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">App Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto vitae necessitatibus nemo quis corrupti tempore eius, voluptatum accusamus alias pariatur, sapiente neque iusto aliquid praesentium assumenda maxime suscipit temporibus!</p>
                                </div>
                            </div>
                        </div>

                        <div class={openTab === 2? "block" : "hidden"} id="link2">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">App Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at voluptatibus nostrum ipsa, provident vitae iure hic delectus voluptas quia, blanditiis ut, dolor debitis velit assumenda dolores neque saepe doloribus!</p>
                                </div>
                            </div>
                        </div>

                        
                        <div class={openTab === 3? "block" : "hidden"} id="link3">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">App Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at voluptatibus nostrum ipsa, provident vitae iure hic delectus voluptas quia, blanditiis ut, dolor debitis velit assumenda dolores neque saepe doloribus!</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class={openTab === 4? "block" : "hidden"} id="link4">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGl0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">App Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at voluptatibus nostrum ipsa, provident vitae iure hic delectus voluptas quia, blanditiis ut, dolor debitis velit assumenda dolores neque saepe doloribus!</p>
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
        </div>
    )
};

export default UsefulAppsBody;