import React from 'react';
import HomepageModal from './HomepageModal';

const Hero = () => {
    return(
        
        <div class="bg-gray-900 flex align justify-center">
            <div class="absolute z-50">
                <HomepageModal/>
            </div>
            
            <div class="bg-gray-800 bg-opacity-75 container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="font-medium tracking-wide text-white text-4xl">Heading/title/announcement</h1>
                    <p class="mt-2 text-gray-300">Subheading paragraph text</p>
                    <div class="grid gap-6 mt-8 sm:grid-cols-2">
                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item</span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item</span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item </span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item </span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item</span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item </span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/18739235_1533598060024402_2042636813927187190_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=kzwdKXV_OIYAX-P1nmV&_nc_ht=scontent-prg1-1.xx&oh=00_AT_9R2yuiqVtBsnGjOvds3HglAqe03H2n8H6VLf_KmdRoQ&oe=6201FE41" alt=""/>
            </div>
        </div>
        </div>
    )
}

export default Hero;
