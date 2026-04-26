import Categories from "@/components/Categories";
import CategoryNews from "@/components/CategoryNews";
import Social from "@/components/Social";
import { getAllCategories } from "@/lib/dataFetch";
import { Suspense } from "react";

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const { news_category: categories } = await getAllCategories();
    const findSelectedNews = categories.find((category) => category.category_id === id);

    return (
        <div className="container mx-auto mt-5 grid grid-cols-4 gap-5 px-5 md:px-0">
            <div className="col-span-4 md:col-span-1">
                <Categories categories={categories} activeId={id} />
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-2 pb-5">
                <div className="space-y-5">
                    <h1 className="font-bold mb-3 text-xl">Dragon News Home: {findSelectedNews?.category_name} </h1>

                    <Suspense
                        key={id}
                        fallback={
                            <div className="min-h-[50vh] col-span-4 md:col-span-3 lg:col-span-2 pb-5 flex justify-center items-center">
                                <span className="loading loading-spinner loading-xl"></span>
                            </div>
                        }
                    >
                        <CategoryNews id={id} />
                    </Suspense>
                    
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
                <Social />
            </div>
        </div>
    );
};

export default NewsCategoryPage;