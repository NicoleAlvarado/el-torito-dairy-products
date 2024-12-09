document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav") as HTMLElement;
    const menuBtn = nav.querySelector("#menu-btn") as HTMLButtonElement;
    const overlay = document.getElementById("overlay") as HTMLDivElement;

    const toggleNavbar = (element: HTMLButtonElement | HTMLDivElement) =>
        element.addEventListener("click", () => nav.classList.toggle("open"));

    toggleNavbar(menuBtn);
    toggleNavbar(overlay);
});
