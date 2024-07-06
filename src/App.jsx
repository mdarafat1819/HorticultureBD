import './App.css'
import NavBar from './components/Navbar';
import Footer from './components/footer';
import Slider from './components/Slider';
import ProductsCatalogue from './components/ProductsCatalogue';
import Products from './resources/Products.json';
import OurCommitments from './components/OurCommitments';
import Categories from './components/Categories';
import NewArrival from './components/NewArrivals';

function App() {
  return (
    <>
    <NavBar />
    <Slider />
    <ProductsCatalogue title="Today's" description = "সিজনালি উদ্ভিদ(বর্ষাকালিন)" items = {Products}/>
    <Categories />
    <ProductsCatalogue title="This Month" description = "বেস্ট সেলার উদ্ভিদ" items = {Products}/>
    <ProductsCatalogue title="Our Products" description = "Explore All Products" items = {Products}/>
    <NewArrival />
    <OurCommitments />
    <Footer />
    </>
  )
}

export default App
