"use client";
import Hero from '@/components/Hero';
import PlaceList from '@/components/PlaceList';
import { useEffect, useState } from 'react';

export default function Home() {

  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlaceList();
  }, []);

  const getPlaceList = async () => {
    const result = await fetch('/api/google-places-api?q=Hotels in  Kathmandu');
    const data = await result.json();
    setPlaceList(data.resp.results);
  }

  return (
    <div>
      <Hero />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}