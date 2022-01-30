import React from 'react';

const PeerMentorBody = () => {
    return(
        <div class="">
            <div class="flex flex-col">
                <div class="">
                    <h1 class="">Peer Mentoring at Palacky</h1>
                </div>
                <div class="flex flex-row">
                    <div class="flex flex-col w-1/2 items-center justify-center">
                        <div class="p-4 font-semibold">
                            <p>This is information about peer mentor program at palacky</p>
                        </div>
                        <div class="p-2">
                            <p>More information about peer mentor program</p>
                        </div>
                        <div class="p-2">
                            <p>Even more information about peer mentor program</p>
                        </div>
                        <div class="p-2">
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