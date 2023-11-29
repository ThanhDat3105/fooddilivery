import { AiFillStar } from "react-icons/ai"
import { RiDoubleQuotesL } from "react-icons/ri"

import union from "../../../public/images/imgs/restaurant/cmt/Union.png"

import { Comment } from "@/interfaces/restaurant"

interface Props {
    comment: Comment[]
}
export default function ResCmt(props: Props) {
    return (
        props.comment.map((ele: Comment) => {
            const { cmtId, content, job, name, star } = ele
            return (
                <div key={cmtId}>
                    <div className="cmt_item">
                        <div className="container_cmt">
                            <div className="cmt_star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="cmt_content">
                                {content}
                            </div>
                            <div className="cmt_name">
                                {name}
                            </div>
                            <div className="cmt_job">
                                {job}
                            </div>
                            <div className="quotes_cmt">
                                <RiDoubleQuotesL className="quotes" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
