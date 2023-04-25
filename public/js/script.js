document.addEventListener("DOMContentLoaded", () => {
  const payBtn = document.querySelectorAll('button.btn-pay');
  for (let i = 0; i < payBtn.length; i++) {
    payBtn[i].addEventListener("click", function(e) {
      e.preventDefault();
      setLoading(e, true)
    }, false);
  }  
});

function setLoading(e, isLoading) {
  if (isLoading) {
    e.target.setAttribute('disabled', 'disabled');
    e.target.parentNode.querySelector("div.loader").classList.remove("hide");
    e.target.parentNode.querySelector("span.btn-text").classList.add("hide");
  } else {
    this.removeAttribute("disabled")
    e.target.parentNode.querySelector("div.loader").classList.add("hide");
    e.target.parentNode.querySelector("span.btn-text").classList.remove("hide");
  }
}