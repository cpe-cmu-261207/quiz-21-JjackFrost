callApi();

let gender;
const tagGender = document.getElementById("span-gender-icon");
const tagimg = document.getElementById("img-profile");
const tagname = document.getElementById("p-name");
const tagaddress = document.getElementById("p-address");
const tagemail = document.getElementById("p-email");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    tagGender.innerText = "👩";
  } else {
    tagGender.innerText = "👨";
  }
  tagimg.src = resp.data.results[0].picture.large;
  tagname.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  tagaddress.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.posrcode;
  tagemail.innerText = resp.data.results[0].email;
  gender = resp.data.results[0].gender;
  console.log(resp.data.results[0]);
}
