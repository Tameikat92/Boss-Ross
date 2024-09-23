
const toggleButton = document.getElementById('toggle-mode')

toggleButton.addEventListener("click", ()=> {
document.body.classList.toggle("night");

});

const treeButton = document.getElementById('paint-tree')

treeButton.addEventListener("click", () => {

    const tree = document.createElement("div");
    tree.classList.add("tree")
    
    const img = document.createElement("img")
    img.src = "tree.png";
    img.style.width = "100%"; //takes up apce of the parent
    img.style.height = "100%";


    tree.appendChild(img);

    tree.addEventListener("click", () => {
        tree.remove();
    })
document.getElementById("forest").appendChild(tree);

}); 

