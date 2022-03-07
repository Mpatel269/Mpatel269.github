import React from 'react';

const OutOfHoursBody = () => {
    return(
        <div class="h-screen bg-gray-200 flex items-center justify-center">
            <div class="bg-gray-800 h-5/6 w-10/12 rounded-lg flex flex-col">
                <div class="h-1/6 w-full flex items-center justify-center">
                    <p class="text-white text-2xl font-semibold">Out Of Hours Support</p>
                </div>
                <div class="h-5/6 w-full flex flex-row justify-evenly items-center">
                    <div class="h-5/6 w-5/12 rounded-lg bg-white text-center">
                        <div class="p-6 font-semibold underline">
                            <p>University Support:</p>
                        </div>       
                        <div>
                            <p>Tutor: Dr Bela Erdsova</p>
                            <p>Tutor: Dr Zlata Prazanova</p>
                            <br />
                        </div>
                        <div class="pt-8">
                            <p>Any additional information</p>
                        </div>              
                    </div>
                    <div class="h-5/6 w-5/12 rounded-lg bg-white text-center">
                        <div class="p-6 font-semibold underline">
                            <p>Emergency Services:</p>
                        </div>
                        <div >
                            <p>Police: </p>
                            <p>Ambulance: </p>
                            <p>Fire: </p>
                        </div>
                        <div class="pt-8">
                            <p>Any additional information</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OutOfHoursBody;