/* eslint-disable react/prop-types */
const PerDayAssignment = ({ Data }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold">{Data?.name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{Data?.email}</div>
      </td>
      <th>
        <div>
          <p>
            {Data?.time.split("T")[0]}, {Data?.time.split("T")[1].split(".")[0]}
          </p>
        </div>
      </th>
    </tr>
  );
};

export default PerDayAssignment;
