'use client'

import Banner from "@/pages/home/banner/Banner"
import Explore from "@/pages/home/explore/Explore"
import About from "@/pages/home/about/About"
import Features from "@/pages/home/features/Features"
import Cta from "@/pages/home/cta/Cta";
import Newsletter from "@/pages/home/newsletter/Newsletter";
import Sale from "@/pages/home/sale/Sale"

export default function HomePage() {
    return (
        <div className="home">
            <Sale />
            <Banner />
            <Explore />
            <About />
            <Features />
            <Cta />
            <Newsletter />
        </div>
    )
}
