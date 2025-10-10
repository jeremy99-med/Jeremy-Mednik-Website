import { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
        cursor.style.transform = `translate(${e.clientX-5}px, ${e.clientY-5}px)`;
    };

    const handleHover = () => {
      cursor.style.backgroundColor = "white";
    };

    const handleHoverOut = () => {
      cursor.style.backgroundColor = "#6155ce";
    };

    const clickCursor = () => {
      cursor.style.transition = "background-color 0.2s";
      cursor.style.backgroundColor = "white";
      setTimeout(() => {
        cursor.style.transition = "background-color 0.2s";
        cursor.style.backgroundColor = "#6155ce";
      }, 4);
    };

    const checkHoverTarget = (e) => {
  const el = e.target;

  const isClickable =
    el.getAttribute("role") === "button" ||
    el.classList.contains("nav-link")

  if (isClickable) {
    handleHover();
  } else {
    handleHoverOut();
  }
};


    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", checkHoverTarget);
    document.addEventListener("click", clickCursor);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", checkHoverTarget);
      document.removeEventListener("click", clickCursor);
    };
  }, []);

  return (
    <div id='cursor'>
    </div>
  );
}

export default CustomCursor;
