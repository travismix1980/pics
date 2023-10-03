function ShowImage({ pics }) {
  // data.results[0].urls.small
  console.log(pics);

  return (
    <div>
      {pics.results.map((pic) => <img src={pic.urls.small} alt="pic" height="300px" />)}
    </div>
  );
}

export default ShowImage;
