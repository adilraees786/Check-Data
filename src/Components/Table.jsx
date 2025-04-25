
import React, { useEffect, useState } from "react";
import getPosts from "../assets/ApiStore";


const Table = () => {
  const { Posts, isLoading, error, fetchData } = getPosts();

  const [selectedId, setSelectedId] = useState([]);

  const [tabA, setTabA] = useState([]);
  const [tabB, setTabB] = useState([]);
  const [activeTab, setActiveTab] = useState("A");

//for APi
  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    if (Posts.length > 0) {
      setTabA(Posts);
    }
  }, [Posts]);

  //Check checkBox
  const handleCheckbox = (id) => {
    setSelectedId((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id],

    );
  };
//  Select posts
  const handleSelectAll = () => {

    if (selectedId.length === Posts.length) {
      setSelectedId([]); // unselect all
    } else {
      const allIds = Posts.map((post) => post.id);
      setSelectedId(allIds); // select all
    }
  };

  console.log("Post", Posts)
  console.log("Active Button", activeTab)

//Move posts from TabA to TabB or TabB to TabA
  const moveData = () => {
    const fromTab = activeTab === "A" ? tabA : tabB;
//if Select Nothing and try to Move posts
    if (selectedId.length === 0) {
      alert("Please select at least one post to move.");
      return;
    }

    const selectedPosts = fromTab.filter((post) => selectedId.includes(post.id));
    const remainingPosts = fromTab.filter((post) => !selectedId.includes(post.id));
//Condition
    if (activeTab === "A") {
      setTabA(remainingPosts);
      setTabB([...tabB, ...selectedPosts]);
      setActiveTab("B"); //posts switch to Tab B
    }
    else {
      setTabB(remainingPosts);
      setTabA([...tabA, ...selectedPosts]);
      setActiveTab("A"); //posts switch to Tab A
    }
    setSelectedId([]);
  }


  const displayedPosts = activeTab === "A" ? tabA : tabB;

  return (

    <div className="h-full w-full ">
      <div className=" flex justify-between py-2 px-4">
        <div className=" flex gap-5">
          <button
            onClick={() => setActiveTab("A")}
            className={`bg-blue-600 text-white font-bold w-14 h-8 rounded-md 
              ${activeTab === "A" ? "opacity-100" : "opacity-50"
              }`}
            
          >
            Tab A
          </button>
          <button
            onClick={() => setActiveTab("B")}
            className={`bg-blue-600 text-white font-bold w-14 h-8 rounded-md
               ${activeTab === "B" ? "opacity-100" : "opacity-50"
              }`}
            
          >
            Tab B
          </button>
        </div>
        <div className=" flex gap-5 items-center   ">
          <button
            className="bg-gray-600 text-white font-bold px-3 py-1 rounded-md"
            onClick={moveData}
          >
            {activeTab === "A" ? "Move to Tab B" : "Move to Tab A"}
          </button>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="bg-gray-100 font-bold text-xl text-gray-600">
          <tr>
            <th className="px-4 py-3 border">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={
                  displayedPosts.length > 0 && selectedId.length === displayedPosts.length
                }
                onChange={handleSelectAll}
              />

            </th>
            <th className="px-4 py-3 border">Id</th>
            <th className="px-4 py-3 border">Title</th>
            <th className="px-4 py-3 border">Body</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && !error && Array.isArray(displayedPosts) && (
            displayedPosts.length > 0 ? (
              displayedPosts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b bg-white hover:bg-gray-100 font-normal"
                >
                  <td className="px-6 py-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5"
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
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No posts available in Page {activeTab}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

    </div>

  );
};

export default Table;

