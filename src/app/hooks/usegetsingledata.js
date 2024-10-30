export const usegetsingledata = async (id) => {
    let data = [];
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      data = await response.json();
    } catch (error) {
      console.error("Error:", error.message); // Log error
    }
    return data;
  };
  
  
  