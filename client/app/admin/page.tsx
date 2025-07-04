import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  Building2,
  Music,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  BarChart3,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "12,345", icon: Users, change: "+12%" },
    { title: "Active Events", value: "234", icon: Calendar, change: "+8%" },
    { title: "Registered Venues", value: "456", icon: Building2, change: "+15%" },
    { title: "Artists", value: "789", icon: Music, change: "+20%" },
    { title: "Monthly Revenue", value: "₹2,34,567", icon: DollarSign, change: "+25%" },
    { title: "Tickets Sold", value: "5,678", icon: TrendingUp, change: "+18%" },
  ]

  const pendingApprovals = [
    { id: 1, type: "Organizer", name: "John Doe Events", status: "pending" },
    { id: 2, type: "Artist", name: "The Rock Band", status: "pending" },
    { id: 3, type: "Venue", name: "Grand Hall Mumbai", status: "pending" },
    { id: 4, type: "Event", name: "Summer Music Fest", status: "pending" },
  ]

  const recentActivities = [
    { id: 1, action: "New organizer registered", user: "ABC Events", time: "2 hours ago" },
    { id: 2, action: "Event approved", event: "Tech Conference 2024", time: "4 hours ago" },
    { id: 3, action: "Venue listing updated", venue: "Central Arena", time: "6 hours ago" },
    { id: 4, action: "Artist profile verified", artist: "DJ Mixer", time: "8 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Super Admin</Badge>
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="approvals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="approvals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Approvals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                    Pending Approvals
                  </CardTitle>
                  <CardDescription>Items waiting for your review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest system activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.user || activity.event || activity.venue || activity.artist}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>System performance and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">Revenue Growth</h3>
                    <p className="text-3xl font-bold text-green-600">+25%</p>
                    <p className="text-sm text-muted-foreground">vs last month</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">Top Location</h3>
                    <p className="text-xl font-bold">Mumbai</p>
                    <p className="text-sm text-muted-foreground">45% of events</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">Popular Genre</h3>
                    <p className="text-xl font-bold">Music</p>
                    <p className="text-sm text-muted-foreground">60% of bookings</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">Avg Ticket Price</h3>
                    <p className="text-xl font-bold">₹1,250</p>
                    <p className="text-sm text-muted-foreground">+15% increase</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">All Users</h3>
                    <Button>Add User</Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-center text-muted-foreground">
                      User management interface would be implemented here with tables, filters, and actions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure platform settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Payment Settings</h3>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm">Convenience Fee: 2.5%</p>
                      <p className="text-sm">Tax Rate: 18%</p>
                      <Button size="sm" className="mt-2">
                        Update
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Notification Settings</h3>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm">SMS Gateway: Fast2SMS</p>
                      <p className="text-sm">Email Service: Active</p>
                      <Button size="sm" className="mt-2">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
