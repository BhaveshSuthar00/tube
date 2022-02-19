function search_bar(){
        return`
        <div id='search_bar'>
        <div id='youtubeicon'>
        <span id="menuicon" class="material-icons">menu</span>
        <img id="youtubeicon_img" src="https://www.vippng.com/png/detail/85-853653_patreon-logo-png-transparent-background-youtube-logo.png" alt="">

        </div>
        <div class="search_div">
            <input type="text" id="video_search">
        <button style="background-color: whitesmoke;" id='video_btn'">
        <span class="material-icons-outlined">search</span>
        </button>
        </div>
        <div class="last_div">
        <span class="material-icons-outlined">video_call</span>
        <span class="material-icons-outlined">apps</span>
        <span class="material-icons-outlined">notifications</span>
        <span id="user_menu" class="material-icons-outlined">account_circle</span>

        </div>
        </div>
    `
}
export default search_bar;