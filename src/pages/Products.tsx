import Api from "@/Api";
import { IGET_Product } from "@/type";
import { useParams } from "react-router-dom";
const Products = () => {
  const { ProductId } = useParams();
  const { data, isLoading } = Api.useQueryGetProducts(
    ProductId?.substring(1!)!
  );
  console.log(data?.data);
  return (
    <div className="flex flex-col gap-8 justify-center w-full p-4 items-center">
      <h1 className="text-gray-900 font-semibold text-Text-lg">All Products</h1>
      {isLoading ? (
        <h1 className="text-Error-400 font-semibold text-Text-lg mt-4">
          Loading Products....
        </h1>
      ) : (
        <div className="grid grid-cols-5 gap-2 justify-items-center  w-full justify-center items-center mx  max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1">
          {data?.data.map((d: IGET_Product) => (
            <div className="flex flex-col  justify-center items-center text-center   shadow-lg p-3">
            <p className="text-gray-800 font-md text-sm">{d.cat.en}</p>
              <div className="w-36 h-36">
                <img
                  src={`${Api.ApiUrl}${d.img}`}
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-gray-800 text-md font-md">{d.subCat.en}</p>
              <p className="text-gray-600 text-sm font-sm">
                Weight:{d.peiceQty.grossWeightForPeice}
                {d.peiceQty.unit}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
