import { aosAnimation } from "../../constants";
// get random animation for each element
export const randomAnimation = () => {
  const randomNumber = Math.floor(Math.random() * aosAnimation.length);
  return aosAnimation[randomNumber];
};
