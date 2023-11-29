import React, { ReactNode, useRef, useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
    title: string
    children: ReactNode;
}

export default function CollapseQuestion(props: Props) {
    const elRef = useRef<HTMLDivElement>(null);
    const [drop, setDrop] = useState<boolean>(false)

    const checkHeight = (value: React.RefObject<HTMLDivElement> | null) => {
        if (value?.current) {
            const clientHeight = Number(value.current.clientHeight);
            if (clientHeight > 0) {
                value.current.style.height = "0px";
                setDrop(false)
            } else {
                value.current.style.height = value.current.scrollHeight + "px";
                setDrop(true)
            }
        }
    }

    return (
        <>
            <div className="title_question" onClick={() => checkHeight(elRef)}>
                <h5>{props.title}</h5>
                <div className="icon">
                    {drop ? <FaPlus className="icon_in" /> : <FaMinus className="icon_in" />}
                </div>
            </div>
            <div ref={elRef} className="collapse_check">
                {props.children}
            </div>
        </>
    )
}
