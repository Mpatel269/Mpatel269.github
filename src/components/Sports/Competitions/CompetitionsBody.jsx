import React from 'react';

const CompetitionsBody = () => {
    return(
        <div>
            <div class="py-8 bg-pepa-blue flex items-center justify-center ">
                <div class="h-5/6 w-10/12 bg-gray-50 rounded-lg">
                    <div class="h-1/6 p-8 bg-gray-200 rounded-t-lg flex flex-row items-center justify-center text-2xl font-semibold">
                        <div class="px-4">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <p>Competitions and Tournaments</p>
                        <div class="px-4">
                            <i class="fas fa-trophy"></i>
                        </div>
                    </div>
                    <div class="h-4/6 p-8 text-center shadow-lg">
                        <p class="py-4">Every year PEPA strives to organise and participate in tournaments both intra and inter faculty.</p>
                        <p class="py-4 font-semibold">Interested in collaborating with us?</p>
                        <p class="py-4">We would welcome any opportunity to collaborate on sporting events with other student organisations. Get in touch with us via any of our social media outlets or by email:</p>
                        <p class="py-4">Pepa.palacky@gmail.com</p>
                    </div>
                    <div class="rounded-b-lg text-center font-semibold bg-gray-200">
                        <p class="pt-4 text-xl">Tournament Gallery</p>
                        <br />
                        <div class="py-8 flex flex-row space justify-evenly items">
                            <div class="h-5/6 w-3/12">
                                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cm5hbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div class="h-5/6 w-3/12">
                                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cm5hbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div class="h-5/6 w-3/12">
                                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cm5hbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CompetitionsBody;