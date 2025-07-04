"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, DollarSign, Star, MapPin, Instagram, Youtube, Edit, Camera, Play } from "lucide-react"
import Image from "next/image"

export default function ArtistDashboard() {
  const [isEditing, setIsEditing] = useState(false)

  const artistData = {
    name: "DJ Rhythm",
    bio: "Professional DJ with 10+ years of experience in electronic music and live performances.",
    genre: ["Electronic", "House", "Techno"],
    languages: ["Hindi", "English"],
    basePrice: "₹25,000",
    location: "Mumbai, India",
    rating: 4.8,
    totalBookings: 156,
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=800",
  }

  const bookingRequests = [
    {
      id: 1,
      event: "Wedding Reception",
      organizer: "Sharma Family",
      date: "July 25, 2024",
      venue: "Grand Ballroom, Mumbai",
      offer: "₹30,000",
      status: "pending",
    },
    {
      id: 2,
      event: "Corporate Party",
      organizer: "Tech Corp",
      date: "August 5, 2024",
      venue: "Hotel Taj, Delhi",
      offer: "₹45,000",
      status: "pending",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      event: "Summer Music Festival",
      date: "July 15, 2024",
      venue: "Central Park Arena",
      payment: "₹35,000",
      status: "confirmed",
    },
    {
      id: 2,
      event: "Birthday Bash",
      date: "July 20, 2024",
      venue: "Private Villa",
      payment: "₹28,000",
      status: "confirmed",
    },
  ]

  const gallery = [
    { type: "image", src: "/placeholder.svg?height=200&width=300", title: "Live Performance 1" },
    { type: "image", src: "/placeholder.svg?height=200&width=300", title: "Studio Session" },
    { type: "video", src: "/placeholder.svg?height=200&width=300", title: "Performance Video" },
    { type: "image", src: "/placeholder.svg?height=200&width=300", title: "Event Setup" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Artist Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Verified Artist</Badge>
            <Button variant="outline" size="sm">
              View Public Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Artist Profile Header */}
        <Card className="mb-6">
          <div className="relative">
            <Image
              src={artistData.coverImage || "/placeholder.svg"}
              alt="Cover"
              width={800}
              height={300}
              className="w-full h-48 md:h-64 object-cover rounded-t-lg"
            />
            <Button size="sm" variant="secondary" className="absolute top-4 right-4">
              <Camera className="h-4 w-4 mr-1" />
              Change Cover
            </Button>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={artistData.avatar || "/placeholder.svg"} />
                  <AvatarFallback>DJ</AvatarFallback>
                </Avatar>
                <Button size="sm" variant="secondary" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">{artistData.name}</h2>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit Profile
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {artistData.rating} ({artistData.totalBookings} bookings)
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {artistData.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Starting from {artistData.basePrice}
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{artistData.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {artistData.genre.map((g) => (
                    <Badge key={g} variant="secondary">
                      {g}
                    </Badge>
                  ))}
                  {artistData.languages.map((l) => (
                    <Badge key={l} variant="outline">
                      {l}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Booking Requests */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Requests</CardTitle>
                  <CardDescription>New requests waiting for your response</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bookingRequests.map((request) => (
                    <div key={request.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{request.event}</h3>
                        <Badge variant="outline">{request.offer}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">by {request.organizer}</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {request.date}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        {request.venue}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          Counter Offer
                        </Button>
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Your confirmed performances</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{event.event}</h3>
                        <Badge className="bg-green-100 text-green-800">{event.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        {event.date}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        {event.venue}
                      </p>
                      <p className="text-sm font-medium text-green-600">Payment: {event.payment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Availability Calendar</CardTitle>
                <CardDescription>Manage your availability for bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 border rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive calendar component would be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Media Gallery</CardTitle>
                <CardDescription>Showcase your work with photos and videos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gallery.map((item, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white bg-black/50 rounded-full p-3" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                        <p className="text-white p-3 text-sm">{item.title}</p>
                      </div>
                    </div>
                  ))}
                  <div className="h-48 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Add Media
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings">
            <Card>
              <CardHeader>
                <CardTitle>Earnings & Payouts</CardTitle>
                <CardDescription>Track your income and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">This Month</h3>
                    <p className="text-3xl font-bold text-green-600">₹1,25,000</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">Pending</h3>
                    <p className="text-3xl font-bold text-orange-600">₹45,000</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-lg">Total Earned</h3>
                    <p className="text-3xl font-bold">₹8,75,000</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-4">Recent Transactions</h3>
                  <p className="text-center text-muted-foreground">Transaction history would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Artist Name</Label>
                    <Input id="name" defaultValue={artistData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue={artistData.location} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" defaultValue={artistData.bio} rows={4} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="basePrice">Base Price</Label>
                    <Input id="basePrice" defaultValue={artistData.basePrice} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 9876543210" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label>Social Links</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4" />
                      <Input placeholder="Instagram URL" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Youtube className="h-4 w-4" />
                      <Input placeholder="YouTube URL" />
                    </div>
                  </div>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
