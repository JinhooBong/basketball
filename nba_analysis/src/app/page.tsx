'use client';
import React, { useState } from 'react';

import { SearchBar } from "./components/SearchBar";

export default function Home() {

  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('searchparam', searchParam);
  }

  return (
    <>
      <SearchBar changeSearch={setSearchParam} formSubmitAction={handleSubmit}/>
    </>
  );
}
