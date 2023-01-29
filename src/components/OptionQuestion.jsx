const OptionQuestion = ({ data, onChangeHandlerVision, dataIndex }) => {
 
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-5">
      <h2 className="text-lg font-medium mb-2">{data.ques}</h2>
      <div className="flex flex-col">
        <label className="mb-2" htmlFor={dataIndex}>
          <input
            type="radio"
            name={"a"}
            id="a"
            value={data.option[0].a}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].a}
        </label>
        <label className="mb-2" htmlFor={dataIndex}>
          <input
            type="radio"
            name={"a"}
            id="b"
            value={data.option[0].b}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].b}
        </label>
        <label className="mb-2" htmlFor={dataIndex}>
          <input
            type="radio"
            name={"a"}
            id="c"
            value={data.option[0].c}
            className="mr-2"
            onChange={onChangeHandlerVision}
            required
          />
          {data.option[0].c}
        </label>
        <label className="mb-2" htmlFor={dataIndex}>
          <input
            type="radio"
            name={"a"}
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
