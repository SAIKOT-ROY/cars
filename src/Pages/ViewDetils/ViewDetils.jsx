import { Link, useLoaderData } from "react-router-dom";
import useTitlt from "../../Hook/useHook";
import Title from "../Share/Title/Title";

const ViewDetils = () => {
    const data = useLoaderData()
    useTitlt('View Detils')
    const {pictureURL,email,sellerName,rating,price,name,availableQuantity,description} = data
    console.log(data);
    return (
        <div className=" mt-12">
           {/* <div className="bg-[#F1F6F9] py-28">
           <div className="md:flex sm:flex-row p-8 py-28 gap-8 justify-center items-center border-8 border-white sm:w-full md:w-2/3 mx-auto">
                <div> <img src={pictureURL} alt="" className="w-80 h-80 smx-auto  border-8 border-[#9BA4B5] mb-5" /></div>
                <div className="flex flex-col gap-3 mb-5"> 
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Toy Name  :</span> {name}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Seller Name </span> {sellerName}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Seller Email  :</span> {email}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Price : </span>{price}$</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Rating : </span>{rating}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Available Quantity : </span>{availableQuantity} Pic</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Description : </span>{description}</h5>
                    <Link to='/alltoy'><span className="btn  bg-[#394867]">Back to All-Toy </span></Link>
                </div>
            </div>
           </div> */}
           <div className="bg-[#ece3e182] mt-[5.5rem]">
            <Title text="Toy Details"/>
           <div className="lg:pb-5 md:pb-[8.3rem] p-4">
           <div className="md:flex sm:flex-row p-8 py-16 justify-center gap-10 items-center border-8 drop-shadow-md border-white sm:w-full lg:w-2/3 mx-auto">
                <div> <img src={pictureURL} alt="" className="w-80 h-80 smx-auto  border-8 drop-shadow-lg border-yellow-500 mb-5" /></div>
                <div className="flex flex-col gap-3 mb-5"> 
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Toy Name  :</span> {name}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Seller Name : </span>{sellerName}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Email : </span>{email}</h5>
                    <h5 className='text-sm'><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Price : </span>{price}$</h5>
                    <h5 className='text-sm'><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Ratings : </span>{rating}</h5>
                    <h5 className='text-sm'><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Available Quantity : </span>{availableQuantity} Pic</h5>
                    <h5 className='text-sm'><span className="md:text-2xl sm:text-3xl font-semibold text-yellow-500 drop-shadow-md">Description : </span>{description}</h5>
                    <Link to='/'><span className="px-3 py-3 rounded-md text-white w-1/4 bg-yellow-500">Back to Home </span></Link>
                </div>
            </div>
           </div>
        </div>
        </div>
    );
};

export default ViewDetils;