import React from 'react'
import Announcement from '../componets/Announcement'
import BagsCover from '../componets/BagsCover'
import Footer from '../componets/Footer'
import NavBar from '../componets/NavBar'
import NewsLetter from '../componets/NewsLetter'
import ProductCategory from '../componets/ProductCategory/ProductCategory'
import Slider from '../componets/Slider'
import SunGlassessCover from '../componets/SunglassesCover'
import WatchCategory from '../componets/WatchCategory/WatchCategory'

const HomePage = () => {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <WatchCategory/>
            {/* <ProductCategory/> */}
            <BagsCover/>
            <SunGlassessCover/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default HomePage
