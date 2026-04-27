import Image from "next/image";
import Link from "next/link";

const RelatedNewsCard = ({ n }) => {
    return (
        <div className="border border-gray-200 p-2 rounded-md">
            <Image src={n.image_url} width={100} height={100} alt={n.title} className="w-full"></Image>

            <Link href={`/news/${n._id}`}>
                <h1 className="font-bold">{n.title}</h1>
            </Link>
        </div>
    );
};

export default RelatedNewsCard;