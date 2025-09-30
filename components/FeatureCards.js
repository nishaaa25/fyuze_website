import Image from 'next/image'
import React from 'react'

const FeatureCards = () => {
  return (
    <div className='h-[40vh] w-full flex gap-12 justify-center'>
      <div className='h-64 w-80 rounded-4xl cards-gradient p-5'>
        <Image src="/sealCheck.svg" alt="feature-card-1" width={35} height={35} />
        <h1 className='text-white text-3xl font-bold'>
          100M + Verified Creators
        </h1>
        <p className='text-white text-sm'>
          Ai-powered	discovery	systems	that	continuously	identify	new	creators.
        </p>
      </div>
      <div className='h-64 w-80 rounded-4xl cards-gradient p-5'>
        <Image src="/userFocus.svg" alt="feature-card-1" width={35} height={35} />
        <h1 className='text-white text-3xl font-bold'>
          30+	Metrics	for	Creator	Vetting
        </h1>
        <p className='text-white text-sm'>
          Ai-powered	subcategorization	for	hyper-specific	targeting.
        </p>
      </div>
      <div className='h-64 w-80 rounded-4xl cards-gradient p-5'>
        <Image src="/crossHair.svg" alt="feature-card-1" width={35} height={35} />
        <h1 className='text-white text-3xl font-bold'>
          99%	Match	Accuracy
        </h1>
        <p className='text-white text-sm'>
          Ai-powered	creator	matching and	cutting-edge	fraud detection.
        </p>
      </div>
    </div>
  )
}

export default FeatureCards