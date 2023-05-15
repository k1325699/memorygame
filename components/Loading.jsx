const Loading = () => {
  return (
    <div className=" flex justify-center items-center fixed inset-0 bg-desk z-50 overflow-hidden">
      <div className=" w-[30%]  max-w-[200px] bg-white rounded-[5%] rotate-[30deg] relative before:content-[''] before:block  before:pb-[150%] animate-spin"></div>
    </div>
  );
};
export default Loading;
