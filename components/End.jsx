const End = ({ handleClick }) => {
  return (
    <div className="fixed inset-0 bg-mask flex flex-col justify-center items-center">
      <div className="flex flex-col  justify-between items-center w-[300px] h-[200px] bg-white rounded-3xl py-6">
        <h2 className="text-4xl font-bold pb-6 ">成功~</h2>
        <button
          onClick={handleClick}
          className="text-2xl  bg-button text-white py-4 px-6 rounded-full"
        >
          重新開始
        </button>
      </div>
    </div>
  );
};

export default End;
