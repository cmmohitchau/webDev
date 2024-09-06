import React from 'react';

function RevenueCard({ title, amount, orderCounts }) {
    return (
       <div className='grid grid-cols-3'>
         <div className="bg-white shadow-md rounded p-4 flex flex-col justify-between">
            <div className="text-gray-700 flex justify-between items-center">
                <div>{title}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-end mt-4">
                <div className="font-semibold text-2xl">₹{amount}</div>
                {orderCounts ? (
                    <div className="flex items-center text-blue-700 cursor-pointer">
                        <div className="underline font-medium">{orderCounts} Orders</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                ) : null}
            </div>
        </div>
       </div>
    );
}

export default RevenueCard;
