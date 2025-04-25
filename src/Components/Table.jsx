
import React, { useEffect, useState } from "react";
import getPosts from "../assets/ApiStore";


const Table = () => {
  const { Posts, isLoading, error, fetchData } = getPosts();

  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const handleCheckbox = (id) => {
    setSelectedId((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id],

    );
  };

  const moveData = () => {
    const selectedPosts = Posts.filter((post) => selectedId.includes(post.id));
    console.log("Selected Posts:", selectedPosts);
  };

  return (

    <div className="h-full w-full ">
      <div className=" flex justify-between py-2 px-4">
        <div className=" flex gap-5">
          <button className=" bg-blue-600 text-white font-bold w-14 h-8 rounded-md">

            Tab A
          </button>
          <button className=" bg-blue-600 text-white font-bold w-14 h-8 rounded-md">

            Tab B
          </button>
        </div>
        <div className=" flex gap-5 items-center   ">
          <button className=" bg-gray-600 flex text-white font-bold   rounded-md"
            onClick={moveData}>
            Move to Tab A
          </button>
          <button className=" bg-gray-600 text-white flex font-bold    rounded-md"
            onClick={moveData}>
            Move to Tab B
          </button>
        </div>
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
                <tr key={post.id} className="border-b bg-white hover:bg-gray-100  font-normal ">

                  <td className="px-6 py-3">

                    <input type="checkbox" className=" h-5 w-5"

                      checked={selectedId.includes(post.id)}
                      onChange={() => handleCheckbox(post.id)}

                    />

                  </td>
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
