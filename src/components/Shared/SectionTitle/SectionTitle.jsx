const SectionTitle = ({ title, subTitle }) => {
    return (
      <div className="text-center lg:my-4 my-8 px-4 lg:px-6 lg:py-8 py-10 lg:mt-0 mt-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-sky-500 mb-2 uppercase">
          {title}
        </h2>
        <p className="text-gray-600 text-lg mx-auto">{subTitle}</p>
      </div>
    );
  };
  
  export default SectionTitle;
  