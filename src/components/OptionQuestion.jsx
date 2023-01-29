
const OptionQuestion = ({ data, onChangeHandlerVision, dataIndex }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-5">
      <h2 className="text-lg font-medium mb-2">{data.ques}</h2>
      <div className="flex flex-col">
        <label htmlFor="a" className="mb-2">
          <input
            type="radio"
            name={dataIndex}
            id="a"
            value={data.option[0].a}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].a}
        </label>
        <label htmlFor="b" className="mb-2">
          <input
            type="radio"
            name={dataIndex}
            id="b"
            value={data.option[0].b}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].b}
        </label>
        <label htmlFor="c" className="mb-2">
          <input
            type="radio"
            name={dataIndex}
            id="c"
            value={data.option[0].c}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].c}
        </label>
        <label htmlFor="d" className="mb-2">
          <input
            type="radio"
            name={dataIndex}
            id="d"
            value={data.option[0].d}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].d}
        </label>
      </div>
    </div>
  );
};

export default OptionQuestion;