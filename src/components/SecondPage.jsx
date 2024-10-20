import image from '../assets/360_F_600029869_zIAKzxPWbxrZis0ldwpJuEHptJwDPUu9.jpg';
const SecondPage = () => {
    return (
        <section className="h-fit flex flex-col mx-20 my-20">
            <div className="h-3/4 flex flex-row pl-10">
                <div className="w-5/12 pt-20 flex flex-col items-center">
                    <img src={image}></img>
                </div>
                <div className="w-7/12 flex flex-col items-left pt-20">
                    <div className='h-fit w-3/4'>
                        <div className='text-black font-bold text-3xl pb-6 font-californian'>Lorem ipsum dolor sit amet</div>
                        <div className='text-black pb-6 font-californian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nunc, molestie eu sodales nec, euismod id odio. Vivamus semper molestie tellus, eu porttitor massa semper dapibus. Donec semper accumsan eros vitae pulvinar. Donec ultrices rutrum dolor, in pretium orci rhoncus ac. Nam eu consequat nulla. Sed euismod metus bibendum blandit tincidunt. Vivamus id faucibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nunc, molestie eu sodales nec, euismod id odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nunc, molestie eu sodales nec, euismod id odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nunc, molestie eu sodales nec, euismod id odio. Vivamus semper molestie tellus, eu porttitor massa semper dapibus. Donec semper accumsan eros vitae pulvinar. Donec ultrices rutrum dolor, in pretium orci rhoncus ac. Nam eu consequat nulla. Sed euismod metus bibendum blandit tincidunt. Vivamus id faucibus quam.</div>
                        <button
                            className="bg-customTertiaryGreen border-2 border-transparent font-semibold text-white px-4 py-2 rounded-xl font-calibriBold">Discover More
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-24 mt-16 flex flex-row justify-center items-center border border-red-500">
            <div className='w-5/12 border border-customTertiaryGreen'></div>
            <div className='text-5xl font-chilankaRegular text-customTertiaryGreen px-2'>What We Do</div>
            <div className='w-5/12 border border-customTertiaryGreen'></div>
            </div>
        </section>
    )
}

export default SecondPage