import NewsCard from "@/components/NewsCard";
import { getAllNewsByCategoryID } from "@/lib/dataFetch";

const CategoryNews = async ({ id }) => {
    const { data: news } = await getAllNewsByCategoryID(id);

    if (news.length === 0) {
        return (
            <div className="min-h-[50vh] flex justify-center items-center">
                <h1 className="font-bold text-red-500">No news found!</h1>
            </div>
        );
    }

    return <NewsCard news={news} />;
};

export default CategoryNews;