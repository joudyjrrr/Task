import { useQuery } from "@tanstack/react-query";
const ApiUrl = "https://www.api.setalkel.co"

const useQueryGetAllCategories = () => {
    const query = useQuery({
        queryKey: ["get-all-catgory"],
        queryFn: () =>
            fetch(`${ApiUrl}/product/cat/`).then((res) =>
                res.json(),
            ),
    });
    return query;
};


const useQueryGetProducts = (id: string) => {
    const query = useQuery({
        queryKey: ["get-product", id],
        queryFn: () =>
            fetch(`https://www.api.setalkel.co/product/?cat=${id}`).then((res) =>
                res.json(),
            ),
    });
    return query
}

const Api = {
    useQueryGetAllCategories,
    useQueryGetProducts,
    ApiUrl
}
export default Api