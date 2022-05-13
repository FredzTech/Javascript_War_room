var obj = {
  name: "Alfred",
  id: 2,
  l_name: "Githinji",
};

var json = JSON.stringify(obj);

console.log(json);

var obj2 = JSON.parse(json);

console.log(obj2);
