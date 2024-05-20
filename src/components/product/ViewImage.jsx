/* eslint-disable react/prop-types */
import { useState } from "react";
import CardImage from "./CardImage";

const ViewImage = ({ item }) => {

    const [bigImage, setBigImage] = useState('');

    return (
        <div className="relative flex-1 flex flex-row-reverse gap-2 justify-center items-center ">
            <img src={bigImage || item.firstImage} alt="show collection" className="object-contain w-auto h-96 rounded-lg shadow-2xl" />
            <div className="flex flex-col-reverse gap-4 mt-6" >
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