


const prfsection = document.getElementById("prf");
const jobsection = document.getElementById("job");
const hobysection = document.getElementById("hoby");
const skillsection = document.getElementById("skill")
  

 // JavaScriptで要素を表示させるための処理を追加する

//上から時間差で表示する
setTimeout(function() {
    prfsection.classList.add("show");
  }, 1000);

setTimeout(function() {
    jobsection.classList.add("show");
  }, 2000);

setTimeout(function() {
    hobysection.classList.add("show");
  }, 3000);

setTimeout(function() {
    skillsection.classList.add("show");
  }, 4000);
