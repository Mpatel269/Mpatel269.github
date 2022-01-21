import React from 'react';

const FoodBody = () => {
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
                                <img src="https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3plY2glMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Food Location</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nemo aspernatur architecto nam aut? Cupiditate rerum nam blanditiis doloribus dolore eum aut odio, pariatur, illum error voluptate, ea maxime perspiciatis.</p>
                                </div>
                            </div>
                        </div>

                        <div class={openTab === 2? "block" : "hidden"} id="link2">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1541274575812-51ee8d4e398a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGN6ZWNoJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Food Location</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nemo aspernatur architecto nam aut? Cupiditate rerum nam blanditiis doloribus dolore eum aut odio, pariatur, illum error voluptate, ea maxime perspiciatis.</p>
                                </div>
                            </div>
                        </div>

                        
                        <div class={openTab === 3? "block" : "hidden"} id="link3">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGN6ZWNoJTIwZm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Food Location</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nemo aspernatur architecto nam aut? Cupiditate rerum nam blanditiis doloribus dolore eum aut odio, pariatur, illum error voluptate, ea maxime perspiciatis.</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class={openTab === 4? "block" : "hidden"} id="link4">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1466978953392-a5bcb87201bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGN6ZWNoJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Food Location</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nemo aspernatur architecto nam aut? Cupiditate rerum nam blanditiis doloribus dolore eum aut odio, pariatur, illum error voluptate, ea maxime perspiciatis.</p>
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

export default FoodBody;