let api_key = "AIzaSyDLwh4lPFevGaj_v6n86SoHQIBM87PxJE4";
let api_key2 = 'AIzaSyCDZcSZRlgejlYW5Pbgwdk2VWnuV4MItXs'
async function getPopular() {
    try {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&locale=in&maxResults=25&key=${api_key}`)
        let data = await response.json();
        let videos = data.items;
        return videos;
    }
    catch (error) {
        console.log('error in popular.js file while fetching popular video',error);
    }
}
async function getIcon(channelId){
    try {
        let response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${api_key}`);
        let data = response.json();
        return data;
    }
    catch(error) {
        console.log('error in getting channel icon',error);
    }
}
function displayTable(data,location){
        let main_div = document.createElement('div');
        main_div.addEventListener('click',function(){
            console.log('erer')
            var object = {
                id : data.id,
                snippet : data.snippet,
                icon : data.icon,
                title : data.channelTitle,
            }
            localStorage.setItem('video_onclick', JSON.stringify(object));
            window.location.href = 'display.html';
        })
        main_div.setAttribute('class','main_div');
        main_div.innerHTML = `
               <div class="img_div">
                    <img src=${data.snippet.thumbnails.medium.url} alt="">
                </div>
                <div class="title_div">
                    <img src=${data.icon} alt="">
                    <p>${data.snippet.title}</p>
                </div>
                <div class="channelname">
                    <p class="pro_name">${data.snippet.channelTitle}</p>
                    <p class="views"></p>
                </div>
            `;
        location.append(main_div);
}
function displayTable2(data,location){
    let main_div = document.createElement('div');
    main_div.setAttribute('class','main_div_search');
    main_div.innerHTML = `
            <div class="img_div_search">
                <img src=${data.snippet.thumbnails.medium.url} alt="">
            </div>
                <div class="title_div_search">
                    <p class="main_title_line">${data.snippet.title}</p>
                    <p class="view_p_search"></p>
                    <div class="name_icon_div">
                        <div class="icon_img_search">
                            <img src=${data.icon} alt="">
                        </div>
                        <div class="channelname_search">${data.snippet.channelTitle}</div>
                    </div>
                    <div class="discription_search">${data.snippet.description}</div>
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
export {getPopular,getIcon,displayTable,displayTable2};