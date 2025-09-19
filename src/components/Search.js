
const Search = () => {
    return (
      <div className="middle">
        <div className="center-text">
          <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
        </div>
        <div className="input-container">
          <div className="input-text" id="search">
            <input typeof="text" placeholder="Enter the location"></input>
          </div>
          <div className="input-text" id="location">
            <input
              typeof="text"
              placeholder="Search For locaition, and more"
            ></input>
          </div>
        </div>
      </div>
    );
  };

  export default Search;