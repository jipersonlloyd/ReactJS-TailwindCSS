
const FirstPage = () => {
    return (
        <div className='h-dvh w-screen flex flex-row items-center background'>
        <div className='h-fit w-1/3  ml-32 flex flex-col justify-center items-start'>
          <div className='text-white font-bold text-5xl pb-6 font-californian'>LOREM IPSUM</div>
          <div className='text-white pb-6 font-californian'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nunc, molestie eu sodales nec, euismod id odio. Vivamus semper molestie tellus, eu porttitor massa semper dapibus. Donec semper accumsan eros vitae pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nunc, molestie eu sodales nec, euismod id odio.</div>
          <button
            className="bg-customTertiaryGreen border-2 border-transparent font-semibold text-white px-4 py-2 rounded-xl font-calibriBold">Learn More
          </button>
        </div>
      </div>
    )
}

export default FirstPage