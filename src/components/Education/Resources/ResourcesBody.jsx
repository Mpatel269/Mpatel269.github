import React from 'react';

const ResearchBody = () => {
    return(
        <div class=" h-screen">
            <div class="flex flex-row justify-evenly h-full bg-gray-800 opacity-95">
                <div class="flex flex-col w-max h-3/6 self-center justify-center p-8 bg-gray-600 rounded-xl transform transition-all hover:scale-105">
                    <div class="self-center text-gray-200 font-semibold text-3xl mb-8">
                    <p>PEPA Drive: 1st Year</p>
                    </div>
                    <div class="text-4xl self-center text-gray-100 transform hover:rotate-180 transition-all duration-500">
                        <i class="fab fa-google-drive fa-6x"></i>
                    </div>
                </div>
                <div class="flex flex-col w-max h-3/6 self-center justify-center p-8 bg-gray-900 rounded-xl transform transition-all hover:scale-105">
                    <div class="self-center text-gray-200 font-semibold text-3xl mb-8">
                    <p>PEPA Drive: 2nd-6th Year</p>
                    </div>
                    <div class="text-4xl self-center text-gray-100  transform hover:-rotate-180 transition-all duration-500">
                        <i class="fab fa-google-drive fa-6x"></i>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ResearchBody;