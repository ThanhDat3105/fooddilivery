import "./blogBody.scss"
import "@/styles/reset.css"

import { blogData } from "@/data/blog"

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import ItemBlog from "@/component/item_blog/ItemBlog";

export default function BlogBody() {
    return (
        <div className="blog_body">
            <div className="container_all">
                <div className="search">
                    <div className="search_left">
                        <p>All</p>
                        <p>Recent</p>
                        <p>Popular</p>
                        <p>Oldest</p>
                    </div>
                    <div className="search_right">
                        <div className="search_blog">
                            <input type="text" placeholder="Search the blog..." />
                            <HiMiniMagnifyingGlass className="magnifying_glass" />
                        </div>
                        <div className="button_search">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <div className="blog_all">
                    <ItemBlog ele={blogData} />
                </div>
            </div>
        </div>
    )
}
