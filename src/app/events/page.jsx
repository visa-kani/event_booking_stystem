// 'use client';

// import Image from 'next/image';
// import React, {useState} from 'react';
// import LatestEventCard from '@/components/event-card/event-card';
// import { eventData } from '@/constants';
// import Search from '@/components/search';

// export default function ProductOffers() {
//     const [search, setSearch] = useState('');
//     return (
//         <div className="w-full max-w-7xl mx-auto px-4 pt-8">
//             <div className='flex justify-between items-center'>
//                 <div className='text-4xl font-semibold mb-4 text-center pb-4 text-[#0e91ab]'>Events</div>
//                 <Search setSearch={setSearch} search={search} placeholder="Search by title" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {eventData.map((item, index) => (
//                     <LatestEventCard
//                         eventData={item}
//                         eventLink={`/events/${item.id}`}
//                     />
//                 ))
//                 }
//             </div>
//         </div>
//     );
// }
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LatestEventCard from '@/components/event-card/event-card';
import { eventData } from '@/constants';
import Search from '@/components/search';

export default function ProductOffers() {
    const [search, setSearch] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(eventData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // set as needed

    // Filter events when search changes
    useEffect(() => {
        const filtered = eventData.filter(event =>
            event.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredEvents(filtered);
        setCurrentPage(1); // reset to first page on new search
    }, [search]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pt-8">
            <div className='flex justify-between items-center'>
                <div className='text-4xl font-semibold mb-4 text-center pb-4 text-[#0e91ab]'>Events</div>
                <Search setSearch={setSearch} search={search} placeholder="Search by title" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentEvents.length > 0 ? currentEvents.map((item) => (
                    <LatestEventCard
                        key={item.id}
                        eventData={item}
                        eventLink={`/events/${item.id}`}
                    />
                )) : (
                    <div className="col-span-3 text-center text-gray-500">
                        No events found.
                    </div>
                )}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
