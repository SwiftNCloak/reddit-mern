import mainimg from '../assets/main.jpg'

function BoardHeader(){
    return(
        <>
            <div className="h-20 bg-cover" style={{backgroundImage:'url(./src/assets/2.png)'}}></div> {/* Subheader */}
            <div className='bg-reddit_dark-brighter'>
                <div className="mx-6 relative flex">
                <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white">
                    <img src={mainimg} alt="" />
                </div>
                <div className='pt-2 pl-4'>
                    <h1 className='text-gray-300 text-3xl font-bold'>just a reddit clone</h1>
                    <h5 className='text-gray-500'>r/markjamesbonifacio</h5>
                </div>
                </div>
            </div>
        </>
    )
}

export default BoardHeader