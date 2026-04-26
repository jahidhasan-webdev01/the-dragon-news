import { redirect } from "next/navigation";

export default async function Home() {
  const defaultCategoryID = "01";

  return (
    redirect(`/category/${defaultCategoryID}`)
  );
}
