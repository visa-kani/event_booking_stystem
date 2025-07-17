'use client'
import React, { useState, useEffect } from 'react'
import ProductSlider from './banner'
import ProductOffers from './showcase'
import { eventData } from "@/constants";
import { setLocalStorage } from '@/utils/common';

function InitialPage() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setLocalStorage("eventData", JSON.stringify(eventData));
    setLoader(false);
  }, [])
  return (
    <div>
      {loader ? <div className="loader">loading...</div>
        : <>
          <ProductSlider />
          <ProductOffers />
        </>}
    </div>
  )
}

export default InitialPage