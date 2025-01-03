import React from "react";

const ListBox = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-1/2 sm:w-1/4 md:w-1/6 px-2 py-2 text-center"
        >
          <div
            className="flex items-center justify-center h-full"
          >
            <div
              className="w-full h-full bg-gray-200 rounded-md p-4"
              style={{ aspectRatio: "4/6" }} // 4:6 ratio (width = 4/6 * height)
            >
              {item}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListBox;