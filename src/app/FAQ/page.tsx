'use client'

import "./FAQ.scss"
import imgFAQ from "../../../public/images/imgs/FAQ/Illustrations.png"
import CollapseQuestion from "@/component/collapse_question/CollapseQuestion";

export default function page() {

    return (
        <div className="FAQ">
            <div className="container_all">
                <div className="faq_top">
                    <div className="title">
                        <h2>Most asked questions by our beloved customers</h2>
                    </div>
                    <div className="image">
                        <img src={imgFAQ.src} alt="" />
                    </div>
                </div>
                <div className="faq_bottom">
                    <div className="question">
                        <div className="item_foodEat item_question">
                            <CollapseQuestion title={"What is FoodEats?"}>
                                <div className="answer_question">
                                    FoodEats is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.
                                </div>
                            </CollapseQuestion>
                        </div>
                        <div className="item_service item_question">
                            <CollapseQuestion title={"What location do we provide service"}>
                                <div className="answer_question">
                                    FoodEats is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.
                                </div>
                            </CollapseQuestion>
                        </div>
                        <div className="item_deliFee item_question">
                            <CollapseQuestion title={"What is the delivery fee?"}>
                                <div className="answer_question">
                                    FoodEats is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.
                                </div>
                            </CollapseQuestion>
                        </div>
                        <div className="item_rider item_question">
                            <CollapseQuestion title={"How I can become a rider?"}>
                                <div className="answer_question">
                                    FoodEats is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.
                                </div>
                            </CollapseQuestion>
                        </div>
                        <div className="item_partner item_question">
                            <CollapseQuestion title={"How I can become a partner? "}>
                                <div className="answer_question">
                                    FoodEats is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.
                                </div>
                            </CollapseQuestion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
