
import React, { useEffect } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sub_logo from '../assets/sub_logo.jpg'
import { FaLock } from "react-icons/fa6";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { CgPaypal } from "react-icons/cg";
import { SiPaytm } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { BsCash } from "react-icons/bs";
import { CiSquareMinus } from "react-icons/ci";



const Payment = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store?.user?.userDetails)
    const orderTotal = useSelector((s)=> s?.cart?.orderTotal);
    
    useEffect(() => {
        if(!user){
          navigate("/")
        }
      } , [])

    const handleBackCart = () => {
         navigate("/cart")
    }
  return (
    <div className='p-2 m-2'>
      <div className='flex items-center bg-yellow-600 w-[12%] rounded-full text-gray-800 cursor-pointer' onClick={handleBackCart}>
      <IoArrowBackCircleOutline className='w-6 h-6 m-2 '/>
      <button className='font-semibold'>Back to Cart</button>
      </div>

      <div className='p-2 m-2'>
        <div className='flex items-center justify-between p-1'>
            <div className='p-1'>
                <img className='w-36 cursor-pointer' 
                src={sub_logo} 
                alt="logo" onClick={()=>{navigate("/home")}}/>
            </div>
            <div className='p-1'>
                <h1 className='font-semibold text-2xl text-gray-700'>Checkout</h1>
            </div>
            <div className='p-1'>
            <FaLock  className='w-7 h-7 text-gray-500'/>
            </div>
        </div>
        <hr />
      </div>

      <div className='p-2 m-2'> {/* payment ,=methos and order summary checkout */}
      <div className='flex justify-between gap-2'>
        <div className='flex flex-col w-8/12 p-3 border border-gray-300 rounded-lg'>{/* payment ,=methods */}
            <div className='mb-4'>
                <h1 className=' text-orange-900 font-semibold text-2xl'>Select a payment method</h1>
            </div>
            <div className='mb-2'>
                <div className='flex flex-col cursor-pointer'>
                    <div className='flex items-center'>
                    <RiCheckboxBlankCircleLine className='mr-2 cursor-not-allowed'/>
                    <CiCreditCard1 className='mr-1 '/> 
                    <h1 className='font-semibold'>Credit or debit card</h1>
                    </div>{/* credit debit card */}
                    <div className='flex pt-2'>
                        <div className='mr-2 text-sky-400'>
                            <CgPaypal className='w-10 h-10'/>
                        </div>
                        <div className='mr-2 text-blue-500'>
                            <SiPaytm className='w-10 h-10'/>
                        </div>
                        <div className='mr-2 text-green-400'>
                            <RiVisaLine className='w-10 h-10'/>
                        </div>
                        <div className='mr-2  text-red-900'>
                            <FaCcMastercard className='w-10 h-10'/>
                        </div>
                        <div className='mr-2'>
                            <FaApplePay className='w-10 h-10'/>
                        </div>
                        <div className='mr-2 text-sky-700'>
                            <FaCcPaypal className='w-10 h-10' />
                        </div>
                        <div className='mr-2 text-blue-950'>
                            <FaGooglePay className='w-10 h-10'/>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className='mt-3 mb-4'>
                <div className='flex flex-col cursor-pointer'>
                    <div className='flex items-center'>
                    <RiCheckboxBlankCircleLine className='mr-2 cursor-not-allowed'/>
                    <CiBank className='mr-1'/>
                    <h1 className='font-semibold'>Net Banking</h1>
                    </div>
                    <div className='mt-1'>
                        <select className='bg-gray-200 w-44 h-8 rounded-lg mt-2 font-serif cursor-pointer'>
                            <option className='bg-gray-200 '>FashionFusion Bank</option>
                            <option className='bg-gray-200'>Axis bank</option>
                            <option className='bg-gray-200'>HDFC Bank</option>
                            <option className='bg-gray-200'>ICICI Bank</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            
            <div className='mt-3 mb-4'>
                <div className='flex flex-col cursor-pointer'>
                    <div className='flex items-center'>
                    <RiCheckboxBlankCircleLine className='mr-2 cursor-not-allowed'/>
                    <CiSquareMinus className='mr-1'/>
                    <h1 className='font-semibold'>EMI</h1>
                    </div>
                    <div className='mt-1'>
                        <select className='bg-gray-200 w-44 h-8 rounded-lg mt-2 font-serif cursor-pointer'>
                            <option className='bg-gray-200 '>Add a new card</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />

            <div className='mt-2 mb-4'>
                <div className='flex items-center cursor-pointer'>
                    <div>
                        <RiCheckboxBlankCircleLine className='mr-2 cursor-not-allowed'/>
                    </div>
                    <div className='flex items-center'>
                    <BsCash className='mr-1'/>
                    <h1 className='font-semibold'>Cash on Delivery/Pay on Delivery</h1>
                    </div>
                </div>
                <div className='mt-1'>
                    <h1 className='ml-6 text-gray-900 font-normal font-serif'>Cash , UPI and Cards accepted.</h1>
                </div>
            </div>
            <hr />

        </div>
        <div className='w-4/12'> 
            <div className='flex flex-col border border-gray-200 rounded-lg m-2 p-2'>
                <div className='p-1'>
                    <h1 className='font-semibold text-gray-950 text-lg'>Order Summary</h1>
                </div>
                <div className='p-2'>
                    <div className='flex flex-col mb-3'>
                        <div className='flex justify-between'>
                            <div>Items: </div>
                            <div className='font-semibold text-gray-700'>₹{orderTotal}.00</div>
                        </div>

                        <div className='flex justify-between'>
                            <div>Promotion Applied:</div>
                            <div className='font-semibold text-gray-700'>₹{orderTotal >= 1000 ? "100.00" : "0.00"}</div>
                        </div>

                        <div className='flex justify-between'>
                            <div>Total:</div>
                            <div className='font-semibold text-gray-700'>₹
                            {orderTotal >= 1000 ? 
                            (orderTotal - 100) : 
                            (orderTotal)}.00
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <div className='font-bold text-xl text-red-600'>Order Total:</div>
                            <div className='font-bold text-lg text-red-600'>₹
                            {orderTotal >= 1000 ? 
                            (orderTotal - 100) : 
                            (orderTotal)}.00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button disabled className='w-10/12 ml-8 p-2 font-semibold text-lg rounded-b-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 cursor-not-allowed'>Make Payment</button>
                <h1 className='ml-10 text-gray-500'>(Disclaimer: The Payment method is not enabled , Thank you for visiting! You can explore the Products.)</h1>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
