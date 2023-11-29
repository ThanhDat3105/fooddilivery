'use client'
import BlogTop from "@/pages/blog/blog_top/BlogTop";

import "./blog.scss"
import BlogBody from "@/pages/blog/blog_body/BlogBody";
export default function page() {
    return (
        <div className="blog">
            <BlogTop />
            <BlogBody />
        </div>
    )
}
