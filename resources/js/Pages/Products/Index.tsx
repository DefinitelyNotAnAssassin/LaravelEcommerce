'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/Components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { usePage } from '@inertiajs/react'
import { Product } from '@/types/product'
import Navbar from "@/Components/Navbar"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from '@/Components/ui/toaster'
const categories = [
  "All Products",
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Toys & Games",
]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("featured")
  const { products } = usePage().props as unknown as { products: Product[] }
  const [cart, setCart] = useState<Product[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(item => item.product_id === product.product_id)
    
    let updatedCart
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update the quantity
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, cart_quantity: item.cart_quantity + 1 }
          : item
      )
    } else {
      // Product does not exist in the cart, add it with quantity 1
      updatedCart = [...cart, { ...product, cart_quantity: product.cart_quantity ?? 1 }]
    }
    setCart(updatedCart)
    sessionStorage.setItem('cart', JSON.stringify(updatedCart))

    // Show toast notification
    console.log("Product added to cart")
    toast({
      title: "Added to Cart",
      description: `${product.product_name} has been added to your cart.`,
      duration: 3000,
    })  
  }

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === "All Products" || product.product_category === selectedCategory) &&
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "priceLowToHigh") return a.product_price - b.product_price
      if (sortOrder === "priceHighToLow") return b.product_price - a.product_price
      return 0 // "featured" order
    })

  return (
    <div className="container mx-auto py-4">
      <Toaster />
      <Navbar />
      <div className="flex flex-col gap-6">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.product_id}>
              <CardHeader className="p-0">
                <img
                  src={`/placeholder.svg?height=200&width=300&text=${product.product_name}`}
                  alt={product.product_name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="flex justify-between items-start text-lg">
                  <span className="font-semibold">{product.product_name}</span>
                  {product.status && (
                    <Badge variant={product.status === "New" ? "default" : "secondary"}>
                      {product.status}
                    </Badge>
                  )}
                </CardTitle>
                <p className="text-sm text-gray-500 mt-1">{product.product_category}</p>
                <p className="text-lg font-bold mt-2">${product.product_price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={() => addToCart(product)}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500">No products found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}