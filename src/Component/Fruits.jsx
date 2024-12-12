/* eslint-disable react/jsx-key */
const Fruits = () => {
  const arr = ["mango", "graphes", "orange", "graphes", "apple", "watermaloon"];
  return (
      <div className="px-72 py-10">
        {arr.map((fruit) => (
          <p className="text-1xl font-bold text-blue-800">{fruit}</p>
        ))}
      </div>
  );
};

export default Fruits;
