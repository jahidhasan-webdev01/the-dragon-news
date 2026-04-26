import Link from "next/link";

const Categories = ({ categories, activeId }) => {
    return (
        <div>
            <h1 className="font-bold mb-3 text-xl">All Category</h1>
            <div className="flex flex-row md:flex-col gap-2 flex-wrap">
                {
                    categories.map((category, index) => {
                        return <Link key={index} href={`/category/${category.category_id}`} className={`${activeId === category.category_id ? "bg-gray-100" : "hover:bg-gray-100"} py-2 px-4`}
                        >
                            {category.category_name}
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;