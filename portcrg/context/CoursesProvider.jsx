import { useState, useEffect, createContext } from "react";
import axios from "axios";

import React from 'react'


const CoursesContext = createContext();

const CoursesProvider = ({children}) => {

    
  return (
    <div>CoursesProvider</div>
  )
}

export default CoursesProvider