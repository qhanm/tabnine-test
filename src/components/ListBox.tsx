import React from "react";
import { truncate } from "lodash";

interface ItemData {
  name: string;
  avatar: string;
  creationDate: string;
  value: string;
}

const Item: React.FC<ItemData> = ({ name, avatar, creationDate, value }) => (
  <div key={value} className="w-1/2 sm:w-1/4 md:w-1/6 px-2 py-2 text-center">
    <div className="flex items-center justify-center h-full">
      <div
        className="w-full h-full bg-gray-200 rounded-md p-4"
        style={{ aspectRatio: "4/6" }} // 4:6 ratio (width = 4/6 * height)
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full mb-2"
          />
          <h3 className="text-sm font-semibold line-clamp-3">
            {truncate(name, { length: 20 })}
          </h3>
          <p className="text-xs text-gray-500">{creationDate}</p>
        </div>
        {/* <p>{value}</p> */}
      </div>
    </div>
  </div>
);

const ListBox = () => {
  const items: ItemData[] = [
    {
      name: "John Doe",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-01",
      value: "Item 1",
    },
    {
      name: "Jane Smith",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    {
      name: "Jane Smith",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    {
      name: "Jane Smith",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    {
      name: "Jane Smith",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    {
      name: "Jane Smith",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    {
      name: "Jane Smith",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    {
      name: "Jane Smith 12121222112122112",
      avatar: "https://dummyjson.com/icon/emilys/128",
      creationDate: "2022-01-02",
      value: "Item 2",
    },
    // Add more items with their respective names, avatars, and creation dates
  ];

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default ListBox;
