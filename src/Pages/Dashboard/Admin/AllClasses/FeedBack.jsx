import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFeedBack } from "../../../../api/assignmentAndFeedback";
import EmptyPage from "../../../../Components/EmptyPage/EmptyPage";
import FeedBackRow from "./FeedBackRow";

const FeedBack = () => {
  const { id } = useParams();
  console.log(id);
  const [feedBack, setFeedBack] = useState([]);

  useEffect(() => {
    getFeedBack(id).then((data) => {
      setFeedBack(data);
    });
  }, [id]);

  console.log(feedBack);

  return (
    <div>
      {feedBack.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>Name</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {feedBack?.map((data) => (
                <FeedBackRow key={data?._id} data={data} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyPage label={"No Feed-Backs Are Aavailable"} />
      )}
    </div>
  );
};

export default FeedBack;
