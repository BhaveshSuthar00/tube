
// let api_key2 = 'AIzaSyCDZcSZRlgejlYW5Pbgwdk2VWnuV4MItXs';
// let api_key2 = "AIzaSyDLwh4lPFevGaj_v6n86SoHQIBM87PxJE4";

async function recommended_video(videoId){
    try {
                                    
        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${api_key2}&maxResults=25`)
        let data = await response.json();
        let video = data.items;
        return video;
    }
    catch (error){
        console.log('error in recommended',error);
    }
}
function recom(data,location){
    data.forEach(function(elem){
         let main_div = document.createElement('div');
         main_div.setAttribute('class','main_div');
         main_div.innerHTML = `
                    <div class="thum">
                        <img src=${elem.snippet.thumbnails.default.url} alt="">
                    </div>
                    <div class="text">
                        <div class="title_div">${elem.snippet.title}</div>
                        <div class="channel_div">
                            <p>${elem.snippet.channelTitle}</p>
                            <p>${elem.snippet.publishedAt}</p>
                        </div>
                    </div>`
            location.append(main_div);
    })
}
export {recom, recommended_video};