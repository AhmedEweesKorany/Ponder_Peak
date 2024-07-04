import  { useState } from 'react'

/**
 * The function `UseResponsiveNav` manages the visibility state of a navigation component in a React
 * application.
 * @returns The `UseResponsiveNav` function is returning an object with three properties: `toggleNav`,
 * `isNavVisible`, and `setIsNavVisible`. `toggleNav` is a function that toggles the value of
 * `isNavVisible`, `isNavVisible` is a boolean state variable that determines if the navigation is
 * visible or not, and `setIsNavVisible` is a function that
 */
const UseResponsiveNav = () => {
const [isNavVisible,setIsNavVisible] = useState(false)

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }

  return {toggleNav,isNavVisible,setIsNavVisible}
}

export default UseResponsiveNav 