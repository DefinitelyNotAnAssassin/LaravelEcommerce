import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Separator } from "@/Components/ui/separator"
import { Badge } from "@/Components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Star, ShoppingCart } from "lucide-react"
import Navbar from "@/Components/Navbar"

export default function ProductPage() {
  return (
    
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Product Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Ergonomic Office Chair</h1>
          <Badge variant="secondary" className="mb-4">In Stock</Badge>
          <p className="text-2xl font-semibold mb-4">$299.99</p>
          <p className="text-gray-600 mb-6">
            Experience ultimate comfort with our ergonomic office chair. Designed to support your body during long work hours, this chair features adjustable lumbar support, breathable mesh back, and customizable armrests.
          </p>
          <Button className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((review) => (
            <Card key={review}>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${review}`} alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <CardTitle className="text-sm font-medium">John Doe</CardTitle>
                    <CardDescription className="text-xs">Verified Buyer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  This chair has been a game-changer for my home office. The lumbar support is excellent, and I love how adjustable it is.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((product) => (
            <Card key={product}>
              <CardHeader>
                <img
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`Related Product ${product}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Office Chair Model {product}</CardTitle>
                <CardDescription>Comfortable and stylish</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}