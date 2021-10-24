import "../styles/MenuIcon.scss";

function MenuIcon() {
    return (
        <div className="menu-icon">
            <div className="menu-icon__line menu-icon__line--top" />
            <div className="menu-icon__line menu-icon__line--middle" />
            <div className="menu-icon__line menu-icon__line--bottom" />
        </div>
    );
}

export default MenuIcon;
