async function searchPokemon() {
    
    try {
        const inputValue = document.getElementById('input').value.toLowerCase(); 
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const json = await data.json();

        const datacolor = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${inputValue}`);
        const jsoncolor = await datacolor.json();
        const pokecolor = jsoncolor.color.name;
            
        document.getElementById("bigBox").style.backgroundColor = pokecolor; 

        document.getElementById('pokeImg').src = json.sprites.front_default;
        document.getElementById('pokeImg').classList.add('img');
        document.getElementById('pokeName').innerText = json.name;
        document.getElementById('input').value = "";
    } catch(err) {
        document.getElementById('pokeImg').classList.add('img');
        document.getElementById('pokeImg').src = "img/error.png";
        document.getElementById('pokeName').innerText = 'error';
    }
}


function enter(e) {
    if (e.key == "Enter"){
        searchPokemon();
    }
}

function touchClick() {
    searchPokemon();     
}







// async function searchPokemon(e) {
//     if (e.key == "Enter") {
//     const inputValue = document.getElementById('input').value.toLowerCase(); 
//     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
//     const json = await data.json();
    
//     const datacolor = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${inputValue}`);
//     const jsoncolor = await datacolor.json();
//     const pokecolor = jsoncolor.color.name;
//     document.getElementById("bigBox").style.backgroundColor = pokecolor; 

//     document.getElementById('pokeImg').src = json.sprites.front_default;
//     document.getElementById('pokeImg').classList.add('img');
//     document.getElementById('pokeName').innerText = json.name;
//     document.getElementById('input').value = "";
// }
// }

