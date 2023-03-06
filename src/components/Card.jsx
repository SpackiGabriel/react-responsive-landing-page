const Card = ({image, title, price, texts}) => {
    return(
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={image} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
            <p className='text-center text-4xl font-bold'>${price}</p>
            <div className='text-center font-medium'>
                {
                    texts.map((text, index) => (index == 0 ? 
                        <p className='py-2 border-b mx-8 mt-8'>{text}</p> : 
                        <p className='py-2 border-b mx-8'>{text}</p>
                    ))
                }
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
    )
}

export default Card