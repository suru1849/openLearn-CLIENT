import { useEffect, useState } from "react";
import { getTotal } from "../../../api/statistics";

const TotalStatistics = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEnrolls, setTotalEnrolls] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);

  useEffect(() => {
    getTotal().then((data) => {
      setTotalClasses(data.class);
      setTotalEnrolls(data.enroll);
      setTotalUsers(data.user);
    });
  }, []);

  return (
    <section className="bg-[#F2F2F2] p-6 my-7">
      <h1 className="text-3xl font-bold text-center my-5">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2">
        <div className="bg-[#31C48D] flex flex-col justify-center items-center p-10 rounded-lg">
          <h2 className="text-lg lg:text-xl font-semibold">Total User</h2>
          <p className="font-bold text-white">{totalUsers}</p>
        </div>
        <div className="bg-[#A78BFA] flex flex-col justify-center items-center p-10 rounded-lg">
          <h2 className="text-lg lg:text-xl font-semibold">Total Classes</h2>
          <p className="font-bold text-white">{totalClasses}</p>
        </div>
        <div className="bg-yellow-300  flex flex-col justify-center items-center p-10 rounded-lg">
          <h2 className="text-lg lg:text-xl font-semibold">Total Enrollment</h2>
          <p className="font-bold text-white">{totalEnrolls}</p>
        </div>
      </div>
    </section>
  );
};

export default TotalStatistics;
