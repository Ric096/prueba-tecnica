import { useFetch } from "../../hooks";

interface Props {
  isOpen: boolean;
  handleCategory: Function;
  onClose: Function
}

const URL = "https://fakestoreapi.com/products/categories";

export const FilterModal = ({ isOpen, handleCategory, onClose }: Props) => {
  const { data, loading, error } = useFetch<string[]>(URL);

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (isOpen) {
    return (
      <div className="w-screen h-screen fixed top-0 right-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-0 z-50 top-20 inset-x-1/3 overflow-y-auto w-1/4 h-2/3 sm:w-1/4 lg:2/4 bg-white p-4 border-2 border-gray-600 rounded-lg">
        <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Seleccionar categoría
              </h3>
              <div className="mt-2 flex flex-col gap-4">
                {data &&
                  data.map((category: string) => (
                    <button
                      key={category}
                      onClick={()=> {handleCategory(category)}}
                      className="text-start px-4 py-3 w-2/3 border rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span>{category}</span>
                    </button>
                  ))}
              </div>
              <button onClick={()=> {onClose()}} type="button" className="text-white mt-10 ml-60 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cerrar</button>

            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

