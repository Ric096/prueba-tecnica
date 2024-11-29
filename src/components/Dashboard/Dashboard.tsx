import { ChangeEvent, useEffect, useState } from "react";
import { useFetch } from "../../hooks";
import { Data } from "../../model";
import { Product } from "../Product/Product";
import { FilterModal } from "../FilterModal/FilterModal";

const URL = "https://fakestoreapi.com/products";

enum Sorting {
  ASC = "asc",
  DESC = "desc",
  ORIGINAL = "original",
}

export const Dashboard = () => {
  const [url, setUrl] = useState(URL);

  const [showModal, setShowModal] = useState(false);

  const [sortOrder, setsortOrder] = useState<Sorting>(Sorting.ORIGINAL);

  const { data, loading, error } = useFetch<Data[]>(url);

  const [errorFilter, setErrorFilter] = useState(false)

  const [sortData, setSortData] = useState<Data[]>([])

  useEffect(() => {
    if (data) {
      setSortData(data);
    }
  }, [data]);

  const filterMethod = (dataUrl: string) => {
    console.log(dataUrl);

    setUrl(URL + `/category/${dataUrl}/`);

    if(!data) return

    setSortData(data)
  };

  const showFilterModal = () => {
    setShowModal((prev) => !prev);
  };

  const priceSorting = () => {

    if(!data) return

    if (sortOrder === Sorting.ORIGINAL) {
      setsortOrder(Sorting.ASC)
      const newData = data?.sort((a, b) => b.price - a.price)
      setSortData(newData)
    } else if (sortOrder === Sorting.ASC) {

      setsortOrder(Sorting.DESC)
      const newData = data?.sort((a, b) => a.price - b.price)
      setSortData(newData)
    } else {
      setsortOrder(Sorting.ORIGINAL)
      setSortData(data)
    }


  }

  const filterDataInput = (e: ChangeEvent<HTMLInputElement>) => {

    if(!data) return

    e.preventDefault()

    const value = e.target.value

    const filteredData = sortData.filter((item: Data) => item.title.toLowerCase().includes(value.toLowerCase()))

    if (!filteredData || filteredData.length === 0 || !value) {
      setErrorFilter(true)
      setSortData(data);
    } else {
      setSortData(filteredData);
      setErrorFilter(false)
    }

  }

  const closeModal = () => {

    setShowModal(false)
    console.log(showModal)
  }

  if (error) {
    return <div>Ha ocurrido un error inesperado</div>;
  }

  return (
    <main className="flex flex-col overflow-y-auto my-16 mx-auto w-full h-screen">
      {loading && <p>Cargando productos...</p>}
      <div className="mb-4 mx-20 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={showFilterModal}
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
          >
            <svg
              className="-ms-0.5 me-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
              />
            </svg>
            Filtrar por categoría
          </button>
          <button
            onClick={priceSorting}
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
          >
            <svg
              className="-ms-0.5 me-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
              />
            </svg>
            Ordenar por precio
          </button>
          {showModal && (
            <FilterModal 
            isOpen={showModal}
            handleCategory={filterMethod} 
            onClose={closeModal}
          />
          )}
        </div>
        <div className="w-40">
          <input type="text"
            name="inputSearch"
            placeholder="Buscar producto"
            className="w-full h-10 p-2 border-2 border-gray-400 rounded-md" 
            onChange={(e) => {filterDataInput(e)}}
          />
          {
            errorFilter &&
            <p className="text-red-400 text-semibold text-center text-sm">No hay resultados</p>

          }
        </div>
      </div>
      <section className="flex flex-wrap h-auto gap-4 items-center justify-center w-full h-screen">
        {sortData &&
          sortData?.map((product: Data) => {
            return (
              <Product
                id={product.id}
                category={product.category}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            );
          })}
      </section>
    </main>
  );
};
