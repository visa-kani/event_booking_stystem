"use client";

import Button from "@/components/button";
import { getLocalStorage, setLocalStorage } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { HiCalendarDateRange } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";

export default function EventDetailsPage() {
    const params = useParams();
    const { id } = params; // get id from the route

    console.log("id", id);
    const [eventData, setEventData] = useState({});
    const [registerEventLoader, setRegisterEventLoader] = useState(false);

    const handleRegisterEvent = async () => {
        setRegisterEventLoader(true);

        setTimeout(() => {
            setRegisterEventLoader(false);
            toast.success("Event registered successfully");

            // Reduce availableSeat
            const updatedEvent = {
                ...eventData,
                availableSeat: eventData.availableSeat - 1,
            };

            const myEvents = JSON.parse(getLocalStorage("myEvents")) || [];
            const UpdateLocalStorage = JSON.parse(getLocalStorage("eventData")) || [];
            const existingIndex = myEvents.findIndex(
                (event) => event.id === eventData.id
            );

            if (existingIndex !== -1) {
                const existingEvent = myEvents[existingIndex];
                existingEvent.bookedCount = (existingEvent.bookedCount || 0) + 1;
                existingEvent.availableSeat = updatedEvent.availableSeat;
                myEvents[existingIndex] = existingEvent;
            } else {
                eventData.bookedCount = 1;
                eventData.availableSeat = updatedEvent.availableSeat;
                myEvents.push(eventData);
            }
            // localstorage which is listing
            const updateIndex = UpdateLocalStorage.findIndex(
                (event) => event.id === eventData.id
            );
            if (updateIndex !== -1) {
                UpdateLocalStorage[updateIndex] = updatedEvent;
            }

            setEventData(updatedEvent);
            setLocalStorage("myEvents", JSON.stringify(myEvents));
            setLocalStorage("selectedEvent", JSON.stringify(updatedEvent));
            setLocalStorage("eventData", JSON.stringify(UpdateLocalStorage));
        }, 3000);
    };


    useEffect(() => {
        const getData = getLocalStorage('selectedEvent');
        setEventData(JSON.parse(getData));
    }, []);

    console.log("eventData", eventData);

    return (
        <div className="p-4 w-[95%] m-auto">
            <Link className="flex items-center gap-1 text-[#0e91ab]" href="/events">Back to Events</Link>
            <h1 className="text-2xl font-bold text-center text-[#0e91ab]">Event Details</h1>
            <div className="xl:grid block grid-cols-3  my-10">
                <div className="col-span-1 flex justify-center">
                    <Image
                        src={eventData.image}
                        alt={eventData.title}
                        width={500}
                        height={500}
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-2 ml-4 relative">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="">
                                <h2 className="text-lg font-semibold">{eventData.title}</h2>
                                <p className="text-sm text-gray-600">{eventData.description}</p>
                            </div>
                            <div className='flex items-center my-5'>
                                <div className='flex items-center'>
                                    <MdLocationPin className="inline-block text-xl text-orange-800" />
                                    <div className='text-sm font-medium text-gray-600'>{eventData.location}</div>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center '>
                                    <HiCalendarDateRange className="inline-block text-xl text-grey-800" />
                                    <div className='text-sm font-medium text-gray-600 ml-1'>{eventData.date}</div>
                                </div>
                            </div>
                            <div className='text-base font-medium text-[#0e91ab] mr-1 mt-5'>Available Seats: {eventData.availableSeat}</div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full">
                        <Button disabled={registerEventLoader || eventData.availableSeat === 0} style={{ opacity: registerEventLoader || eventData.availableSeat === 0 ? 0.5 : 1, cursor: registerEventLoader || eventData.availableSeat === 0 ? "not-allowed" : "pointer", color: "#fff", backgroundColor: "#0e91ab" }} onClick={handleRegisterEvent} buttonText="Register Now" />
                    </div>
                </div>
            </div>


        </div>
    );
}


// export default async function EventDetailsPage({ params }) {
//   const { id } = params; // get id from the route

//   // fetch event data here if needed

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Event Details Page</h1>
//       <p>Event ID: {id}</p>
//     </div>
//   );
// }
