const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-[30%]  max-w-[300px] bg-white rounded-[5%] rotate-[30deg] relative before:content-[''] before:block  before:pb-[150%] animate-spin"></div>
    </div>
  );
};
export default Loading;
