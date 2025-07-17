'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LatestEventCard from '@/components/event-card/event-card';
import Link from 'next/link';
import { getLocalStorage } from '@/utils/common';

export default function ProductOffers() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(getLocalStorage("eventData"));
    setEventData(data);
  }, []);
 
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-8">
      <div className='text-4xl font-semibold mb-4 text-center pb-4 text-[#0e91ab]'>Latest Events</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventData.slice(0, 3).map((item, index) => (
          <LatestEventCard
            eventData={item}
            eventLink={`/events/${item.id}`}
          />
        ))
        }
      </div>
      <Link href={"/events"}>
        <div className='text-center pt-8 underline text-[#0e91ab] cursor-pointer'>View all Events</div>
      </Link>
    </div>
  );
}