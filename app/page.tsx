"use client"

import type React from "react"

import { useState } from "react"
import {
  Calculator,
  BarChart3,
  Headphones,
  PencilRuler,
  Store,
  Monitor,
  Users,
  Wrench,
  Shield,
  UserCheck,
  Clipboard,
  SquareLibrary,
  Box,
  Zap,
  Settings,
  Layers,
  Bolt,
  InspectionPanel,
  Truck,
  Waves,
  Warehouse,
  TrendingUp,
  Megaphone,
} from "lucide-react"

const departments = [
  {
    id: "accounting",
    name: "Accounting",
    icon: Calculator,
  },
  { id: "analytics", name: "Analytics", icon: BarChart3 },
  {
    id: "customer-service",
    name: "Customer Service",
    icon: Headphones,
  },
  {
    id: "sales",
    name: "Sales",
    icon: TrendingUp,
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
  },
  {
    id: "engineering",
    name: "Engineering",
    icon: PencilRuler,
  },
  {
    id: "purchasing",
    name: "Purchasing",
    icon: Store,
  },
  {
    id: "is",
    name: "IS",
    icon: Monitor,
  },
  {
    id: "hr",
    name: "HR",
    icon: Users,
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: Wrench,
  },
  {
    id: "admin",
    name: "Admin",
    icon: Shield,
  },
  {
    id: "gm",
    name: "GM",
    icon: UserCheck,
  },
]

const productionShops = [
  { id: "production-control", name: "Production Control", icon: Clipboard },
  {
    id: "assembly",
    name: "Assembly",
    icon: SquareLibrary,
  },
  {
    id: "cleanroom",
    name: "Cleanroom",
    icon: Box,
  },
  { id: "electronics", name: "Electronics", icon: Zap },
  { id: "grinding", name: "Grinding", icon: Settings },
  { id: "materials", name: "Materials", icon: Layers },
  {
    id: "robotics",
    name: "Robotics",
    icon: Bolt,
  },
  {
    id: "sheet-metal",
    name: "Sheet Metal",
    icon: InspectionPanel,
  },
  { id: "shipping", name: "Shipping", icon: Truck },
  {
    id: "welding",
    name: "Welding",
    icon: Waves,
  },
]

const warehouses = [
  { id: "raymond", name: "Raymond", icon: Warehouse },
  { id: "blueridge", name: "Blueridge", icon: Warehouse },
  { id: "buena-park", name: "Buena Park", icon: Warehouse },
  { id: "enterprise", name: "Enterprise", icon: Warehouse },
  { id: "kimberly", name: "Kimberly", icon: Warehouse },
  { id: "kimberly-2", name: "Kimberly 2", icon: Warehouse },
]

interface NavigationState {
  currentView: "home" | "department" | "executive"
  selectedDepartment: string | null
  departmentName: string | null
}

// Department Dashboard Component
function DepartmentDashboard({
  departmentId,
  departmentName,
  onBack,
}: {
  departmentId: string
  departmentName: string
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c5a6b] to-[#1a3a45] text-white">
      {/* Header with Back Button */}
      <header className="flex items-center justify-between py-6 px-6 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-[#005a78] font-bold text-sm">TU</span>
            </div>
            <h1 className="text-2xl font-bold">{departmentName}</h1>
          </div>
        </div>
        <div className="w-24"></div> {/* Spacer for centering */}
      </header>

      {/* Department Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#005a78] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">{departmentName} Dashboard</h2>
            <p className="text-white/70 text-lg mb-8">
              Welcome to the {departmentName} department. This dashboard will be customized with specific tools and
              analytics for your department.
            </p>

            {/* Placeholder for department-specific content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
                <p className="text-white/70">Department-specific quick actions will appear here</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Analytics</h3>
                <p className="text-white/70">Real-time analytics and metrics for {departmentName}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Reports</h3>
                <p className="text-white/70">Generate and view department reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home Dashboard Component
function HomeDashboard({
  onDepartmentClick,
  hoveredItem,
  setHoveredItem,
}: {
  onDepartmentClick: (id: string, name: string) => void
  hoveredItem: string | null
  setHoveredItem: (id: string | null) => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e4a5f] to-[#2d5a73] text-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0d3d4f] to-[#082a36] py-8 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-2">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <img src="/logo.svg" alt="TerraOS" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-wide text-white">TerraOS</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Departments Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Departments</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => onDepartmentClick(dept.id, dept.name)}
                  onMouseEnter={() => setHoveredItem(dept.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group p-4 text-gray-800 transition-all duration-300 hover:bg-gray-50 rounded-xl relative overflow-hidden ${
                    hoveredItem === dept.id ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2d5a73] to-[#1e4a5f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 text-sm leading-tight">{dept.name}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Shops Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Shops</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {productionShops.map((shop) => (
                <button
                  key={shop.id}
                  onClick={() => onDepartmentClick(shop.id, shop.name)}
                  onMouseEnter={() => setHoveredItem(shop.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group p-4 text-gray-800 transition-all duration-300 hover:bg-gray-50 rounded-xl relative overflow-hidden ${
                    hoveredItem === shop.id ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2d5a73] to-[#1e4a5f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <shop.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 text-sm leading-tight">{shop.name}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Warehouses Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Warehouses</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {warehouses.map((warehouse) => (
                <button
                  key={warehouse.id}
                  onClick={() => onDepartmentClick(warehouse.id, warehouse.name)}
                  onMouseEnter={() => setHoveredItem(warehouse.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group p-4 text-gray-800 transition-all duration-300 hover:bg-gray-50 rounded-xl relative overflow-hidden ${
                    hoveredItem === warehouse.id ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2d5a73] to-[#1e4a5f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <warehouse.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 text-sm leading-tight">{warehouse.name}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Executive Control Center Component
function ExecutiveControlCenter({ onBack }: { onBack: () => void }) {
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null)
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Welcome to TerraOS Executive Control Center. How can I help you today?" },
  ])
  const [chatInput, setChatInput] = useState("")

  const handleSendMessage = () => {
    if (!chatInput.trim()) return

    setChatMessages((prev) => [
      ...prev,
      { role: "user", content: chatInput },
      {
        role: "assistant",
        content: "I'm processing your request. This AI interface will be connected to live operational data.",
      },
    ])
    setChatInput("")
  }

  const kpiData = [
    { title: "Total Revenue", value: "$2.4M", change: "+12.5%", trend: "up" },
    { title: "Active Orders", value: "1,247", change: "+8.2%", trend: "up" },
    { title: "Production Efficiency", value: "94.2%", change: "-2.1%", trend: "down" },
    { title: "Inventory Turnover", value: "6.8x", change: "+15.3%", trend: "up" },
  ]

  const alerts = [
    { type: "warning", message: "Low inventory alert: Cleanroom filters below threshold", time: "2 min ago" },
    { type: "info", message: "Production milestone reached: 1000 units completed", time: "15 min ago" },
    { type: "error", message: "Equipment maintenance required: Welding Station #3", time: "1 hour ago" },
  ]

  const departmentStatus = [
    { name: "Sales", status: "excellent", value: "98%" },
    { name: "Production", status: "good", value: "94%" },
    { name: "Inventory", status: "warning", value: "76%" },
    { name: "Quality", status: "excellent", value: "99%" },
    { name: "Shipping", status: "good", value: "92%" },
    { name: "Maintenance", status: "warning", value: "78%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c5a6b] to-[#1a3a45] text-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-[#005a78] font-bold text-sm">TU</span>
            </div>
            <h1 className="text-2xl font-bold">Executive Control Center</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-white/70">System Status</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">All Systems Operational</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Main Dashboard Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-white/70">{kpi.title}</h3>
                  <div
                    className={`flex items-center space-x-1 ${kpi.trend === "up" ? "text-green-400" : "text-red-400"}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={kpi.trend === "up" ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"} />
                    </svg>
                    <span className="text-xs">{kpi.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold">{kpi.value}</div>
              </div>
            ))}
          </div>

          {/* Department Status Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Department Performance</h3>
              <div className="space-y-4">
                {departmentStatus.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{dept.name}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-white/70">{dept.value}</span>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          dept.status === "excellent"
                            ? "bg-green-400"
                            : dept.status === "good"
                              ? "bg-blue-400"
                              : "bg-yellow-400"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">System Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === "error"
                          ? "bg-red-400"
                          : alert.type === "warning"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-white/50 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-[#005a78] hover:bg-[#007399] rounded-xl p-6 text-left transition-colors duration-200">
              <h4 className="font-semibold mb-2">Emergency Protocols</h4>
              <p className="text-sm text-white/70">Access emergency procedures and alerts</p>
            </button>
            <button className="bg-[#005a78] hover:bg-[#007399] rounded-xl p-6 text-left transition-colors duration-200">
              <h4 className="font-semibold mb-2">Resource Allocation</h4>
              <p className="text-sm text-white/70">Manage workforce and equipment distribution</p>
            </button>
            <button className="bg-[#005a78] hover:bg-[#007399] rounded-xl p-6 text-left transition-colors duration-200">
              <h4 className="font-semibold mb-2">Performance Reports</h4>
              <p className="text-sm text-white/70">Generate comprehensive analytics reports</p>
            </button>
          </div>
        </div>

        {/* AI Chat Sidebar */}
        <div className="w-80 bg-white/5 backdrop-blur-sm border-l border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <h3 className="font-semibold flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              AI Assistant
            </h3>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user" ? "bg-[#005a78] text-white" : "bg-white/10 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about operations..."
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#005a78] hover:bg-[#007399] rounded-lg px-3 py-2 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CapacityManagementInterface({ onBack }: { onBack: () => void }) {
  const [selectedShop, setSelectedShop] = useState<string | null>(null)
  const [draggedOrder, setDraggedOrder] = useState<string | null>(null)

  const shopCapacity = [
    { id: "assembly", name: "Assembly", capacity: 85, available: 15, workers: 12, efficiency: 94 },
    { id: "welding", name: "Welding", capacity: 92, available: 8, workers: 8, efficiency: 96 },
    { id: "sheet-metal", name: "Sheet Metal", capacity: 78, available: 22, workers: 10, efficiency: 89 },
    { id: "electronics", name: "Electronics", capacity: 88, available: 12, workers: 6, efficiency: 92 },
    { id: "cleanroom", name: "Cleanroom", capacity: 95, available: 5, workers: 4, efficiency: 98 },
    { id: "grinding", name: "Grinding", capacity: 72, available: 28, workers: 5, efficiency: 87 },
  ]

  const workOrders = [
    { id: "WO-001", product: "Cleanroom Workstation", priority: "high", hours: 24, assignedTo: "assembly" },
    { id: "WO-002", product: "Fume Hood", priority: "medium", hours: 16, assignedTo: "welding" },
    { id: "WO-003", product: "Pass-Through", priority: "low", hours: 8, assignedTo: null },
    { id: "WO-004", product: "Air Shower", priority: "high", hours: 32, assignedTo: null },
    { id: "WO-005", product: "Laminar Flow Hood", priority: "medium", hours: 20, assignedTo: "cleanroom" },
  ]

  const handleDragStart = (orderId: string) => {
    setDraggedOrder(orderId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (shopId: string) => {
    if (draggedOrder) {
      // In a real app, this would update the work order assignment
      console.log(`Assigning order ${draggedOrder} to shop ${shopId}`)
      setDraggedOrder(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c5a6b] to-[#1a3a45] text-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-[#005a78] font-bold text-sm">TU</span>
            </div>
            <h1 className="text-2xl font-bold">Capacity Management</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-white/70">Overall Efficiency</div>
            <div className="text-lg font-bold text-green-400">92.8%</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Shop Capacity Overview */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-semibold mb-6">Shop Capacity Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopCapacity.map((shop) => (
              <div
                key={shop.id}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                onClick={() => setSelectedShop(selectedShop === shop.id ? null : shop.id)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(shop.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{shop.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-white/70">{shop.workers} workers</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Capacity</span>
                    <span>{shop.capacity}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        shop.capacity > 90 ? "bg-red-400" : shop.capacity > 75 ? "bg-yellow-400" : "bg-green-400"
                      }`}
                      style={{ width: `${shop.capacity}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm mt-3">
                    <span>Efficiency</span>
                    <span className="text-green-400">{shop.efficiency}%</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Available</span>
                    <span className="text-blue-400">{shop.available}%</span>
                  </div>
                </div>

                {selectedShop === shop.id && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Current Orders:</span>
                        <span>{workOrders.filter((wo) => wo.assignedTo === shop.id).length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Est. Completion:</span>
                        <span>2.5 days</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Order Assignment */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-6">Work Order Assignment</h2>
            <div className="space-y-4">
              {workOrders.map((order) => (
                <div
                  key={order.id}
                  draggable
                  onDragStart={() => handleDragStart(order.id)}
                  className={`p-4 rounded-lg border cursor-move transition-all duration-200 ${
                    order.assignedTo
                      ? "bg-green-500/10 border-green-500/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{order.id}</span>
                      <div
                        className={`px-2 py-1 rounded text-xs ${
                          order.priority === "high"
                            ? "bg-red-500/20 text-red-300"
                            : order.priority === "medium"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {order.priority}
                      </div>
                    </div>
                    <span className="text-sm text-white/70">{order.hours}h</span>
                  </div>
                  <div className="text-sm text-white/80 mb-2">{order.product}</div>
                  {order.assignedTo && (
                    <div className="text-xs text-green-400">
                      Assigned to: {shopCapacity.find((s) => s.id === order.assignedTo)?.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Throughput Optimization */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-6">Throughput Optimization</h2>

            <div className="space-y-6">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">AI Recommendation</h3>
                <p className="text-sm text-white/80 mb-3">
                  Redistribute WO-004 from Assembly to Sheet Metal to balance workload and reduce completion time by 1.2
                  days.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                  Apply Recommendation
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Performance Metrics</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-white/70">Avg. Completion Time</div>
                    <div className="text-lg font-bold">3.2 days</div>
                    <div className="text-xs text-green-400">-0.8 days vs last week</div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-white/70">Resource Utilization</div>
                    <div className="text-lg font-bold">87.5%</div>
                    <div className="text-xs text-green-400">+5.2% vs last week</div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-white/70">Queue Length</div>
                    <div className="text-lg font-bold">12 orders</div>
                    <div className="text-xs text-red-400">+3 vs yesterday</div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-white/70">On-Time Delivery</div>
                    <div className="text-lg font-bold">94.8%</div>
                    <div className="text-xs text-green-400">+2.1% vs last month</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-2">
                  <button className="bg-[#005a78] hover:bg-[#007399] p-3 rounded text-left text-sm transition-colors duration-200">
                    Auto-Balance Workloads
                  </button>
                  <button className="bg-[#005a78] hover:bg-[#007399] p-3 rounded text-left text-sm transition-colors duration-200">
                    Schedule Overtime
                  </button>
                  <button className="bg-[#005a78] hover:bg-[#007399] p-3 rounded text-left text-sm transition-colors duration-200">
                    Generate Capacity Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InventoryOptimizationModule({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const inventoryData = [
    {
      id: "CLR-001",
      name: "HEPA Filter H14",
      category: "Cleanroom",
      stock: 45,
      minStock: 50,
      maxStock: 200,
      velocity: 12,
      profitMargin: 35,
      status: "low",
      reorderPoint: 50,
      suggestedOrder: 100,
    },
    {
      id: "WLD-002",
      name: "Stainless Steel Sheet 304",
      category: "Welding",
      stock: 0,
      minStock: 25,
      maxStock: 150,
      velocity: 8,
      profitMargin: 28,
      status: "out",
      reorderPoint: 25,
      suggestedOrder: 75,
    },
    {
      id: "ELC-003",
      name: "Control Panel Assembly",
      category: "Electronics",
      stock: 120,
      minStock: 30,
      maxStock: 200,
      velocity: 15,
      profitMargin: 42,
      status: "good",
      reorderPoint: 30,
      suggestedOrder: 0,
    },
    {
      id: "ASM-004",
      name: "Workstation Frame Kit",
      category: "Assembly",
      stock: 18,
      minStock: 20,
      maxStock: 100,
      velocity: 6,
      profitMargin: 38,
      status: "low",
      reorderPoint: 20,
      suggestedOrder: 50,
    },
  ]

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const generatePO = (item: any) => {
    console.log(`Generating PO for ${item.name} - Quantity: ${item.suggestedOrder}`)
    // In a real app, this would integrate with purchasing system
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c5a6b] to-[#1a3a45] text-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-[#005a78] font-bold text-sm">TU</span>
            </div>
            <h1 className="text-2xl font-bold">Inventory Optimization</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-white/70">Total Value</div>
            <div className="text-lg font-bold text-green-400">$2.4M</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Search and Filter Controls */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products or SKUs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/40"
            >
              <option value="all">All Categories</option>
              <option value="cleanroom">Cleanroom</option>
              <option value="welding">Welding</option>
              <option value="electronics">Electronics</option>
              <option value="assembly">Assembly</option>
            </select>
          </div>
        </div>

        {/* Inventory Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-red-300 font-semibold mb-2">Out of Stock</h3>
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-white/70">Immediate action required</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <h3 className="text-yellow-300 font-semibold mb-2">Low Stock</h3>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-white/70">Reorder recommended</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-green-300 font-semibold mb-2">Optimal</h3>
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-white/70">Stock levels good</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-blue-300 font-semibold mb-2">AI Recommendations</h3>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-white/70">Optimization suggestions</div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold">Inventory Details</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 font-medium">Product</th>
                  <th className="text-left p-4 font-medium">Stock Level</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Velocity</th>
                  <th className="text-left p-4 font-medium">Profit Margin</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => (
                  <tr key={item.id} className="border-t border-white/10 hover:bg-white/5">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-white/70">
                          {item.id} • {item.category}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{item.stock}</span>
                        <div className="w-20 bg-white/10 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.status === "out"
                                ? "bg-red-400"
                                : item.status === "low"
                                  ? "bg-yellow-400"
                                  : "bg-green-400"
                            }`}
                            style={{ width: `${Math.min((item.stock / item.maxStock) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs text-white/50 mt-1">
                        Min: {item.minStock} | Max: {item.maxStock}
                      </div>
                    </td>
                    <td className="p-4">
                      <div
                        className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          item.status === "out"
                            ? "bg-red-500/20 text-red-300"
                            : item.status === "low"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-green-500/20 text-green-300"
                        }`}
                      >
                        {item.status === "out" ? "Out of Stock" : item.status === "low" ? "Low Stock" : "Good"}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium">{item.velocity}</span>
                      <span className="text-sm text-white/70 ml-1">units/week</span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-green-400">{item.profitMargin}%</span>
                    </td>
                    <td className="p-4">
                      {item.suggestedOrder > 0 && (
                        <button
                          onClick={() => generatePO(item)}
                          className="bg-[#005a78] hover:bg-[#007399] px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                        >
                          Order {item.suggestedOrder}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function RevenueAnalyticsDashboard({ onBack }: { onBack: () => void }) {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d")
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null)

  const conversionData = [
    { product: "Cleanroom Workstation", quotes: 45, sales: 32, conversion: 71.1, revenue: 480000, trend: "up" },
    { product: "Fume Hood", quotes: 38, sales: 19, conversion: 50.0, revenue: 285000, trend: "down" },
    { product: "Pass-Through", quotes: 62, sales: 48, conversion: 77.4, revenue: 192000, trend: "up" },
    { product: "Air Shower", quotes: 28, sales: 12, conversion: 42.9, revenue: 156000, trend: "down" },
    { product: "Laminar Flow Hood", quotes: 51, sales: 35, conversion: 68.6, revenue: 315000, trend: "up" },
  ]

  const campaigns = [
    {
      id: "spring-promo",
      name: "Spring Cleanroom Promotion",
      status: "active",
      performance: 85,
      budget: 25000,
      spent: 18500,
    },
    { id: "new-product", name: "New Product Launch", status: "draft", performance: 0, budget: 40000, spent: 0 },
    { id: "summer-sale", name: "Summer Equipment Sale", status: "scheduled", performance: 0, budget: 30000, spent: 0 },
  ]

  const underperformingProducts = conversionData.filter((p) => p.conversion < 60)

  const launchCampaign = (campaignId: string) => {
    console.log(`Launching campaign: ${campaignId}`)
    // In a real app, this would integrate with marketing automation
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c5a6b] to-[#1a3a45] text-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-[#005a78] font-bold text-sm">TU</span>
            </div>
            <h1 className="text-2xl font-bold">Revenue Analytics</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-white/40"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-white/70 text-sm font-medium mb-2">Total Revenue</h3>
            <div className="text-2xl font-bold text-green-400">$1.43M</div>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5z" />
              </svg>
              +12.5%
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-white/70 text-sm font-medium mb-2">Avg Conversion Rate</h3>
            <div className="text-2xl font-bold">62.0%</div>
            <div className="text-sm text-red-400 flex items-center mt-1">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
              -3.2%
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-white/70 text-sm font-medium mb-2">Total Quotes</h3>
            <div className="text-2xl font-bold">224</div>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5z" />
              </svg>
              +8.7%
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-white/70 text-sm font-medium mb-2">Sales Closed</h3>
            <div className="text-2xl font-bold">146</div>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5z" />
              </svg>
              +5.1%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Conversion Performance */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-6">Quote-to-Sales Conversion</h2>
            <div className="space-y-4">
              {conversionData.map((product, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{product.product}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${product.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                        {product.conversion}%
                      </span>
                      <svg
                        className={`w-4 h-4 ${product.trend === "up" ? "text-green-400" : "text-red-400"}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={product.trend === "up" ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>
                      {product.sales} sales / {product.quotes} quotes
                    </span>
                    <span>${(product.revenue / 1000).toFixed(0)}K revenue</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${product.conversion > 65 ? "bg-green-400" : product.conversion > 50 ? "bg-yellow-400" : "bg-red-400"}`}
                      style={{ width: `${product.conversion}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Management */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-6">Campaign Management</h2>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">{campaign.name}</span>
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        campaign.status === "active"
                          ? "bg-green-500/20 text-green-300"
                          : campaign.status === "scheduled"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      {campaign.status}
                    </div>
                  </div>

                  {campaign.status === "active" && (
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-white/70 mb-1">
                        <span>Performance</span>
                        <span>{campaign.performance}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-blue-400"
                          style={{ width: `${campaign.performance}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between text-sm text-white/70 mb-3">
                    <span>Budget: ${(campaign.budget / 1000).toFixed(0)}K</span>
                    <span>Spent: ${(campaign.spent / 1000).toFixed(0)}K</span>
                  </div>

                  {campaign.status !== "active" && (
                    <button
                      onClick={() => launchCampaign(campaign.id)}
                      className="w-full bg-[#005a78] hover:bg-[#007399] py-2 rounded text-sm font-medium transition-colors duration-200"
                    >
                      {campaign.status === "draft" ? "Launch Campaign" : "Activate Campaign"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Underperforming Products Alert */}
        {underperformingProducts.length > 0 && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-300 mb-4">Products Needing Promotional Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {underperformingProducts.map((product, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{product.product}</span>
                    <span className="text-yellow-300">{product.conversion}% conversion</span>
                  </div>
                  <p className="text-sm text-white/70 mb-3">
                    Below target conversion rate. Consider promotional campaign or pricing review.
                  </p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                    Create Promotion
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const getDepartmentTools = (departmentId: string) => {
  const toolsMap: Record<string, any[]> = {
    marketing: [
      {
        id: "campaigns",
        name: "Campaign Manager",
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      },
      {
        id: "analytics",
        name: "Marketing Analytics",
        icon: "M3 17l6-6 4 4 8-8v3h2V6h-4v2h3l-6 6-4-4-6 6v2z",
      },
      {
        id: "pricing-automation",
        name: "Pricing Automation",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
      },
    ],
    engineering: [
      {
        id: "cad",
        name: "CAD Tools",
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      },
      {
        id: "project-management",
        name: "Project Management",
        icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
      },
      {
        id: "dashboard",
        name: "Engineering Dashboard",
        icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
      },
    ],
    // ... existing departments
  }
  return toolsMap[departmentId] || []
}

const onToolClick = (toolId: string, toolName: string) => {
  if (toolId === "pricing-automation") {
    window.location.href = "/marketing/pricing-automation"
  } else if (toolId === "dashboard") {
    window.location.href = "/engineering/dashboard"
  } else {
    alert(`Opening ${toolName} tool...`)
  }
}

export default function HomePage() {
  const [navigation, setNavigation] = useState<NavigationState>({
    currentView: "home",
    selectedDepartment: null,
    departmentName: null,
  })
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const handleDepartmentClick = (departmentId: string, departmentName: string) => {
    if (departmentId === "gm") {
      setNavigation({
        currentView: "executive",
        selectedDepartment: departmentId,
        departmentName: departmentName,
      })
    } else if (departmentId === "engineering") {
      // Navigate to the engineering page with tools
      window.location.href = "/engineering"
    } else if (departmentId === "marketing") {
      // Navigate to the marketing page with tools
      window.location.href = "/marketing"
    } else {
      setNavigation({
        currentView: "department",
        selectedDepartment: departmentId,
        departmentName: departmentName,
      })
    }
  }

  const handleBackToHome = () => {
    setNavigation({
      currentView: "home",
      selectedDepartment: null,
      departmentName: null,
    })
  }

  const renderContent = () => {
    if (navigation.currentView === "executive") {
      return <ExecutiveControlCenter onBack={handleBackToHome} />
    }

    if (navigation.currentView === "department" && navigation.selectedDepartment && navigation.departmentName) {
      // Handle specialized dashboards
      if (
        ["purchasing", "materials"].includes(navigation.selectedDepartment) ||
        warehouses.some((w) => w.id === navigation.selectedDepartment)
      ) {
        return <InventoryOptimizationModule onBack={handleBackToHome} />
      }

      if (["sales", "marketing", "analytics"].includes(navigation.selectedDepartment)) {
        return <RevenueAnalyticsDashboard onBack={handleBackToHome} />
      }

      if (
        ["production-control", "assembly"].includes(navigation.selectedDepartment) ||
        productionShops.some((s) => s.id === navigation.selectedDepartment)
      ) {
        return <CapacityManagementInterface onBack={handleBackToHome} />
      }

      // Default department dashboard for other departments
      return (
        <DepartmentDashboard
          departmentId={navigation.selectedDepartment}
          departmentName={navigation.departmentName}
          onBack={handleBackToHome}
        />
      )
    }

    return (
      <HomeDashboard
        onDepartmentClick={handleDepartmentClick}
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
    )
  }

  return renderContent()
}
