import { useState } from "react";

function useMenuAnimation() {
    const [menu, setMenu] = useState({
        isOpen: false,
        animateDarkBg: false,
        animateLightBg: false,
        animateCloseBtn: false,
        animateNavLinks: {
            home: false,
            about: false,
            community: false,
            events: false,
        },
    });

    function openMenu() {
        if (menu.isOpen) return;

        setMenu((prevState) => ({ ...prevState, isOpen: true }));
        animate(["animateDarkBg"], true, 0);
        animate(["animateLightBg"], true, 150);
        animate(["animateCloseBtn"], true, 300);

        let delay = 300;
        for (let navLink in menu.animateNavLinks) {
            animate(["animateNavLinks", navLink], true, delay);
            delay += 50;
        }
    }

    function closeMenu() {
        if (!menu.animateNavLinks.home) return;

        let delay = 0;
        for (let navLink of Object.keys(menu.animateNavLinks).reverse()) {
            animate(["animateNavLinks", navLink], false, delay);
            delay += 50;
        }

        animate(["animateCloseBtn"], false, 100);
        animate(["animateLightBg"], false, 150);
        animate(["animateDarkBg"], false, 200);
        animate(["isOpen"], false, 500);
    }

    function animate(target: string[], value: boolean, delay: number): void {
        setTimeout(() => {
            // update state without mutating it
            if (target[0] === "animateNavLinks") {
                setMenu((prevState) => ({
                    ...prevState,
                    animateNavLinks: {
                        ...prevState.animateNavLinks,
                        [target[1]]: value,
                    },
                }));
            } else {
                setMenu((prevState) => ({
                    ...prevState,
                    [target[0]]: value,
                }));
            }
        }, delay);
    }

    return [menu, openMenu, closeMenu];
}

export default useMenuAnimation;
