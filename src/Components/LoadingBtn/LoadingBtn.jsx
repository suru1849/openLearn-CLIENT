/* eslint-disable react/prop-types */
const LoadingBtn = ({ isLoading, icon: Icon, label }) => {
  return <>{isLoading ? <Icon className="animate-spin" /> : label}</>;
};

export default LoadingBtn;
