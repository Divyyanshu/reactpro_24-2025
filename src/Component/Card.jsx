/* eslint-disable react/prop-types */
function Card(props) {
  console.log(props.heading , props.dateData)
  return (
    <div className="px-72 py-5 flex">
      <div className="px-5 py-5 border-2 rounded-lg">
        <h1 className="text-xl font-bold mb-5 text-[#23272F]">{props.heading}</h1>
        <h2 className="mb-5 text-[#5E687E]">{props.dateData}</h2>
        <p className="text-[#23272F]">
          In our <span className="text-[#087EA4]">React 19 Upgrade Guide</span>,
          we shared step-by-step instructions for upgrading your app to React
          19. In this post, we’ll give an overview of the new features in React
          19, and how you can adopt them. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Error eaque omnis corrupti quos minus
          ad magni aliquam autem natus asperiores.
        </p>
        <p className="text-[#087EA4] mt-3">Read more</p>
      </div>
    </div>
  );
}

export default Card;
