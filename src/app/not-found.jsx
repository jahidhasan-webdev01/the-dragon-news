import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <div className="text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <h1 className="text-xl font-semibold">This page is not found!</h1>
            </div>
            <Link className="btn btn-sm btn-primary" href={"/"}>Back to home</Link>
        </div>
    );
};

export default NotFoundPage;