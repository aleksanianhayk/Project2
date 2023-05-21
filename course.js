addCommentInp.onkeyup=function(){
if(addCommentInp.value.replace(/\s/g, '').length>0){
  document.getElementById("add-comment-button").removeAttribute("disabled")
}
else{
  document.getElementById("add-comment-button").setAttribute("disabled", "")

}
}