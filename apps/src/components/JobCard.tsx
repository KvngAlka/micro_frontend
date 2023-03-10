import React from 'react'

interface IJobCard {
    imgUrl : string,
    jobTitle : string,
    description : string,
    jobTimes : string[],
    mutualFriends : {profilePic : string}[],
    applyLink : string,
    messageLink : string
}

const JobCard = ({imgUrl, jobTitle,jobTimes, description} : IJobCard) => {
  return (
    <div className='w-full shadow-lg rounded-lg p-3 bg-white text-gray-600 flex flex-col gap-3 '>
        <div className='relative w-14 h-14 rounded-lg overflow-hidden'>
            <img src={imgUrl} alt="" />
        </div>
        <h4 className='font-bold text-gray-800'>{jobTitle}</h4>
        <h4 className='text-sm'>{description}</h4>

        <div className='flex items-center gap-2'>
            {
                jobTimes.map((time,i)=> <h4 key={i} className='py-2 px-3 bg-gray-100 rounded-lg'>{time}</h4> )
            }
        </div>

        <div className='relative flex gap-2 py-5'>
            <div className='flex w-28 relative'>
                <img className='w-8 h-8 absolute left-0 rounded-full object-cover border border-white' src={imgUrl} alt="" />
                <img className='w-8 h-8 absolute left-5 rounded-full object-cover border border-white' src={imgUrl} alt="" />
                <img className='w-8 h-8 absolute left-10 rounded-full object-cover border border-white' src={imgUrl} alt="" />
                <div className='w-8 h-8 absolute left-14 grid place-items-center opacity-90 bg-gray-200 rounded-full object-cover border border-white'>
                    <h4 className='text-sm' >3+</h4>
                </div>
            </div>
            <h4>5 Friends work here</h4>
        </div>

        <div className='w-full flex items-center justify-between gap-4'>
            <button className='w-full bg-blue-600 text-white rounded-lg p-2'>
                Apply Now
            </button>
            <button className='w-full bg-gray-200 text-gray-800 rounded-lg p-2'>
                Message
            </button>
        </div>

    </div>
  )
}

export default JobCard