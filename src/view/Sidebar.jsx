import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ...">
      <div className="flex space-x-3 items-center p-3">
        <img
          className="rounded-full"
          src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt="image"
          width={40}
        />
        <div className="relative left-72">
          <button onClick={handleToggle}>.....</button>
          {isOpen && <div className="absolute ...">LAk</div>}
        </div>
        <div className="flex items-center">
          <h1>Shopping</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
