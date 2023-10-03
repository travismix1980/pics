import { useState } from "react";
import ShowImage from "./ShowImage";

const Access_Key = "cH2wb2VYNWHoumy_Xij0Bmq2zUpF-PwWcBDP13XSEXA";

function SearchBar() {
  const [pics, setPics] = useState();
  const handleClick = () => {
    const searchTerm = document.getElementById("search-bar").value;
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${Access_Key}`)
      .then(response => response.json())
      .then(data => setPics(data));

  };

  return (
    <>
      <input type="text" id="search-bar" />
      <button onClick={handleClick}>Search</button>
      <ShowImage pics={pics} />
    </>
  );
}

export default SearchBar;
