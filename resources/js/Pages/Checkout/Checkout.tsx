'use client'

import { useState, useEffect } from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card" 
import { Product } from '@/types/product'


export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + (item.product_price * (item.cart_quantity || 0)), 0)
    setTotal(newTotal)
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product_id === id 
          ? { ...item, cart_quantity: Math.max((item.cart_quantity || 0) + change, 0) }
          : item
      ).filter(item => item.cart_quantity !== 0)
    )
  }

  const removeItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.product_id !== id))
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.product_id} className="py-4 flex items-center">
                      <img
                        src={item.product_image}
                        alt={item.product_name}
                        width={80}
                        height={80}
                        className="rounded-md mr-4"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.product_name}</h3>
                        <p className="text-sm text-gray-500">{item.product_category}</p>
                        <p className="font-medium">${item.product_price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product_id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2 font-semibold">{item.cart_quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product_id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-2 text-red-500"
                          onClick={() => removeItem(item.product_id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">Proceed to Payment</Button>
            </CardFooter>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" placeholder="10001" />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
