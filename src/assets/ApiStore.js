import { create } from "zustand";

const getPosts = create((set) => ({

    Posts: {}, 
    isLoading: false,
    error: null,

    fetchData: async () => {
        set({ isLoading: true });

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            set({ Posts: data });
        }
        catch (error) {
            set({ error: error.message });

        }
        finally {
            set({ isLoading: false });

        }
    },
}));
export default getPosts;