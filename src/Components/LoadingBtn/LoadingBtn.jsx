/* eslint-disable react/prop-types */
const LoadingBtn = ({ isLoading, icon: Icon, label }) => {
  return <>{isLoading ? <Icon className="animate-spin" size={24} /> : label}</>;
};

export default LoadingBtn;
