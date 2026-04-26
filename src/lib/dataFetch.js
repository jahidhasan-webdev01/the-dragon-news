export const getAllCategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const result = await response.json();

    return result.data;
}

export const getAllNewsByCategoryID = async (category_id = "01") => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const result = await response.json();

    return result;
}