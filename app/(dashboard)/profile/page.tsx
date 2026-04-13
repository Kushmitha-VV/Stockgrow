"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, MapPin, Bell, Shield, Moon, Globe } from "lucide-react"

export default function ProfilePage() {
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // ✅ Added state for message
  const [message, setMessage] = useState("")

  // ✅ Updated save function
  const handleSave = () => {
    setMessage("Profile updated successfully ✅")
  }

  // ✅ Added functions for buttons
  const handleDeactivate = () => {
    alert("Account Deactivated ⚠️")
  }

  const handleDelete = () => {
    alert("Account Deleted ❌")
  }

  return (
    <div className="space-y-8 pt-12 lg:pt-0 max-w-4xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your account settings</p>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <Avatar className="size-20">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-muted-foreground">Investor since 2024</p>
              <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary">
                Pro Member
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <FieldLabel htmlFor="fullname">
                <span className="flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" />
                  Full Name
                </span>
              </FieldLabel>
              <Input id="fullname" defaultValue="John Doe" />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">
                <span className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" />
                  Email Address
                </span>
              </FieldLabel>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">
                <span className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" />
                  Phone Number
                </span>
              </FieldLabel>
              <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
            </Field>

            <Field>
              <FieldLabel htmlFor="location">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-muted-foreground" />
                  Location
                </span>
              </FieldLabel>
              <Input id="location" defaultValue="Mumbai, India" />
            </Field>
          </div>

          <Button onClick={handleSave}>Save Changes</Button>

          {/* ✅ Show message */}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        </CardContent>
      </Card>

      {/* Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your preferences and security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bell className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive alerts about your portfolio</p>
              </div>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>

          <Separator />

          {/* Two Factor */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>

          <Separator />

          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Moon className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Use dark theme interface</p>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          <Separator />

          {/* Language */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Language</p>
                <p className="text-sm text-muted-foreground">English (US)</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Change</Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions for your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            onClick={handleDeactivate}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            Deactivate Account
          </Button>
          <Button 
            variant="destructive"
            onClick={handleDelete}
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
