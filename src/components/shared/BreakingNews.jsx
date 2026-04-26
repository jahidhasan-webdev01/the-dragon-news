import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const breakingNews = [
        {
            _id: "1",
            title: "Major Event Unfolds in the City, Drawing Attention from Thousands of People",
        },
        {
            _id: "2",
            title: "New Government Policy Announced to Improve Economic Growth and Stability Across the Country",
        },
        {
            _id: "3",
            title: "Local Sports Team Wins National Championship After an Intense and Thrilling Final Match",
        },
        {
            _id: "4",
            title: "Technology Companies Introduce Innovative AI Solutions to Transform Everyday Business Operations",
        },
        {
            _id: "5",
            title: "Heavy Rainfall Causes Flooding in Several Areas, Disrupting Daily Life and Transportation Systems",
        },
        {
            _id: "6",
            title: "International Leaders Meet to Discuss Climate Change and Future Environmental Protection Strategies",
        },
        {
            _id: "7",
            title: "New Educational Reforms Aim to Enhance Student Learning Experience and Modernize School Curriculum",
        },
        {
            _id: "8",
            title: "Healthcare Sector Sees Major Improvements with the Launch of Advanced Medical Facilities",
        },
        {
            _id: "9",
            title: "Stock Market Shows Positive Growth as Investors Gain Confidence in the Economy",
        },
        {
            _id: "10",
            title: "Cultural Festival Celebrates Heritage, Bringing Together Artists and Performers from Around the Country",
        },
    ];

    return (
        <div className="mt-2 container mx-auto bg-gray-100 px-4 py-2 flex gap-2 border border-gray-200 rounded-sm">
            <button className="btn btn-sm bg-red-500 text-white px-2 md:px-6 font-bold">Breaking News</button>
            <Marquee speed={100} pauseOnHover={true}>
                {
                    breakingNews.map((news) => {
                        return <div key={news._id} className="ml-5 flex gap-5">
                            <span>{news.title}</span>
                            <span>|</span>
                        </div>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;