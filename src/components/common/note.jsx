import React from "react";
import cross from "../../assets/icons/close.png";

const Note = ({ children, autoHeight = false, handleClose, identifier }) => {
    const beforeStyle =
        "before:absolute before:bottom-0 before:left-0 before:z-10 before:block before:h-6 before:w-5 before:skew-x-[25deg] before:bg-yellow-200 before:shadow-[3px_-2px_10px_rgba(0,0,0,0.2),_inset_15px_-15px_15px_rgba(0,0,0,0.3);]";

    // If autoHeight is set to true, the note will expand vertically to fit the content
    // Otherwise, it retains the post-it card scale and content will scroll
    const height = autoHeight ? "h-auto" : "h-56";

    return (
        <div
            className={[
                "relative mx-auto w-60 overflow-x-hidden rounded-[0_0_0_30px/45px] bg-yellow-200 shadow-note",
                beforeStyle,
                height,
            ].join(" ")}
        >
            <div className="h-full overflow-y-scroll p-5">{children}</div>
            {handleClose && identifier && (
                // If no handling function is provided, this will not render. Useful when we want to just display information on the note
                <button
                    onClick={() => handleClose(identifier)}
                    className="absolute -right-2 -top-2 z-10 rounded-full bg-candyfloss-purple p-2 transition-transform hover:scale-110"
                >
                    <img src={cross} alt="close" className="w-4" />
                </button>
            )}
        </div>
    );
};

export default Note;
