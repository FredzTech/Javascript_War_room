fetch_url = `http://localhost:5000/companies`;

// FETCH METHOD (ASYNC FUNCTION)
const fetchCompanies = async () => {
  const data = await fetch(fetch_url);
  const companies = await data.json();

  console.log(companies);
};

const company = {
  text: "Kabarak University",
  day: "8:00 am Wednesday",
  reminder: true,
};

const company_2 = {
  text: "Marsabit University",
  day: "8:00 am Wednesday",
  reminder: true,
};

// POST METHOD
const postCompanies = async (company) => {
  const res = await fetch(fetch_url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(company),
  });

  const data = await res.json();

  console.log(data);
};

// DELETE METHOD
const deleteCompanies = async (id) => {
  const res = await fetch(`http://localhost:5000/companies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};

//CALLING THE FUNCTIONS
// fetchCompanies();
// postCompanies(company_2);
fetchCompanies();

fetchCompanies();
//CONSOLE.LOG THE DATA

let deleteAutomation = () => {
  let id = prompt("Input the id that you want to delete");
  deleteCompanies(id);
  alert(`Boom Your Item idNo ${id} has been deleted`);
};

deleteAutomation();
