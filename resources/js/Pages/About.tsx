import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import Navbar from "@/Components/Navbar"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12">
        <Navbar />
      <h1 className="text-4xl font-bold text-center mb-8">About Eco Threads</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-8">Our Story</h2>
          <p className="text-lg mb-6">
            Born from a passion for sustainable fashion, Eco Threads emerged in 2020 with a simple yet powerful mission: to create stylish, comfortable clothing that doesn't cost the Earth. Our journey began in a small studio in Portland, where our founders, avid hikers and nature enthusiasts, decided to combine their love for the outdoors with their concern for the environment.
          </p>
          <Button>Learn More</Button>
        </div>
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Eco Threads founders in nature"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <Card className="mb-24">
        <CardContent className="p-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <Tabs defaultValue="sustainability" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              <TabsTrigger value="quality">Quality</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
            </TabsList>
            <TabsContent value="sustainability" className="mt-4">
              <p>We're committed to using eco-friendly materials and ethical production processes. From organic cotton to recycled polyester, every fiber is chosen with the planet in mind.</p>
            </TabsContent>
            <TabsContent value="quality" className="mt-4">
              <p>We believe that sustainable fashion should never compromise on quality. Our garments are built to last, reducing waste and providing you with clothing you'll love for years to come.</p>
            </TabsContent>
            <TabsContent value="innovation" className="mt-4">
              <p>We're constantly exploring new sustainable materials and production techniques. Our team of designers and researchers work tirelessly to bring you the latest in eco-friendly fashion technology.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-center mb-24">
        <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
        <p className="text-lg mb-6">
          Since our inception, we've made significant strides in reducing the fashion industry's environmental footprint:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">1M+</h3>
              <p>Plastic bottles recycled into fabric</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">50%</h3>
              <p>Reduction in water usage compared to traditional manufacturing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p>Renewable energy used in our production facilities</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-lg mb-6">
          At Eco Threads, we're not just creating clothes; we're building a community of conscious consumers who believe in the power of sustainable fashion. Join us in our mission to make the world a little greener, one thread at a time.
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </div>
  )
}