import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Users from "./Users";
import UserUpdate from "./UserUpdate";
import Usercreate from "./components/Usercreate"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Users />} />
          {/* <Route path='/create' element={<UserCreate />} /> */}
          <Route path='/update/:id' element={<UserUpdate />} />
        </Routes>
    </div>
  );
}