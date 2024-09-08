import { useState, useEffect } from 'react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Separator } from "@/Components/ui/separator"
import { Trash2, Plus, Minus } from "lucide-react"
import { Product } from "@/types/product"
import { Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
// Mock cart data (for initial load if session storage is empty)


export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    } else {
      setCartItems([])
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map(item => 
        item.product_id === id ? { ...item, cart_quantity: newQuantity } : item
      ))
      sessionStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.product_id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product_price * item.cart_quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const total = subtotal + tax

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <Card key={item.product_id} className="mb-4">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.product_name}</span>
                    <span>${item.product_price.toFixed(2)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.product_id, item.cart_quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.cart_quantity}
                        onChange={(e) => updateQuantity(item.product_id, parseInt(e.target.value))}
                        className="w-16 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.product_id, item.cart_quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="destructive" size="icon" onClick={() => removeItem(item.product_id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">
                    Total: ${(item.product_price * item.cart_quantity).toFixed(2)}
                  </p>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link className="w-full" href = "/checkout">
                Proceed to Checkout
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}