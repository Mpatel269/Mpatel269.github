import React from 'react';

const BasketballBody = () => {
    return(
        <section class="relative pt-16 bg-blueGray-50">
            <div class="flex flex-wrap w-full mb-4 p-4">
                <div class="w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Basketball</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
            </div>

            <div class="container mx-auto">
            <div class="flex flex-wrap items-center">
                <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-900">
                    <img alt="..." src="https://images.unsplash.com/photo-1587960184060-aa880aabdd04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFza2V0YmFsbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"/>
                    <blockquote class="relative p-8 mb-4">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon points="-30,95 583,95 583,65" class="text-blue-900 fill-current"></polygon>
                    </svg>

                    <p class="text-md font-light mt-2 text-white">
                    Regular pick-up games have been organized in the city by a 
                    mixed group of expats, students, and locals of various ages.
                    </p>
                    <p class="text-md font-bold font-light mt-2 text-white">
                        Additional Information:
                    </p>
                    <p class="text-md font-light mt-2 text-white">
                        Bring a change of shoes/clothes - the venue requests for all 
                        members to wear indoor shoes while playing
                    </p><br/>
                    <p class="text-md font-light mt-2 text-white">
                        Join our Basketball Whatsapp group to keep updated about 
                        timings and more:
                    </p>

                    </blockquote>
                </div>
                </div>

                <div class="w-full md:w-6/12 px-4">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col mt-4">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-clock text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Time:</h6>
                        <p class="mb-4 text-blueGray-500">
                            Every Tuesday, from 8:00 PM to 9.30 PM
                        </p>
                        </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-coins text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Cost:</h6>
                        <p class="mb-4 text-blueGray-500">
                            Sessions typically coset between 50-60Kc
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col min-w-0 mt-4">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-map-marker-alt text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Location:</h6>
                        <p class="mb-4 text-blueGray-500">
                            Slavic grammar, French section (<a class="text-blue-500" href="https://maps.app.goo.gl/2Ap3W4PTbgio8bUB9" target="_blank" rel="noopener noreferrer">open in Maps</a>)
                        </p>
                        </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                        <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i class="fas fa-walking text-xl"></i>
                        </div>
                        <h6 class="text-xl mb-1 font-semibold underline">Travel:</h6>
                        <p class="mb-4 text-blueGray-500">
                            10 minute walk from Hlavni Nadrazi or take a bus to the stop
                            'Pasteurova'
                        </p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
    )
};

export default BasketballBody;