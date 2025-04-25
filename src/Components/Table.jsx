
import React, { useEffect } from "react";
import getPosts from "../assets/ApiStore";


const Table = () => {
    const { Posts, isLoading, error, fetchData } = getPosts();

    useEffect(() => {
      fetchData();
    }, [fetchData]);

    // console.log("====>", Posts);

    const moveData = () =>{
    
    
    }
    
  return (
   
      <div className="overflow-x-auto">
        <div className=" flex justify-end py-2 px-4">
          <button className=" bg-gray-600 text-white font-bold w-12 h-8 rounded-md" onClick={moveData}>Move</button>
        </div>
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-100  font-bold text-xl text-gray-600 ">
            <tr>

              <th className="px-4 py-3 border">Check</th>
              <th className="px-4 py-3 border">Id</th>
              <th className="px-4 py-3 border">Title</th>
              <th className="px-4 py-3 border">Body</th>
            
            </tr>
          </thead>
          <tbody>
          {!isLoading && !error && Array.isArray(Posts) && (
            Posts.length > 0 ? (
              Posts.map((post) => (
                <tr key={post.id} className="border-b bg-white hover:bg-gray-100  font-normal">

                  <td className="px-6 py-3"><input type="checkbox" className=" h-5 w-5" /></td>
                  <td className="px-6 py-3">{post.id}</td>
                  <td className="px-6 py-3">{post.title}</td>
                  <td className="px-6 py-3">{post.body}</td>
                </tr>
              ))
            ) : (
              <tr>

              </tr>
            )

          )}
          </tbody>
        </table>
      </div>
   
  );
};

export default Table;
