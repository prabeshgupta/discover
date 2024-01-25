"use client";
import Hero from '@/components/Hero';
import PlaceList from '@/components/PlaceList';
import { useEffect, useState } from 'react';

export default function Home() {

  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlaceList('Hotels in Kathmandu');
  }, []);

  const getPlaceList = async (value: string) => {
    setPlaceList([]);
    const result = await fetch('/api/google-places-api?q=' + value);
    const data = await result.json();
    setPlaceList(data.resp.results);
  }

  return (
    <div>
      <Hero userInput={(value: string) => getPlaceList(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}