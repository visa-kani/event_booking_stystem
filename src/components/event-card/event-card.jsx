'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MdLocationPin } from "react-icons/md";
import { HiCalendarDateRange } from "react-icons/hi2";
import Button from '../button';
import { setLocalStorage } from '@/utils/common';

function LatestEventCard(props) {
    const { eventData, eventLink } = props;

    const handleEventRoute = () => {
        setLocalStorage("selectedEvent", JSON.stringify(eventData)); // Store the selected event data in localStorageeventData)
    }

return (
    <div
        key={eventData.id}
        style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 "
    >
        <div className="relative h-50 bg-gray-200 flex items-center justify-center m-2 rounded-lg">
            {/* Product Image */}
            <Image
                src={eventData.image}
                alt={eventData.title}
                className="w-full h-full object-cover rounded-lg"
            />
        </div>

        {/* Content */}
        <div className="px-2 bg-white">
            <div className="">
                <div className='flex justify-between items-center'>
                    <p className="text-xs text-[#0e91ab] inline-block bg-[#c3e2e8] rounded-2xl px-2 pt-0.5 pb-1 font-medium">
                        {eventData.category}
                    </p>
                    <div className='flex items-center justify-center mx-2 '>
                        <HiCalendarDateRange className="inline-block text-xl text-grey-800" />
                        <div className='text-sm font-medium text-gray-600 ml-1'>{eventData.date}</div>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 clamp-1  mt-2">
                    {eventData.title}
                </h3>
                <p className='text-sm text-gray-500 mt-1 font-medium clamp-2'>{eventData.description}</p>
                <div className='flex items-center my-3 justify-between'>
                    <div className='flex items-center'>
                        <MdLocationPin className="inline-block text-xl text-orange-800" />
                        <div className='text-sm font-medium text-gray-600'>{eventData.location}</div>
                    </div>   <div className='text-xs font-medium text-[#0e91ab] mr-1'>Available Seats: {eventData.availableSeat}</div>
                </div>
                <div className='mb-3'>
                    <Link href={eventLink}>
                        <Button onClick={handleEventRoute} buttonText={"View Event"} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default LatestEventCard