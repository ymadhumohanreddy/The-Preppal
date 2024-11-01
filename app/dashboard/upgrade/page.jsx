import React from 'react'

import planData from '../../../utils/planData'
import PlanItemCard from './_components/PlanItemCard'

function Upgrade() {
    return (
        <div className='p-10'>
            <h2 className='font-serif text-2xl text-center'>You don't have to pay a single dime,</h2>
            <h2 className='text-center  text-gray-500'>It's free for lifetime</h2>

            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="">

                {planData.map((plan,index)=>(
                     <PlanItemCard plan={plan} key={index} />
                ))}
                   


                </div>
            </div>
        </div>
    )
}

export default Upgrade