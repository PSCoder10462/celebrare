const func = () => {
  const env = document.getElementById("env");
  const front = document.getElementById("front");
  const env_body = document.getElementsByClassName("env__body");
  const flap = document.getElementById("env__flap");
  const card = document.getElementById("env__card");
  const nav = document.getElementById("nbar");

  front.classList.add("fade-in");

  setTimeout(() => {
    front.classList.add("rotate-front");
  }, 2000);

  setTimeout(() => {
    env.classList.add("rotate");
  }, 3500);

  setTimeout(() => {
    flap.classList.toggle("open");
  }, 5500);

  setTimeout(() => {
    card.classList.add("card-out");
  }, 7500);

  setTimeout(() => {
    flap.classList.toggle("open");
  }, 8500);

  setTimeout(() => {
    card.classList.add("put-front");
  }, 9500);

  setTimeout(() => {
    card.classList.remove("card-out");
    card.classList.add("card-in");
    for (let i = 0; i < 3; ++i) {
      env_body[i].classList.add("env-rotate");
    }
  }, 10000);
  setTimeout(() => {
    nav.classList.remove("hide");
  }, 12500);
};
