'use client'
import "./connect.scss"

import { DESKTOP, IPAD_PRO, MOBILE, TABLET } from "@/constants";
import { withViewport } from "@/HOCs/withViewport";
import ConnectHeader from '@/pages/connect/header/ConnectHeader';
import ConnectBody from '@/pages/connect/body/ConnectBody';
import ConnectFooter from '@/pages/connect/footer/ConnectFooter';
import NewsletterConnect from "@/pages/connect/footer/NewsletterConnect";

interface Props {
    device: any;
}

function page(props: Props) {
    return (
        <div className={`connect ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPAD_PRO && "ipad_pro"} ${props.device === DESKTOP && "desktop"}`}>
            <ConnectHeader />
            <ConnectBody />
            <ConnectFooter />
            <NewsletterConnect />
        </div>
    )
}

export default withViewport(page)
