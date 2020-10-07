let arrayPost=[]

function clicarCriar(){
    let armazenaTitulo = document.getElementById('titulo-post');
    let armazenaAutor = document.getElementById('autor-post');
    let armazenaConteudo = document.getElementById('conteudo-post');
   
    
    let post ={
        
        titulo:armazenaTitulo.value,
        autor:armazenaAutor.value,
        conteudo:armazenaConteudo.value,    
        
        
        /*if (post.value !== "") {
            let arrayPost = document.getElementById("post")
            post.value=""};*/
    
    }

     arrayPost.push(post.value)
     console.log(arrayPost)
     //let conteudoContainer = document.getElementById('container-de-posts').innerHTML+=`<p>${post.value}</p>`

}