import React from "react";

export default function FilterBtn(props) {
    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            <span>{props.name}</span>
        </button>
    );
}