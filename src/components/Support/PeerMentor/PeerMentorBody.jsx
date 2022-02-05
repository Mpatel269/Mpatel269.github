import React from 'react';

const PeerMentorBody = () => {
    return(
        <div class="">
            <div class="flex flex-col">
                
                <div class="flex flex-row">
                    <div class="flex flex-col w-1/2 items-center justify-center">
                        <div class="p-4 font-semibold text-xl">
                            <p>Peer Mentoring at Palacky:</p>
                        </div>
                        <div class="p-6 px-12 text-center">
                            <p>For many years, the fantastic success emulated by the students of
                                 Palacky has been down to key knowledge and communication between
                                  the upper and lower years regardless of race, creed or culture. 
                                 </p>
                        </div>
                        <div class="p-6 px-12 text-center">
                            <p> Palacky prides itself on the cohesive network that we are and we 
                                  hope to further cement the bonds of our programme through the 
                                 buddy system</p>
                        </div>
                        <div class="p-2 font-semibold text-lg">
                            <p>Interested in being a mentor?</p>                            
                        </div>
                        <div class="p-2"> 
                            <a href="https://forms.gle/rVgAd1DFpsuhDAkw8" class="font-semibold text-pepa-blue hover:text-gray-700" target='_blank' rel='noopener noreferrer'>Click here to register your interest</a>
                        </div>
                    </div>
                    <div class="flex flex-col w-1/2">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PeerMentorBody;