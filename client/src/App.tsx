import PageLayout from "./layouts/PageLayout"
import { HeroSection, FeaturedProducts, ProductList, FAQSection } from "./components/organisms"

function App() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturedProducts />
      <ProductList />
      <FAQSection />
    </PageLayout>
  )
}

export default App
