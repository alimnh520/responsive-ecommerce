import { RxCross1 } from "react-icons/rx";

const CartBar = ({cartBar, setCartBar}) => {
    
    return (
        <div className={`h-screen ${cartBar ? "block right-0 animate-opacity" : "hidden"} w-full absolute top-0 z-10 before:absolute before:h-full before:w-full before:content-[""] before:bg-gray-600 before:opacity-50`}>
            <div className=" absolute right-0 w-80 h-full bg-white">
                <RxCross1 className=" top-5 right-5 absolute text-3xl cursor-pointer" onClick={() => setCartBar(!cartBar)} />
                <p className='p-10 pb-3 text-red-700 font-semibold border-b border-b-red-600'>Your cart</p>
                <p className='text-center uppercase px-14 py-4'>There are no more items in your cart</p>
                <p>{}</p>
            </div>
        </div>
    )
}

export default CartBar
