import React, { useRef, ReactNode, useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

interface Props {
    title: string,
    children: ReactNode;
}

export default function Collapse(props: Props) {
    const elRef = useRef<HTMLDivElement>(null);
    const [reverse, setReverse] = useState<boolean>(false)

    const checkHeight = (value: React.RefObject<HTMLDivElement> | null) => {
        if (value?.current) {
            const clientHeight = Number(value.current.clientHeight);
            if (clientHeight > 0) {
                value.current.style.height = "0px";
                setReverse(false)
            } else {
                value.current.style.height = value.current.scrollHeight + "px";
                setReverse(true)
            }
        }
    }

    return (
        <div className="collapse_all">
            <div className="collapse_title" onClick={() => checkHeight(elRef)}>
                <h5>{props.title}</h5>
                {!reverse ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            <div ref={elRef} className="collapse_check">
                {props.children}
            </div>
        </div>
    )
}
