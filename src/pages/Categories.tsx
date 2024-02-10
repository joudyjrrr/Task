import Api from "@/Api";
import { IGET_Category } from "@/type";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { data: Categories, isLoading } = Api.useQueryGetAllCategories();
  return (
    <div className="flex flex-col gap-8 justify-center w-full p-4 items-center">
      <h1 className="text-gray-900 font-semibold text-Text-lg">
        All Categories
      </h1>
      {isLoading ? (
        <h1 className="text-Error-400 font-semibold text-Text-lg mt-4">
          Loading Categories....
        </h1>
      ) : (
        <div className="grid grid-cols-5 gap-2 justify-items-center  w-full justify-center items-center max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1">
          {Categories?.map((d: IGET_Category) => (
            <div
             
              className="flex   flex-col  justify-center items-center rounded-lg text-center bg-white shadow-lg p-3"
            >
              <div className="w-36 h-36">
                <img
                  src={`${Api.ApiUrl}${d.img}`}
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-gray-800 text-sm font-md cursor-pointer"  onClick={() => navigate(`/:${d._id}`)}>{d.en}</p>
              <p className="text-gray-600 text-sm font-sm ">
                contain {d.count} Product
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
