// import { Link } from "react-router-dom"

export const Footer = () => {

  return(
    <div className="w-11/12 fixed bottom-0 text-sm mx-auto box-border p-2 bg-gray-100 h-14 items-center flex justify-between">
      <p className="text-surface-600  font-semibold">E-commerce 2024 - 2025 &copy;</p>
        <ul className="mx-2 flex gap-10 w-30 ">
          <a href='https://github.com/Ric096' target="_blank">GitHub</a>
          <a href='https://www.linkedin.com/in/ricardo-gimenez096/' target="_blank">LinkedIn</a>
        </ul>     
    </div>
  )
}