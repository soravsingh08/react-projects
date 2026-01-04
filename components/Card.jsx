import React, { useState } from "react";


const Card = () => {
  const [userName, setUserName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userRole, setUserRole] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setAllUsers([...allUsers,{ userName, userRole, userDesc, imageURL }])
    setUserName("");
    setUserDesc("");
    setImageURL("");
    setUserRole("");

  }

  const deleteHandler =(idx)=>{
    const copyUsers = [...allUsers]
    copyUsers.splice(idx,1)
    setAllUsers(copyUsers)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-6">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-[520px] bg-zinc-900 border border-zinc-800 rounded-xl p-4"
        >
             <h1 className="text-4xl mb-5 font-bold"> Card Generator</h1>
          <div className="grid grid-cols-2 gap-3">
         
            <input
              className="bg-zinc-800 border border-zinc-700 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
              type="text"
              placeholder="Enter name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              className="bg-zinc-800 border border-zinc-700 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
              type="text"
              placeholder=" Enter Image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />

            <input
              className="bg-zinc-800 border border-zinc-700 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
              type="text"
              placeholder="Enter Description"
              value={userDesc}
              onChange={(e) => setUserDesc(e.target.value)}
            />

            <input
              className="bg-zinc-800 border border-zinc-700 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
              type="text"
              placeholder="Enter Your Role"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-emerald-700 hover:bg-emerald-600 active:scale-95 transition text-sm font-semibold py-2 rounded-lg"
          >
            Create User
          </button>
        </form>

    <div className="px-4 py-10 flex-wrap flex gap-4">
      {allUsers.map((elem,idx)=>{
        return <div key={idx} className='rounded-xl p-5 px-8 flex flex-col text-center items-center w-[270px] text-white bg-zinc-900'>
<img className='h-24  w-24 rounded-full object-center object-cover' src={elem.imageURL} alt="" />
<h1 className='text-xl mt-0.5 font-bold'>{elem.userName}</h1>
<h5 className='text-lg text-blue-500 font-semibold my-1'>{elem.userRole}</h5>
<p className='text-xs opacity-80 font-medium leading-tight'>{elem.userDesc}</p>
 <button onClick={()=>{
    deleteHandler(idx)
 }} className='px-4  py-2 rounded text-xs bg-red-500 text-white font-semibold mt-3 cursor-pointer active:scale-96'>Delete</button>
    </div>
      })}

    </div>
        
        
      </div>
    </div>
  );
};

export default Card;
