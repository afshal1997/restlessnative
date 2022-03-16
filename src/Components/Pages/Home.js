import React from "react";
import HomePageSection4 from "../../Layout/HomePageLayout/HomePageSection4";
import HomeSection02 from "../../Layout/HomePageLayout/HomeSection02";
import HomeSection03 from "../../Layout/HomePageLayout/HomeSection03";
import MainSection from "../../Layout/HomePageLayout/MainSection";
import '../../Layout/HomePageLayout/home.css'

export default function Home() {
    return (
        <div>
            <MainSection />
            <HomeSection02 />
            <HomeSection03 />
            <HomePageSection4 />
        </div>
    )
}