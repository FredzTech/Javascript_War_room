let DataFetch = async () => {
  let data = await fetch("http://localhost:3005/");

  let info = await data.text();
  console.log(info);
};

DataFetch();
