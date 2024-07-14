import "./TopButton.css"

function TopButton()
{
function topButtonClick()
{
    window.scrollTo(0,0);
}

    return (
        <button onClick={topButtonClick} className="topbtn"><i class="arrow up"></i></button>
    );
}
export default TopButton;