import contact from "../../../assets/2760.png_300-removebg-preview.png";

const ContactUs = () => {
  return (
    <div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#6B7280] text-gray-100 my-20">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leadi lg:text-5xl">
            Let&apos;s talk!
          </h2>
          <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <img src={contact} alt="" className="p-6 h-60 md:h-64" />
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled
          className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
