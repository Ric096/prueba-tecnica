export const Navbar = () => {

  return(
    <div className="w-10/12 mx-auto box-border p-2 border-2 bg-blue-200 h-auto flex justify-between">
      <p className="text-red-600">E-commerce</p>
      {/* <div > */}
        <ul className="mx-2 flex gap-10 w-30 ">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      {/* </div> */}
    </div>
  )
}