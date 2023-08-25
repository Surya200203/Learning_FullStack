let url1 = 'https://catfact.ninja/fact';
let url2 = 'https://dog.ceo/api/breeds/image/random';

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener("click",async()=>{
    let fact = await getFacts();
    let p = document.querySelector("#result1");
    p.innerText = fact; 
})

btn2.addEventListener("click",async()=>{
    let image_link = await getImages();
    let img = document.querySelector("#result2");
    img.setAttribute('src',image_link);
})



async function getFacts() {
	try {
        let response = await axios.get(url1);
		return response.data.fact;
        
	} 
    catch (err) {
		// console.log('error :- ', err);
        return "NO facts found"
	}
}

async function getImages() {
	try {
        let response = await axios.get(url2);
        return response.data.message;
		
        
	} 
    catch (err) {
		// console.log('error :- ', err);
        return "NO images found"
	}
}


 
