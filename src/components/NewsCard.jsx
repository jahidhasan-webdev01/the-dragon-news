import Image from "next/image";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
    return (
        <>
            {
                news.map((n, index) => {
                    const { image_url, title, author, details } = n;
                    return <div key={index} className="border-2 border-gray-100 rounded-md">
                        <div className="flex justify-between items-center bg-gray-100 p-4">
                            <div className="flex items-center gap-4">
                                <Image src={author?.img} width={40} height={40} alt={author?.name || "Author image"} className="rounded-full"></Image>
                                <div>
                                    <h1 className="font-bold">{author?.name}</h1>
                                    <p>{author?.published_date}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <GoBookmark className="text-2xl" />
                                <IoMdShare className="text-2xl" />
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold text-xl">{title}</h1>
                                <Image src={image_url} width={300} height={300} className="w-full" alt={title}></Image>
                                <p className="text-gray-500 line-clamp-4">{details}</p>
                            </div>
                            <button className="mt-2 font-bold text-amber-500">
                                <Link href={"/"}>Read More</Link>
                            </button>

                            <hr className="my-5 text-gray-300" />

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        <FaStar className="text-2xl text-amber-500" />
                                        <FaStar className="text-2xl text-amber-500" />
                                        <FaStar className="text-2xl text-amber-500" />
                                        <FaStar className="text-2xl text-amber-500" />
                                        <FaStar className="text-2xl text-amber-500" />
                                    </div>
                                    <span className="font-semibold">4.9</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEye className="text-2xl" />
                                    <span className="font-semibold">499</span>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
        </>
    );
};

export default NewsCard;