import HeaderText from "./HeaderText"

function HeaderIcon(){

    function AbrirTextHeader(){
        let HeaderText = window.document.querySelector("div.HeaderText")
        HeaderText.style.display = "block"

        let IconAbrir = window.document.querySelector("span#IconAbrir")
        IconAbrir.style.display = "none"
        let IconFechar = window.document.querySelector("span#IconFechar")
        IconFechar.style.display = "block"
    }

    function FecharTextHeader(){
        let HeaderText = window.document.querySelector("div.HeaderText")
        HeaderText.style.display = "none"

        let IconAbrir = window.document.querySelector("span#IconAbrir")
        IconAbrir.style.display = "block"
        let IconFechar = window.document.querySelector("span#IconFechar")
        IconFechar.style.display = "none"
    }

    return(
        <div className="HeaderIcon">
            <span onClick={AbrirTextHeader} id="IconAbrir" class="material-symbols-outlined">arrow_back_ios</span>
            <span onClick={FecharTextHeader} id="IconFechar" class="material-symbols-outlined">arrow_forward_ios</span>
        </div>
    )
}

export default HeaderIcon