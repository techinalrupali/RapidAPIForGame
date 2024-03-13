const form=document.querySelector('#search-form');

form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    // alert('function is working')
    const searchgame=document.querySelector('#search-box').value;
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?query=${searchgame}&tag=3d.mmorpg.fantasy.pvp&platform=pc`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '01a4b3e21emsh7b5189946f5d6fap137188jsn87448b3f8bf4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        // const mainResult=result.results;
    
        result.map((cval) => {
            document.querySelector('#search-result').innerHTML+=`
           <div class="container text-start my-2">
           <h2><img src=${cval.thumbnail}></h2>
          <h2 style="font-weight: bolder;"><a href=${cval.game_url} style="color: black;">${cval.title}</a></h2>
          </div>
    
            `
    
            
        })
       
    
    
    
    
    } catch (error) {
        console.error(error);
    }
})