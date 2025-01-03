import React, { useEffect, useState } from "react";
import { truncate } from "lodash";

interface UserData {
  id: number;
  firstName: string;
  image: string;
  birthDate: string;
}

interface ApiResponse {
  users: UserData[];
  total: number;
  skip: number;
  limit: number;
}

const Item: React.FC<UserData> = ({ firstName, image, birthDate }) => {
  return (
    <div className="w-1/2 sm:w-1/4 md:w-1/6 px-2 py-2 text-center">
      <div className="flex items-center justify-center h-full">
        <div
          className="w-full h-full bg-gray-200 rounded-md p-4"
          style={{ aspectRatio: "4/6" }} // 4:6 ratio (width = 4/6 * height)
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src={image}
              alt={firstName}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="text-sm font-semibold line-clamp-3">
              {truncate(firstName, { length: 20 })}
            </h3>
            <p className="text-xs text-gray-500">{birthDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListBox = () => {
  const [items, setItems] = useState<UserData[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${
            (page - 1) * limit
          }`
        );
        const data: ApiResponse = await response.json();
        setItems(data.users);
        setTotal(Math.ceil(data.total / limit));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <div className="flex flex-wrap">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center">
          <button
            className="px-4 py-2 mr-2"
            disabled={page === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-1 ${
                page === index + 1 ? "bg-gray-300" : ""
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2"
            disabled={page === total}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
