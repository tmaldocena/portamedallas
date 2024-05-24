/* eslint-disable react/prop-types */
import { useState } from "react";
import CardImage from "./CardImage";

const ViewImage = ({ item }) => {

    const [bigImage, setBigImage] = useState('');

    return (
        <div className="mt-2 relative lg:px-0 md:px-8 px-4 flex-1 flex lg:flex-row-reverse flex-col gap-2 justify-center items-center ">
            <img src={bigImage || item.firstImage} alt="show collection" className="object-contain w-auto lg:h-96 rounded-lg shadow-2xl" />
            <div className="flex lg:flex-col-reverse flex-row-reverse lg:gap-4 md:gap-12 gap-4 mt-6" >
                {
                    item.images?.map((image, index) => (
                        <CardImage imgURL={image} key={index} mainImage={bigImage} changeImage={setBigImage} />
                    ))
                }
            </div>
        </div>
    );
};


export default ViewImage