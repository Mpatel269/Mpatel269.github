import React from 'react';
import supportIcon from '../../../images/support-icon.svg';

const AdviceBody = () => {
    return(
        <div class="">
            <div class="flex flex-col">
                <div class="">
                    <h1> Need advice about something?</h1>
                </div>
                <div class="flex items-center justify-center w-screen py-16 bg-white">
                    <div class="flex flex-col h-10/12 w-10/12 bg-gray-900 text-white rounded-lg">
                        <div class="p-8 text-2xl text-center font-semibold">
                            <p>Need advice about something?</p>
                        </div>
                        <div class="p-8 self-center">
                            <img src={supportIcon} alt="" />
                        </div>
                        <div class="p-8 text-center font-semibold">
                            <p>Medicine and Dentistry can be very demanding at times. As pressure from work builds, we can all feel concerned about exams, feel a lack of support and might be struggling mentally. </p>
                        </div>
                        <div class="p-8 text-center font-semibold">
                            <p> If you feel like you need advice about something - academic or not - feel free to reach out to us and we will do our best to find you the right support confidentially.</p>
                        </div>
                        <div class="flex flex-row justify-evenly">
                            <div class="p-4 m-6 rounded-xl border-2 hover:bg-gray-800 transform transition duration-200 hover:scale-105 hover:border-opacity-0">
                                <i class="fab fa-facebook-messenger fa-4x"></i>
                            </div>
                            <div class="p-4 m-6 rounded-xl border-2 hover:bg-gray-800 transform transition duration-200 hover:scale-105 hover:border-opacity-0">
                                <i class="fas fa-envelope fa-4x"></i>
                            </div>
                            <div class="p-4 m-6 rounded-xl border-2 hover:bg-gray-800 transform transition duration-200 hover:scale-105 hover:border-opacity-0">
                                <i class="fab fa-instagram fa-4x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdviceBody;