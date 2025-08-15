"use client"

import { ArrowLeft, BarChart3, Clipboard, Settings, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EngineeringPage() {
  const tools = [
    {
      name: "Engineering Dashboard",
      description: "Comprehensive metrics, work orders, and real-time monitoring",
      icon: BarChart3,
      href: "/engineering/dashboard",
      color: "from-blue-500 to-blue-600",
      featured: true, // Mark dashboard as featured tool
    },
    {
      name: "Project Management",
      description: "Track engineering projects and milestones",
      icon: Clipboard,
      href: "/engineering/projects",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Team Management",
      description: "Manage engineering team assignments and resources",
      icon: Users,
      href: "/engineering/team",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "System Configuration",
      description: "Configure engineering systems and workflows",
      icon: Settings,
      href: "/engineering/config",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e4a5f] to-[#2d5a73]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a3d4f] to-[#2a5266] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>

            <div className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="TerraOS" width={32} height={32} className="rounded-full bg-white p-1" />
              <h1 className="text-xl font-semibold text-white">Engineering</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Engineering Department</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Access engineering tools, project management, and system configuration
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Link
                key={tool.name}
                href={tool.href}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 ${
                  tool.featured ? "ring-2 ring-blue-400 ring-opacity-50" : "" // Add featured styling
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${tool.color} flex-shrink-0 ${
                      tool.featured ? "shadow-lg" : "" // Enhanced shadow for featured tool
                    }`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold group-hover:text-blue-600 transition-colors ${
                        tool.featured ? "text-blue-700" : "text-gray-900" // Featured tool gets blue text
                      }`}
                    >
                      {tool.name}
                      {tool.featured && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Featured</span>
                      )}{" "}
                      {/* Add featured badge */}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
