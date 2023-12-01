const Accrodion = () => {
  return (
    <div className=" my-20">
      <h1 className="text-3xl font-bold text-center my-10">FAQ</h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is our goal?
          </div>
          <div className="collapse-content">
            <p>Teach you the best things</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is our teacheres are capable?
          </div>
          <div className="collapse-content">
            <p>Yes,they are highly qualified</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What will we provide you?
          </div>
          <div className="collapse-content">
            <p>The things that you want.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accrodion;
