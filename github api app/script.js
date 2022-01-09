async function getUserRepos() {
try{

const Repos= await fetch('https://api.github.com/users/octocat/repos')

if(Repos.ok === false){
    throw "page not found"
}
   const repo= await Repos.json()
     console.log(repo);
    // const root= document.querySelector('#root')
    // root.innerHTML=`<p>name: ${repo.name}</p>`
       repo.forEach(element => {
        document.body.innerHTML=`star count: ${ element.stargazers_count}<br>forks count: ${element.forks_count}
        <img src="${element.avatar_url}"/>`
   });
    
}

   catch(err){
        console.log(err);
        console.log("page 404 error");
      }

}
getUserRepos();


 




 