/* eslint-disable react/prop-types */

const MECrow = ({ data, handleSubmit }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{data?.title}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{data?.description}</div>
      </td>
      <td>
        <div className="font-semibold">{data?.deadline}</div>
      </td>
      <th>
        <button
          onClick={() => handleSubmit(data)}
          disabled={
            data?.deadline > new Date().toISOString().split("T")[0]
              ? false
              : true
          }
          className={`btn btn-secondary btn-xs`}
        >
          Submit
        </button>
      </th>
    </tr>
  );
};

export default MECrow;
