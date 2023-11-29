import "./postBody.scss"
import img1 from "../../../../public/images/imgs/blog_post/body/Images.png"
import img2 from "../../../../public/images/imgs/blog_post/body/Images (1).png"
import img3 from "../../../../public/images/imgs/blog_post/body/Images (2).png"


export default function PostBody() {
    return (
        <div className="blog_body">
            <div className="container_all">
                <div className="content">
                    <div className="text_header">
                        <p> Are you packing a school lunch for a picky eater? Getting your child to eat healthfully is a struggle for many parents. In this slideshow, Johns Hopkins pediatric dietitian Meredith Thivierge offers school lunch tips for picky eaters to help you prepare meals with the vitamins, minerals and nutrients your child needs to grow and succeed in school.</p>
                    </div>
                    <div className="content_first content_same">
                        <img src={img1.src} alt="" />
                        <h4>The Royal Dine</h4>
                        <p>Children, especially younger children, can be influenced by how the food looks. Fun shapes and bright colors may grab their attention and encourage them to take a bite. You don’t have to spend a lot of time carving cartoon characters out of bologna. Just take a few minutes to arrange the lunch neatly, add a personal note or use a cookie cutter to shape a sandwich or slice of cheese to add visual interest to the meal. “If the food looks fun and appetizing to you, there is a good chance your picky eater will also find it appetizing,” Thivierge says.</p>
                    </div>
                    <div className="content_second content_same">
                        <img src={img2.src} alt="" />
                        <h4>The Dish Express </h4>
                        <p>You may have to get creative to make sure your picky eater’s lunch covers the five major food groups: fruits, vegetables, protein, grains and dairy. If your child is allergic to or intolerant of specific foods, it may be worth talking to your pediatrician about a multivitamin or supplement. If dietary restrictions are not an issue, you can try sneaking in foods your picky eater refuses to eat. “Blending cauliflower with mashed potatoes or adding spinach to a fruit smoothie are a few ways parents can trick their children into eating healthy foods,” Thivierge suggests. She also advises asking your child why they dislike certain foods. If they simply don’t like the texture or look, this can sometimes be remedied by trying different cooking techniques.</p>
                    </div>
                    <div className="content_three content_same ">
                        <img src={img3.src} alt="" />
                        <h4>The Nawab Kitchen</h4>
                        <p>Picky eaters, and children in general, are more likely to eat something if they helped to make it. Participation gives kids a sense of ownership in the final product and helps them see exactly what’s inside that sandwich or salad they are having for lunch. You can involve your children at every stage of the process, from picking a recipe to food shopping and meal preparation. “Together you could create a list of foods your children enjoy and that you approve of and then have them choose from this list,” recommends Thivierge. This allows parents to remain in control while giving a child the freedom of choice.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
