"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ticket, Phone, Shield } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [step, setStep] = useState<"phone" | "otp" | "role">("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [userRole, setUserRole] = useState("")

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate OTP sending
    setStep("otp")
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate OTP verification
    setStep("role")
  }

  const handleRoleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect based on role
    if (userRole) {
      window.location.href = `/${userRole}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Ticket className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold">Ahibi 3.0</span>
          </div>
          <CardTitle>
            {step === "phone" && "Welcome Back"}
            {step === "otp" && "Verify OTP"}
            {step === "role" && "Select Your Role"}
          </CardTitle>
          <CardDescription>
            {step === "phone" && "Enter your mobile number to continue"}
            {step === "otp" && `We've sent a 6-digit code to ${phoneNumber}`}
            {step === "role" && "Choose how you want to use Ahibi"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "phone" && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                    <Phone className="h-4 w-4 mr-1" />
                    <span className="text-sm">+91</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="rounded-l-none"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send OTP
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>
              </div>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
              <div className="text-center">
                <Button variant="ghost" size="sm" onClick={() => setStep("phone")}>
                  Change Number
                </Button>
              </div>
            </form>
          )}

          {step === "role" && (
            <form onSubmit={handleRoleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">I am a</Label>
                <Select value={userRole} onValueChange={setUserRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">Event Attendee</SelectItem>
                    <SelectItem value="organizer">Event Organizer</SelectItem>
                    <SelectItem value="artist">Artist/Performer</SelectItem>
                    <SelectItem value="venue">Venue Owner</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Continue to Dashboard
              </Button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-1" />
            Secured with OTP verification
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
