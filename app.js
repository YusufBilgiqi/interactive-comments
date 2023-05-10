const url = "./data.json";

const fetchComments = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.comments;
  } catch (error) {}
};
fetchComments();
