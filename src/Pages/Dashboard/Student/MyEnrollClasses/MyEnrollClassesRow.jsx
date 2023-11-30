/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyEnrollClassesRow = ({ enroll }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={enroll?.Class?.image} alt="Class" />
            </div>
          </div>
          <div>
            <div className="font-bold">{enroll?.Class?.title}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{enroll?.Class?.name}</div>
      </td>
      <th>
        <Link
          to={`class/${enroll?.Class?._id}`}
          className={`btn btn-warning btn-xs`}
        >
          Continue
        </Link>
      </th>
    </tr>
  );
};

export default MyEnrollClassesRow;
