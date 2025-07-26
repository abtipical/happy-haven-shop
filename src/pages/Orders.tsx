import { useState } from 'react';
import { Package, Clock, CheckCircle, Truck, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock orders data
const orders = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 89.97,
    items: [
      {
        id: 1,
        name: 'Rainbow Unicorn Dress',
        price: 29.99,
        quantity: 1,
        image: '/placeholder.svg'
      },
      {
        id: 2,
        name: 'Adventure Sneakers',
        price: 45.99,
        quantity: 1,
        image: '/placeholder.svg'
      }
    ],
    tracking: 'TRK123456789',
    estimatedDelivery: '2024-01-18'
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-20',
    status: 'shipped',
    total: 67.98,
    items: [
      {
        id: 3,
        name: 'Building Blocks Set',
        price: 34.99,
        quantity: 1,
        image: '/placeholder.svg'
      },
      {
        id: 4,
        name: 'Cozy Bear Hoodie',
        price: 32.99,
        quantity: 1,
        image: '/placeholder.svg'
      }
    ],
    tracking: 'TRK987654321',
    estimatedDelivery: '2024-01-25'
  },
  {
    id: 'ORD-2024-003',
    date: '2024-01-22',
    status: 'processing',
    total: 19.99,
    items: [
      {
        id: 5,
        name: 'Memory Puzzle Game',
        price: 19.99,
        quantity: 1,
        image: '/placeholder.svg'
      }
    ],
    estimatedDelivery: '2024-01-28'
  }
];

const statusConfig = {
  processing: {
    label: 'Processing',
    icon: Clock,
    color: 'bg-warning/10 text-warning border-warning/20'
  },
  shipped: {
    label: 'Shipped',
    icon: Truck,
    color: 'bg-secondary/10 text-secondary-foreground border-secondary/20'
  },
  delivered: {
    label: 'Delivered',
    icon: CheckCircle,
    color: 'bg-success/10 text-success border-success/20'
  }
};

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredOrders = orders.filter(order => {
    if (selectedTab === 'all') return true;
    return order.status === selectedTab;
  });

  const getStatusBadge = (status: keyof typeof statusConfig) => {
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <Badge className={config.color}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Orders
          </h1>
          <p className="text-muted-foreground">
            Track and manage your orders
          </p>
        </div>

        {/* Order Filters */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">No orders found</h2>
              <p className="text-muted-foreground mb-8">
                {selectedTab === 'all' 
                  ? "You haven't placed any orders yet" 
                  : `No ${selectedTab} orders found`}
              </p>
              <Button className="btn-gradient">Start Shopping</Button>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">Order {order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(order.status as keyof typeof statusConfig)}
                      <div className="text-right">
                        <div className="font-semibold">${order.total.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground">
                          {order.items.length} item{order.items.length > 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="grid gap-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted/30 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity} × ${item.price}
                          </p>
                        </div>
                        <div className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Info */}
                  <div className="border-t border-border pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      {order.tracking && (
                        <div>
                          <span className="text-muted-foreground">Tracking: </span>
                          <span className="font-medium">{order.tracking}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-muted-foreground">Expected delivery: </span>
                        <span className="font-medium">
                          {new Date(order.estimatedDelivery).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="btn-soft">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    
                    {order.status === 'shipped' && (
                      <Button variant="outline" size="sm" className="btn-soft">
                        <Truck className="w-4 h-4 mr-2" />
                        Track Package
                      </Button>
                    )}
                    
                    {order.status === 'delivered' && (
                      <Button variant="outline" size="sm" className="btn-soft">
                        <Star className="w-4 h-4 mr-2" />
                        Write Review
                      </Button>
                    )}
                    
                    <Button variant="outline" size="sm" className="btn-soft">
                      Reorder Items
                    </Button>
                    
                    <Button variant="outline" size="sm" className="btn-soft">
                      Get Help
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Quick Stats */}
        {orders.length > 0 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {orders.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Orders</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {orders.filter(order => order.status === 'delivered').length}
                </div>
                <div className="text-sm text-muted-foreground">Delivered Orders</div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;