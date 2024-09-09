import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { ArrowDownIcon, ArrowUpIcon, BarChart3Icon, DollarSignIcon, PackageIcon, ShoppingCartIcon, UsersIcon } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'
import { Button } from '@/Components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
import Navbar from '@/Components/Navbar'

export default function Dashboard() {
  // Mock data for the products graph
  const productData = [
    { name: 'Jan', total: 1200 },
    { name: 'Feb', total: 2100 },
    { name: 'Mar', total: 1800 },
    { name: 'Apr', total: 2400 },
    { name: 'May', total: 2800 },
    { name: 'Jun', total: 3200 },
  ]

  return (
    <div className="flex-col md:flex">
      <Navbar />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <UsersIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <ShoppingCartIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Products Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={productData}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
                      { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
                      { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
                      { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
                      { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
                    ].map((sale, index) => (
                      <div key={index} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Avatar" />
                          <AvatarFallback>{sale.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">{sale.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {sale.email}
                          </p>
                        </div>
                        <div className="ml-auto font-medium">{sale.amount}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
                      { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
                      { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
                      { id: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
                      { id: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
                    ].map((payment, index) => (
                      <div key={index} className="flex items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Invoice {payment.id}</p>
                          <p className="text-sm text-muted-foreground">{payment.method}</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="text-sm font-medium">{payment.amount}</p>
                          <p className={`text-xs ${payment.status === 'Paid' ? 'text-green-500' : payment.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                            {payment.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>
                    You have 10 transactions this week.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      { name: 'Product A', change: -24, icon: <PackageIcon className="h-4 w-4 text-red-500" /> },
                      { name: 'Product B', change: 13, icon: <PackageIcon className="h-4 w-4 text-green-500" /> },
                      { name: 'Product C', change: 67, icon: <PackageIcon className="h-4 w-4 text-green-500" /> },
                      { name: 'Product D', change: -8, icon: <PackageIcon className="h-4 w-4 text-red-500" /> },
                      { name: 'Product E', change: 43, icon: <PackageIcon className="h-4 w-4 text-green-500" /> },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Avatar" />
                          <AvatarFallback>{item.icon}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.change > 0 ? 'Increase' : 'Decrease'} in stock
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          <div className={item.change > 0 ? 'text-green-500' : 'text-red-500'}>
                            {item.change > 0 ? <ArrowUpIcon className="h-4 w-4 inline" /> : <ArrowDownIcon className="h-4 w-4 inline" />}
                            {Math.abs(item.change)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Content</CardTitle>
                <CardDescription>
                  This is a placeholder for the Analytics tab content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Add your analytics content here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports Content</CardTitle>
                <CardDescription>
                  This is a placeholder for the Reports tab content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Add your reports content here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}