const SectionTitle = ({ title, subTitle }) => {
    return (
      <div className="text-center my-8 px-4 lg:px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-2 uppercase">
          {title}
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">{subTitle}</p>
      </div>
    );
  };
  
  export default SectionTitle;
  