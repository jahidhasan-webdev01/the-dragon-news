import RelatedNewsCard from "@/components/RelatedNewsCard";
import Social from "@/components/Social";
import { getAllNewsByCategoryID, getNewsByID } from "@/lib/dataFetch";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsByID(id);
    const { data: sameCategoryNews } = await getAllNewsByCategoryID(news.category_id);
    const relatedNews = sameCategoryNews.filter((currentNews) => currentNews._id !== id)
    // console.log(news);
    console.log(relatedNews);

    return (
        <div className="container mx-auto grid grid-cols-4 gap-5 pb-10 mt-5 px-5 md:px-0">
            <div className="col-span-4 lg:col-span-3 space-y-2">
                <Image src={news?.image_url} width={300} height={300} alt={news?.title} className="w-full"></Image>
                <h1 className="font-bold text-xl">{news?.title}</h1>
                <p>{news?.details}</p>
            </div>
            <div className="col-span-4 lg:col-span-1 space-y-5">
                <h1 className="font-bold mb-3 text-xl">Related News</h1>
                {
                    relatedNews.map((n, index) => <RelatedNewsCard key={index} n={n} />)
                }
            </div>

        </div>
    );
};

export default NewsDetails;