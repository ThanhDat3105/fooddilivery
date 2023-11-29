'use client'

import PostBody from "@/pages/blog_post/post_body/PostBody"
import PostFooter from "@/pages/blog_post/post_footer/PostFooter"
import PostHeader from "@/pages/blog_post/post_header/PostHeader"

export default function page() {
    return (
        <div className="blog_post">
            <PostHeader />
            <PostBody />
            <PostFooter />
        </div>
    )
}
