let api_key = 'AIzaSyCDZcSZRlgejlYW5Pbgwdk2VWnuV4MItXs';

async function searchVideo_dd(search_text) {
    // let video_query = document.getElementById('video_search').value;
    
    try {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search_text}&type=video&key=${api_key}&maxResults=25`)
        let data = await response.json();
        let videos = data;
        return videos;
    }
    catch (error){
        console.log(error);
    }
}
function displayTable3(data,location){
    let main_div = document.createElement('div');
    main_div.setAttribute('class','main_div');
    main_div.innerHTML = 
            `
                <div class="thum">
                    <img src=${data.snippet.thumbnails.medium.url} alt="">
                </div>
                <div class="text">
                    <div class="title_div">
                        ${data.snippet.title}
                    </div>
                    <div class="channel_div">
                        <p>${data.snippet.channelTitle}</p>
                        <p></p>
                    </div>
                </div>
            `
    main_div.addEventListener('click',function(){
        var object = {
            id : data.id,
            snippet : data.snippet,
            icon : data.icon,
            title : data.channelTitle,
        }
        localStorage.setItem('video_onclick', JSON.stringify(object));
        window.location.href = 'display.html';
    })
    location.append(main_div);
}
export { searchVideo_dd, displayTable3 }