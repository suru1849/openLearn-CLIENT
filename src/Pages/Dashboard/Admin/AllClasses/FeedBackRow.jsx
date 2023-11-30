/* eslint-disable react/prop-types */

const FeedBackRow = ({ data }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{data?.userName}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{data?.userEmail}</div>
      </td>
      <td>
        <div className="font-semibold">{data?.rating}</div>
      </td>
      <td>
        <div className="font-semibold">{data?.description}</div>
      </td>
    </tr>
  );
};

export default FeedBackRow;
