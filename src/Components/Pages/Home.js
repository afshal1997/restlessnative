import React from "react";
import HomeSection02 from "../../Layout/HomePageLayout/HomeSection02";
import HomeSection03 from "../../Layout/HomePageLayout/HomeSection03";
import MainSection from "../../Layout/HomePageLayout/MainSection";
export default function Home() {
    return (
        <div>
            <MainSection />
            <HomeSection02/>
            <HomeSection03/>
        </div>
    )
}