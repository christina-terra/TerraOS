"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Calculator,
  BarChart3,
  Headphones,
  Users,
  PencilRuler,
  UserCheck,
  Store,
  Wrench,
  Box,
  Shapes,
  InspectionPanel,
  Waves,
  Bolt,
  Clipboard,
  Warehouse,
} from "lucide-react"

export default function TerraOSHomepage() {
  const router = useRouter()

  const departments = [
    { id: "accounting", name: "Accounting", icon: Calculator },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "customer-service", name: "Customer Service", icon: Headphones },
    { id: "hr", name: "HR", icon: Users },
    { id: "engineering", name: "Engineering", icon: PencilRuler },
    { id: "gm", name: "GM", icon: UserCheck },
    { id: "marketing", name: "Marketing", icon: BarChart3 },
    { id: "purchasing", name: "Purchasing", icon: Store },
    { id: "maintenance", name: "Maintenance", icon: Wrench },
  ]

  const productionShops = [
    { id: "cleanroom", name: "Cleanroom", icon: Box },
    { id: "robotics", name: "Robotics", icon: Bolt },
    { id: "assembly", name: "Assembly", icon: Shapes },
    { id: "sheet-metal", name: "Sheet Metal", icon: InspectionPanel },
    { id: "welding", name: "Welding", icon: Waves },
    { id: "production-control", name: "Production Control", icon: Clipboard },
  ]

  const warehouses = [
    { id: "warehouse-1", name: "Warehouse 1", icon: Warehouse },
    { id: "warehouse-2", name: "Warehouse 2", icon: Warehouse },
    { id: "warehouse-3", name: "Warehouse 3", icon: Warehouse },
  ]

  const handleDepartmentClick = (departmentId: string) => {
    if (departmentId === "engineering") {
      router.push("/engineering")
    } else if (departmentId === "marketing") {
      router.push("/marketing")
    } else {
      alert(`${departmentId} department coming soon...`)
    }
  }

  const handleShopClick = (shopId: string) => {
    alert(`${shopId} shop coming soon...`)
  }

  const handleWarehouseClick = (warehouseId: string) => {
    alert(`${warehouseId} coming soon...`)
  }

  const renderSection = (title: string, items: any[], onItemClick: (id: string) => void) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => {
          const IconComponent = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#005a78] to-[#007ba7] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{item.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e4a5f] to-[#2d5a73]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a3d4f] to-[#2d5a73] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="TerraOS Logo" width={40} height={40} className="w-10 h-10" />
              <h1 className="text-2xl font-bold text-white">TerraOS</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {renderSection("Departments", departments, handleDepartmentClick)}
          {renderSection("Shops", productionShops, handleShopClick)}
          {renderSection("Warehouses", warehouses, handleWarehouseClick)}
        </div>
      </div>
    </div>
  )
}
