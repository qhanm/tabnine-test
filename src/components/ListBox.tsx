import React, { useEffect, useState } from "react";
import { truncate } from "lodash";

interface UserData {
  id: number;
  name: string;
  avatar: string;
  creationDate: string;
}

const Item: React.FC<UserData> = ({ name, avatar, creationDate }) => (
  <div className="w-1/2 sm:w-1/4 md:w-1/6 px-2 py-2 text-center">
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
      </div>
    </div>
  </div>
);

const ListBox = () => {
  const [items, setItems] = useState<UserData[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        const users = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          avatar: user.picture.thumbnail,
          creationDate: user.registered,
        }));
        setItems(users);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListBox;
