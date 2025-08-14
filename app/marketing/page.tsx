"use client"

import { ArrowLeft, Megaphone, TrendingUp, Users, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MarketingPage() {
  const marketingTools = [
    {
      id: "pricing-automation",
      name: "Pricing Automation",
      description: "Automated pricing rules and bulk price management",
      icon: TrendingUp,
      href: "/marketing/pricing-automation",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "campaign-analytics",
      name: "Campaign Analytics",
      description: "Track and analyze marketing campaign performance",
      icon: BarChart3,
      href: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "customer-insights",
      name: "Customer Insights",
      description: "Customer behavior analysis and segmentation",
      icon: Users,
      href: "#",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e4a5f] to-[#2d5a73]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a3d4f] to-[#2a5a73] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image src="/logo.svg" alt="TU" width={24} height={24} />
              </div>
              <h1 className="text-2xl font-bold text-white">Marketing</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Marketing Dashboard</h2>
            <p className="text-white/70 text-lg">
              Access marketing tools and analytics for campaign management and customer insights.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingTools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
