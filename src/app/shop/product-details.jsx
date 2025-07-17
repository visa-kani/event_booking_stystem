"use client";
import { fetchProducts } from "../../redux/slice/products.slice";
import Search from "../../components/search"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from "../../components/pagination";
import { addToCart } from "../../redux/slice/cart.slice";
import toast from "react-hot-toast";

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [loader, setLoader] = useState(false);

    console.log(productDetails, "productDetails");
    const dispatch = useDispatch();

    useEffect(() => {
        setLoader(true);
        dispatch(fetchProducts({ limit: 12, page: page })).then((data) => {
            console.log(data, "data--7788");
            setProductDetails(data.payload.products);
            setLoader(false);
        })
    }, []);

    const handlePagination = (pagination) => {
        setLoader(true);
        setPage(pagination);
        dispatch(fetchProducts({ limit: 12, page: pagination })).then((data) => {
            console.log(data, "data--7788");
            setProductDetails(data.payload.products);
            setLoader(false);
        })
    }

    const filteredProducts = productDetails.filter((item) => {
        return search === "" || item.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="px-6 pt-8 w-[90%] m-auto">
            <div className="md:flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Our Products</h2>
                <div className="flex gap-4 items-center md:mt-0 mt-3">
                    <Search search={search} setSearch={setSearch} placeholder={"Search by title"} />
                </div>
            </div>
            {loader ? <div className="loader">Loading...</div> :
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="text-center shadow-[0px_0px_12px_0px_rgba(15,22,28,0.08)] bg-[#f1f1f1] p-4 rounded-2xl cursor-pointer">
                                <div className="relative w-full h-68">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                    {/* <div className="absolute top-2 right-2 text-2xl"><GoHeart /></div> */}
                                </div>
                                <p className="mt-2 text-base font-medium text-left clamp-2">{product.title}</p>
                                <p className="mt-1 text-xs font-normal text-gray-500 text-left clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex items-center">
                                        <p className="text-gray-500 text-xs">Brand: </p>
                                        <p className="text-gray-500 text-xs capitalize ml-1 underline">{product.brand}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-gray-500 text-xs">Modal: </p>
                                        <p title={product.model} id="model" className="text-gray-500 text-xs capitalize ml-1 underline">{product.model?.length > 6 ? product.model.slice(0, 6) + "..." : product.model}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <p className="font-semibold text-xl text-left">${product.price}</p>
                                    <button onClick={() => { dispatch(addToCart(product)); toast.success("Product added to cart"); }} className="bg-[#f1f1f1] text-[#0e91ab] px-6 py-2 rounded-md hover:bg-[#0e91ab] hover:text-[#e9ecea] cursor-pointer border-[1px] border-[#0e91ab] transition-colors duration-200 font-medium text-sm">
                                        {"Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5">
                        <Pagination currentPage={page} totalPages={20} onPageChange={handlePagination} />
                    </div>
                </div>
            }
        </div>
    );
}
