// import { ReactNode } from "react";

import { NavLink } from "react-router-dom";

interface Props {
  id: number;
  category: string;
  image: string;
  price: number;
  title: string;
  rating: any;
}

export const Product = ({
  id,
  category,
  image,
  price,
  title,
  rating,
}: Props) => {

  return (
    <div className="w-full max-w-sm h-80 bg-white border border-gray-200 rounded-lg shadow bg-gray-400">
      <article className="mx-auto min-h-40">
        <img
          className="w-40 h-40 mx-auto aspect[3/2] object-contain p-4 rounded-lg"
          src={image}
          alt={title}
        />
      </article>
      <div className="px-5 my-5 ">
        <a href="#">
          <h5 className="text-medium font-semibold tracking-tight text-gray-900">
            {title.length > 40 ? title.slice(0, 30) + "..." : title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <p>{category}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            $ {price}
          </span>
          <NavLink className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to={`products/${id}`}> Ver más</NavLink>
        </div>
      </div>
    </div>
  );
};

