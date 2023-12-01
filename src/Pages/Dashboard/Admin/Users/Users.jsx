import Loader from "../../../../Components/Loader/Loader";
import UsersTableRow from "./UsersTableRow";
import { useEffect, useState } from "react";
import axiosSecure from "../../../../api";
import EmptyPage from "../../../../Components/EmptyPage/EmptyPage";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [serach, setSearch] = useState(" ");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/users?searchItem=${serach}`).then((data) => {
      setUsers(data.data);
    });
  }, [serach]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = event.target.Search.value;

    setSearch(data);
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <div>
      {/* search */}
      <div className="flex justify-center mt-2 mb-10">
        <fieldset className=" space-y-1 text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="search"
                name="Search"
                placeholder="find user by name...."
                className="w-full py-3 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-300 text-gray-100 focus:bg-gray-400 focus:border-violet-400"
              />
              <button
                type="submit"
                className="btn btn-md btn-success rounded-l-none -ml-2"
              >
                Submit
              </button>
            </form>
          </div>
        </fieldset>
      </div>
      {/* table */}
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {users?.map((user) => (
                <UsersTableRow
                  key={user._id}
                  user={user}
                  // refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyPage label={"No User Found"} />
      )}
    </div>
  );
};

export default Users;
