'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

import { SearchBar } from "./components/SearchBar";

export default function Home() {

  const [searchParam, setSearchParam] = useState('');

  const apiKey = process.env.NEXT_PUBLIC_NBA_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.balldontlie.io/v1/players', {
        headers: {
          Authorization: apiKey
        }
      });
      console.log('response', response.data);
    } catch (error) {
      console.log('error', error);
    }
    // try {
    //   const response = await axios.get(`https://api.balldontlie.io/v1/players`, {
    //     headers: {
    //       Authorization: apiKey,
    //     }
    //   });
    //   console.log('response', response);
    //   console.log('data', response.data);
    // } catch (error) {
    //   console.log(error.error);
    //   // res.status(500).json({ error: 'Failed to fetch data' });
    // }
  }

  return (
    <>
      <SearchBar changeSearch={setSearchParam} formSubmitAction={handleSubmit}/>
    </>
  );
}
