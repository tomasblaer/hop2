'use client'

import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <main>

    </main>
  );
}
