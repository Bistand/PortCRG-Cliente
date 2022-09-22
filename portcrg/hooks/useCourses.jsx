
import { useContext } from 'react'
import CoursesContext from '../context/CoursesProvider'

const useCourses = () => {
  return useContext(CoursesContext)

}

export default useCourses