import Slider from './Slider';
import ProductsCatalogue from './ProductsCatalogue';
import Categories from './Categories';
import NewArrival from './NewArrivals';
import OurCommitments from './OurCommitments';
import Products from '../resources/Products.json';

function HomePage() {

  return <>
    <Slider />
    <ProductsCatalogue title="Today's" description="সিজনালি উদ্ভিদ(বর্ষাকালিন)" items={Products} />
    <Categories />
    <ProductsCatalogue title="This Month" description="বেস্ট সেলার উদ্ভিদ" items={Products} />
    <ProductsCatalogue title="Our Products" description="Explore All Products" items={Products} />
    <NewArrival />
    <OurCommitments />
  </>
}
export default HomePage;