window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoExc = Math.round(Math.random() * who.length);
  let actionExc = Math.round(Math.random() * action.length);
  let whatExc = Math.round(Math.random() * what.length);
  let whenExc = Math.round(Math.random() * when.length);

  return (
    who[whoExc] +
    " " +
    action[actionExc] +
    " " +
    what[whatExc] +
    " " +
    when[whenExc]
  );
};
