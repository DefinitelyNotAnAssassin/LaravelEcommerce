import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import { usePage } from "@inertiajs/react"
import { Product } from "@/types/product"






export default function LandingPage() {

  const { products } = usePage().props as unknown as { products: Product[] }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      
     


      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center" >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Ecommerce</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="/shop" className="text-sm font-medium hover:underline underline-offset-4" >
            Shop
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Cart
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero Product"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the perfect product for you
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Browse our curated collection of high-quality products designed to enhance your lifestyle.
                  </p>
                </div>
                <a                 href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                 
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our curated selection of the best products for your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto flex flex-col md:flex-row overflow-x-auto overflow-y-hidden">
              {products.map((product) => (
              <div key={product.product_id} className="flex flex-col md:min-w-[20rem]  items-start rounded-lg border bg-background p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <img
                src={"/placeholder.svg"}
                width="300"
                height="300"
                alt={product.product_name}
                className="mb-4 aspect-square w-full overflow-hidden rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">{product.product_name}</h3>
                <p className="text-muted-foreground">${product.product_price}</p>
              </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Stay up-to-date with our newsletter
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive exclusive offers, product updates, and the latest news.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Ecommerce. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}