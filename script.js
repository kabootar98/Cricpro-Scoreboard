
run1 = parseInt(document.getElementById("run-1").textContent);
run2 = parseInt(document.getElementById("run-2").textContent);
run3 = parseInt(document.getElementById("run-3").textContent);
run4 = parseInt(document.getElementById("run-4").textContent);
run5 = parseInt(document.getElementById("run-5").textContent);
run6 = parseInt(document.getElementById("run-6").textContent);
extra= parseInt(document.getElementById("extra").textContent);

tot = run1+run2+run3+run4+run5+run6+extra;

document.getElementById("total").textContent=tot;