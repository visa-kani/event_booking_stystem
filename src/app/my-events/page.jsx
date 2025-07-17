"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getLocalStorage } from "@/utils/common";

export default function Cart() {
  const [eventData, setEventData] = useState([]);

  useEffect(()=>{
    const data = JSON.parse(getLocalStorage("myEvents"));
    setEventData(data);
  },[])

  return (
    <div className="p-6 w-[90%] m-auto">
      <h2 className="text-2xl font-semibold mb-4">My Events</h2>
      {eventData.length === 0 ? (
        <p>Your event registered data is empty.</p>
      ) : (
        <div className="space-y-4">
          {eventData.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-2 border-gray-200  p-4 rounded-lg">
              <div className="flex justify-baseline items-center">
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover mr-4"
                  />
                </div>
                <div>
                  <p className="font-medium w-[300px] clamp-2">{item.title}</p>
                  <p className="text-sm text-gray-500">Booked count: {item.bookedCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
