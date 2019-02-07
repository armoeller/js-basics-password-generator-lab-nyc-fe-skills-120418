window.addEventListener("load", () => {
  //start your code here
  const lowerCaseLetter = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  
  const button = document.getElementById('my-button')
  const output = document.querySelector('output')
  
  const onSubmit = () => {
  const input = document.getElementById('textArea')
  const whatTheyTyped = input.value
  }
  
  button.addEventListener("click", onSubmit)
});
