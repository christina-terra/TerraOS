"use client"

export default function EngineeringDashboardPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineering: Work Orders Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            font-size: 13px;
            color: #334155;
        }

        .header {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            padding: 0;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .header-title {
            padding: 16px 24px;
            font-size: 20px;
            font-weight: 600;
            color: #1e293b;
            border-bottom: 1px solid #e2e8f0;
        }

        .nav-tabs {
            display: flex;
            background-color: #f1f5f9;
            overflow-x: auto;
        }

        .nav-tab {
            padding: 12px 24px;
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: #64748b;
            border-bottom: 3px solid transparent;
            transition: all 0.2s ease;
            white-space: nowrap;
            position: relative;
        }

        .nav-tab:hover {
            background-color: #e2e8f0;
            color: #475569;
        }

        .nav-tab.active {
            background-color: #ffffff;
            color: rgb(0, 90, 120);
            border-bottom-color: rgb(0, 90, 120);
            box-shadow: 0 -2px 8px rgba(0, 90, 120, 0.1);
        }

        .dashboard {
            display: flex;
            height: calc(100vh - 120px);
        }

        .sidebar {
            width: 320px;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            border-right: 1px solid #e2e8f0;
            padding: 20px;
            overflow-y: auto;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
        }

        .work-orders-summary {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .work-orders-count {
            font-size: 32px;
            font-weight: 600;
            color: rgb(0, 90, 120);
            margin-bottom: 4px;
            line-height: 1;
        }

        .main-count-label {
            font-size: 12px;
            color: #64748b;
            font-weight: 500;
            letter-spacing: 0.5px;
        }

        .status-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .status-badge-early {
            background-color: #dcfce7;
            color: #166534;
            border: 1px solid #16a34a;
        }

        .status-badge-late {
            background-color: #fef2f2;
            color: #991b1b;
            border: 1px solid #dc2626;
        }

        .status-badge-on-time {
            background-color: #dbeafe;
            color: #1e40af;
            border: 1px solid #2563eb;
        }

        .priority-red-stock,
        .priority-fastrak {
            color: #dc2626 !important;
            font-weight: 700 !important;
        }

        .filter-section {
            margin-bottom: 20px;
            background: #ffffff;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
        }

        .filter-title {
            font-weight: 600;
            margin-bottom: 12px;
            color: #1e293b;
            font-size: 14px;
            display: flex;
            align-items: center;
        }

        .filter-title::before {
            content: '';
            width: 3px;
            height: 16px;
            background: rgb(0, 90, 120);
            margin-right: 8px;
            border-radius: 2px;
        }

        .date-section {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
        }

        .date-inputs {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;
        }

        .date-inputs input {
            padding: 8px 12px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            font-size: 13px;
            width: 120px;
            transition: border-color 0.2s ease;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .date-inputs input:focus {
            outline: none;
            border-color: rgb(0, 90, 120);
            box-shadow: 0 0 0 3px rgba(0, 90, 120, 0.1);
        }

        .filter-list {
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            max-height: 150px;
            overflow-y: auto;
            background: #ffffff;
        }

        .filter-item {
            padding: 8px 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            font-size: 12px;
            border-bottom: 1px solid #f1f5f9;
            transition: background-color 0.2s ease;
        }

        .filter-item:last-child {
            border-bottom: none;
        }

        .filter-item:hover {
            background-color: #f8fafc;
        }

        .filter-item input[type="checkbox"] {
            margin-right: 8px;
            width: 16px;
            height: 16px;
            accent-color: rgb(0, 90, 120);
        }

        .status-filters {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 12px;
        }

        .status-item {
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 11px;
            cursor: pointer;
            border: 1px solid #cbd5e1;
            background: white;
            display: flex;
            align-items: center;
            transition: all 0.2s ease;
            font-weight: 500;
        }

        .status-item:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .quick-filters {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .quick-filter-btn {
            padding: 10px 16px;
            border: 1px solid #e2e8f0;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            cursor: pointer;
            font-size: 12px;
            border-radius: 6px;
            text-align: center;
            transition: all 0.2s ease;
            font-weight: 500;
            color: #475569;
        }

        .quick-filter-btn:hover {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .quick-filter-btn.active {
            background: linear-gradient(135deg, rgb(0, 90, 120) 0%, rgb(0, 70, 100) 100%);
            color: white;
            border-color: rgb(0, 90, 120);
            box-shadow: 0 2px 8px rgba(0, 90, 120, 0.3);
        }

        .main-content {
            flex: 1;
            background-color: #ffffff;
            padding: 20px;
            overflow: auto;
        }

        .main-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .main-table th {
            background: linear-gradient(180deg, rgb(0, 90, 120) 0%, rgb(0, 70, 100) 100%);
            color: white;
            padding: 12px 8px;
            text-align: left;
            font-weight: 600;
            border-right: 1px solid rgba(255,255,255,0.2);
            font-size: 11px;
            cursor: pointer;
            position: relative;
            user-select: none;
        }

        .main-table th:hover {
            background: linear-gradient(180deg, rgb(0, 110, 140) 0%, rgb(0, 90, 120) 100%);
        }

        .sort-arrow {
            font-size: 12px;
            margin-left: 6px;
            opacity: 0;
            transition: opacity 0.2s ease;
            display: inline-block;
            width: 0;
        }

        .main-table th:hover .sort-arrow {
            opacity: 0.5;
        }

        .sort-arrow.active {
            opacity: 1;
            width: auto;
        }

        .sort-arrow.asc::after {
            content: '▲';
        }

        .sort-arrow.desc::after {
            content: '▼';
        }

        .main-table td {
            padding: 8px;
            border-bottom: 1px solid #f1f5f9;
            border-right: 1px solid #f1f5f9;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 120px;
            position: relative;
        }

        .main-table td:hover {
            background-color: #f0f9ff;
        }

        .main-table tr:nth-child(even) {
            background-color: #f8fafc;
        }

        .main-table tr:hover {
            background-color: #e0f2fe;
            transform: scale(1.001);
            transition: all 0.2s ease;
        }

        .status-late-cell {
            color: #991b1b;
            font-weight: 400;
        }

        .status-early-cell {
            color: #166534;
            font-weight: 400;
        }

        .status-on-time-cell {
            color: #1e40af;
            font-weight: 400;
        }

        .total-row {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            font-weight: 600;
            color: #1e293b;
        }

        .clear-filters {
            background: linear-gradient(135deg, rgb(0, 90, 120) 0%, rgb(0, 70, 100) 100%);
            color: white;
            border: none;
            padding: 12px 16px;
            cursor: pointer;
            margin-top: 16px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            width: 100%;
            transition: all 0.2s ease;
        }

        .clear-filters:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 90, 120, 0.3);
        }

        .context-menu {
            position: fixed;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            padding: 8px 0;
            min-width: 180px;
            display: none;
        }

        .context-menu-item {
            padding: 8px 16px;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            align-items: center;
            transition: background-color 0.2s ease;
        }

        .context-menu-item:hover {
            background-color: #f1f5f9;
        }

        .context-menu-item input[type="checkbox"] {
            margin-right: 8px;
            accent-color: rgb(0, 90, 120);
        }

        .context-menu-separator {
            height: 1px;
            background-color: #e2e8f0;
            margin: 4px 0;
        }

        .main-table th.hidden,
        .main-table td.hidden {
            display: none;
        }

        /* Custom scrollbar */
        .sidebar::-webkit-scrollbar, .filter-list::-webkit-scrollbar {
            width: 6px;
        }

        .sidebar::-webkit-scrollbar-track, .filter-list::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb, .filter-list::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover, .filter-list::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-title">Engineering: Work Orders</div>
        <div class="nav-tabs">
            <button class="nav-tab active">Work Orders</button>
            <button class="nav-tab">WO Report</button>
            <button class="nav-tab">Hours Report</button>
            <button class="nav-tab">Product Watchlist</button>
            <button class="nav-tab">Performance</button>
            <button class="nav-tab">Projects</button>
        </div>
    </div>

    <div class="dashboard">
        <div class="sidebar">
            <div class="work-orders-summary">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 20px;">
                    <div style="flex: 1; max-width: 140px;">
                        <div class="work-orders-count" id="workOrdersCount">15</div>
                        <div class="main-count-label">Work Orders</div>
                    </div>
                    <div style="width: 100px; flex-shrink: 0;">
                        <div style="background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; border-radius: 14px; padding: 4px 8px; margin-bottom: 4px; font-size: 12px; display: flex; align-items: center; height: 24px;">
                            <div style="width: 5px; height: 5px; background: #16a34a; border-radius: 50%; margin-right: 5px;"></div>
                            <span style="font-size: 14px; font-weight: 500; margin-right: 4px;" id="earlyCount">3</span>
                            <span>Early</span>
                        </div>
                        <div style="background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; border-radius: 14px; padding: 4px 8px; margin-bottom: 4px; font-size: 12px; display: flex; align-items: center; height: 24px;">
                            <div style="width: 5px; height: 5px; background: #2563eb; border-radius: 50%; margin-right: 5px;"></div>
                            <span style="font-size: 14px; font-weight: 500; margin-right: 4px;" id="onTimeCount">3</span>
                            <span>On-Time</span>
                        </div>
                        <div style="background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; border-radius: 14px; padding: 4px 8px; font-size: 12px; display: flex; align-items: center; height: 24px;">
                            <div style="width: 5px; height: 5px; background: #dc2626; border-radius: 50%; margin-right: 5px;"></div>
                            <span style="font-size: 14px; font-weight: 500; margin-right: 4px;" id="lateCount">9</span>
                            <span>Late</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="date-section">
                <div class="filter-title">WO Released Date</div>
                <div class="date-inputs">
                    <input type="date" id="startDate" value="2022-01-01">
                    <input type="date" id="endDate" value="2025-07-30">
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Quick Filters</div>
                <div class="quick-filters">
                    <div class="quick-filter-btn" id="prototypes-btn" onclick="handleQuickFilter('prototypes-btn')">Prototypes</div>
                    <div class="quick-filter-btn" id="late-ecrs-btn" onclick="handleQuickFilter('late-ecrs-btn')">Late ECRs</div>
                    <div class="quick-filter-btn" id="late-rmas-btn" onclick="handleQuickFilter('late-rmas-btn')">Late RMAs</div>
                    <div class="quick-filter-btn" id="late-prototypes-btn" onclick="handleQuickFilter('late-prototypes-btn')">Late Prototypes</div>
                    <div class="quick-filter-btn" id="priority-btn" onclick="handleQuickFilter('priority-btn')">Priority</div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Open/Closed</div>
                <div style="display: flex; gap: 16px;">
                    <div class="filter-item" style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 12px; background: white;">
                        <input type="checkbox" id="open-orders" checked>
                        <label for="open-orders">Open</label>
                    </div>
                    <div class="filter-item" style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 12px; background: white;">
                        <input type="checkbox" id="closed-orders" checked>
                        <label for="closed-orders">Closed</label>
                    </div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Status</div>
                <div class="status-filters">
                    <div class="status-item" data-filter="early" onclick="toggleStatusFilter(this)">
                        <label>Early</label>
                    </div>
                    <div class="status-item" data-filter="on-time" onclick="toggleStatusFilter(this)">
                        <label>On-Time</label>
                    </div>
                    <div class="status-item" data-filter="late" onclick="toggleStatusFilter(this)">
                        <label>Late</label>
                    </div>
                </div>
            </div>

            <!-- Added all missing filter sections from original -->
            <div class="filter-section">
                <div class="filter-title">Filter by Work List</div>
                <div class="filter-list" style="max-height: 120px;">
                    <div class="filter-item">
                        <input type="checkbox" id="approval-drawings" checked>
                        <label for="approval-drawings">Approval Drawings</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="client" checked>
                        <label for="client">Client</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="documents" checked>
                        <label for="documents">Documents</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="engineering" checked>
                        <label for="engineering">Engineering</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="internal" checked>
                        <label for="internal">Internal</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="stock" checked>
                        <label for="stock">Stock</label>
                    </div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Priority</div>
                <div class="filter-list" style="max-height: 200px;">
                    <div class="filter-item">
                        <input type="checkbox" id="priority-client" checked>
                        <label>Client</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-clientstock" checked>
                        <label>ClientStock</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-custom" checked>
                        <label>Custom</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-ecr" checked>
                        <label>ECR</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-fastrak" checked>
                        <label>FastTrak</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-fastrak-24-7" checked>
                        <label>FastTrak 24-7</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-investigative" checked>
                        <label>Investigative</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-prototype" checked>
                        <label>Prototype</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-r-d" checked>
                        <label>R&D</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-red-stock" checked>
                        <label>Red Stock</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-rma" checked>
                        <label>RMA</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-standard" checked>
                        <label>Standard</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="priority-stock" checked>
                        <label>Stock</label>
                    </div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Shop</div>
                <div class="filter-list" style="max-height: 100px;">
                    <div class="filter-item">
                        <input type="checkbox" id="shop-documents" checked>
                        <label for="shop-documents">Documents</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="shop-engineering" checked>
                        <label for="shop-engineering">Engineering</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="shop-tronics" checked>
                        <label for="shop-tronics">Tronics</label>
                    </div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Next Shop</div>
                <div class="filter-list" style="max-height: 120px;">
                    <div class="filter-item">
                        <input type="checkbox" id="next-shop-production" checked>
                        <label for="next-shop-production">Production</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="next-shop-administration" checked>
                        <label for="next-shop-administration">Administration</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="next-shop-assembly" checked>
                        <label for="next-shop-assembly">Assembly</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="next-shop-engineering" checked>
                        <label for="next-shop-engineering">Engineering</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="next-shop-production-control" checked>
                        <label for="next-shop-production-control">Production Control</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="next-shop-sales" checked>
                        <label for="next-shop-sales">Sales</label>
                    </div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Work Leader</div>
                <div class="filter-list" style="max-height: 150px;">
                    <div class="filter-item">
                        <input type="checkbox" id="leader-aldo" checked>
                        <label for="leader-aldo">Aldo Khiev</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-alvin" checked>
                        <label for="leader-alvin">Alvin Su</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-andres" checked>
                        <label for="leader-andres">Andres Lopez</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-anh" checked>
                        <label for="leader-anh">Anh Tran</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-benjamin" checked>
                        <label for="leader-benjamin">Benjamin Choi Dinh</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-calvin" checked>
                        <label for="leader-calvin">Calvin Bui</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-carlos-melchor" checked>
                        <label for="leader-carlos-melchor">Carlos Melchor</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-carlos-salinas" checked>
                        <label for="leader-carlos-salinas">Carlos Salinas</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-dishant" checked>
                        <label for="leader-dishant">Dishant Mehta</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-donald" checked>
                        <label for="leader-donald">Donald Nelson</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-enrique" checked>
                        <label for="leader-enrique">Enrique Espinoza</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-garrett" checked>
                        <label for="leader-garrett">Garrett Ginoza</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="leader-jimmy" checked>
                        <label for="leader-jimmy">Jimmy Pham</label>
                    </div>
                </div>
            </div>

            <button class="clear-filters" onclick="clearAllFilters()">Clear All Filters</button>
        </div>

        <div class="main-content">
            <!-- Added complete table with all columns from original -->
            <table class="main-table" id="mainTable">
                <thead>
                    <tr>
                        <th onclick="sortTable(0)">WO ID #</th>
                        <th onclick="sortTable(1)">Released</th>
                        <th onclick="sortTable(2)">Due Rev</th>
                        <th onclick="sortTable(3)">Closed</th>
                        <th onclick="sortTable(4)">Priority</th>
                        <th onclick="sortTable(5)">Next Shop</th>
                        <th onclick="sortTable(6)">Work Leader</th>
                        <th onclick="sortTable(7)">Days Late</th>
                        <th onclick="sortTable(8)">Status</th>
                        <th onclick="sortTable(9)">Last Worked</th>
                        <th onclick="sortTable(10)">Last Process</th>
                        <th onclick="sortTable(11)">First Part Num</th>
                        <th onclick="sortTable(12)">FIRST LINE QTY</th>
                        <th onclick="sortTable(13)">First Line Description</th>
                        <th onclick="sortTable(14)">Instruction</th>
                        <th onclick="sortTable(15)">Memo</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <!-- Data will be populated by JavaScript -->
                </tbody>
            </table>
            
            <!-- Right-click context menu -->
            <div id="contextMenu" class="context-menu">
                <div class="context-menu-item">
                    <strong>Show/Hide Columns</strong>
                </div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-0" checked onchange="toggleColumn(0)">
                    <label>WO ID #</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-1" checked onchange="toggleColumn(1)">
                    <label>Released</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-2" checked onchange="toggleColumn(2)">
                    <label>Due Rev</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-3" checked onchange="toggleColumn(3)">
                    <label>Closed</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-4" checked onchange="toggleColumn(4)">
                    <label>Priority</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-5" checked onchange="toggleColumn(5)">
                    <label>Next Shop</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-6" checked onchange="toggleColumn(6)">
                    <label>Work Leader</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-7" checked onchange="toggleColumn(7)">
                    <label>Days Late</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-8" checked onchange="toggleColumn(8)">
                    <label>Status</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-9" checked onchange="toggleColumn(9)">
                    <label>Last Worked</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-10" checked onchange="toggleColumn(10)">
                    <label>Last Process</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-11" checked onchange="toggleColumn(11)">
                    <label>First Part Num</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-12" checked onchange="toggleColumn(12)">
                    <label>FIRST LINE QTY</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-13" checked onchange="toggleColumn(13)">
                    <label>First Line Description</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-14" checked onchange="toggleColumn(14)">
                    <label>Instruction</label>
                </div>
                <div class="context-menu-item">
                    <input type="checkbox" id="col-15" checked onchange="toggleColumn(15)">
                    <label>Memo</label>
                </div>
            </div>
        </div>
    </div>

    <script>
        const workOrders = [
            {
                woId: "TU13758-N2-1",
                released: "7/23/2025",
                dueRev: "8/8/2025",
                closed: "",
                priority: "R&D",
                nextShop: "Engineering",
                workLeader: "Dishant Mehta",
                daysLate: -9,
                status: "Early",
                lastWorked: "",
                lastProcess: "Released",
                firstPartNum: "FA08870",
                firstLineQty: 0,
                description: "Weldnut: C1010 Steel: 3/...",
                instruction: "Implement the weldnut into a wo...",
                memo: "Due Orig first set to: 08/...",
                workList: "Engineering",
                shop: "Engineering"
            },
            {
                woId: "P201378-N2-1",
                released: "7/18/2025",
                dueRev: "7/24/2025",
                closed: "",
                priority: "ECR",
                nextShop: "Production Control",
                workLeader: "Sigfried Velasquez",
                daysLate: 6,
                status: "Late",
                lastWorked: "7/30/2025",
                lastProcess: "1800: W/O Issued",
                firstPartNum: "5100-00A",
                firstLineQty: 100,
                description: "Universal MicroVac Vac...",
                instruction: "Update drawings/BoMs by apply...",
                memo: "Due first set to: 09/...",
                workList: "Engineering",
                shop: "Engineering"
            },
            {
                woId: "339714-N2-1",
                released: "7/17/2025",
                dueRev: "7/24/2025",
                closed: "7/24/2025",
                priority: "FastTrak",
                nextShop: "Production Control",
                workLeader: "Carlos Melchor",
                daysLate: 0,
                status: "On-Time",
                lastWorked: "7/25/2025",
                lastProcess: "Closed",
                firstPartNum: "2640-97A",
                firstLineQty: 1,
                description: "Specimen Pass-Th...",
                instruction: "Complete assembly and test",
                memo: "Closed on schedule",
                workList: "Client",
                shop: "Documents"
            },
            {
                woId: "P209412-N1-1",
                released: "7/15/2025",
                dueRev: "7/22/2025",
                closed: "",
                priority: "Red Stock",
                nextShop: "Production Control",
                workLeader: "Garrett Ginoza",
                daysLate: 8,
                status: "Late",
                lastWorked: "",
                lastProcess: "1800: W/O Issued",
                firstPartNum: "1694-50A",
                firstLineQty: 4,
                description: "Glovebox Port: 304...",
                instruction: "Priority red stock item",
                memo: "Urgent production required",
                workList: "Stock",
                shop: "Tronics"
            },
            {
                woId: "TU16852-N1-1",
                released: "7/15/2025",
                dueRev: "7/22/2025",
                closed: "",
                priority: "ECR",
                nextShop: "Engineering",
                workLeader: "Station Tran",
                daysLate: 8,
                status: "Late",
                lastWorked: "7/17/2025",
                lastProcess: "1815: Detail/Shop Dwgs",
                firstPartNum: "3305-34A",
                firstLineQty: 1,
                description: "Smart® Glovebox: Clean...",
                instruction: "Engineering change required",
                memo: "Late ECR processing",
                workList: "Engineering",
                shop: "Engineering"
            },
            {
                woId: "340068-N1-1",
                released: "7/14/2025",
                dueRev: "7/17/2025",
                closed: "7/15/2025",
                priority: "Standard",
                nextShop: "Sales",
                workLeader: "Andres Lopez",
                daysLate: -2,
                status: "Early",
                lastWorked: "7/17/2025",
                lastProcess: "Closed",
                firstPartNum: "1694-01C",
                firstLineQty: 6,
                description: "Glovebox: Series 30...",
                instruction: "Standard processing complete",
                memo: "Completed ahead of schedule",
                workList: "Client",
                shop: "Documents"
            },
            {
                woId: "TU16194-N1-1",
                released: "4/23/2025",
                dueRev: "4/29/2025",
                closed: "",
                priority: "Red Stock",
                nextShop: "Production Control",
                workLeader: "Sigfried Velasquez",
                daysLate: 92,
                status: "Late",
                lastWorked: "",
                lastProcess: "1800: W/O Issued",
                firstPartNum: "6601-24-UT-...",
                firstLineQty: 0,
                description: "Fan Filter Unit: Heated...",
                instruction: "Critical red stock shortage",
                memo: "Extreme delay - priority escalation",
                workList: "Stock",
                shop: "Tronics"
            },
            {
                woId: "TU15922-N2-1",
                released: "4/24/2025",
                dueRev: "7/2/2025",
                closed: "",
                priority: "Investigative",
                nextShop: "Engineering",
                workLeader: "Sigfried Velasquez",
                daysLate: 28,
                status: "Late",
                lastWorked: "",
                lastProcess: "1801: Assigned to Shop",
                firstPartNum: "1870-01A",
                firstLineQty: 0,
                description: "Hood: Portable Clean...",
                instruction: "Investigation required for new design",
                memo: "Research phase ongoing",
                workList: "Engineering",
                shop: "Engineering"
            },
            {
                woId: "336101-N2-1",
                released: "4/24/2025",
                dueRev: "5/2/2025",
                closed: "5/2/2025",
                priority: "FastTrak",
                nextShop: "Production Control",
                workLeader: "Garrett Ginoza",
                daysLate: 0,
                status: "On-Time",
                lastWorked: "5/2/2025",
                lastProcess: "1890: 2 Next Shop",
                firstPartNum: "1702-86",
                firstLineQty: 2,
                description: "Pass-Through: Conv...",
                instruction: "FastTrak processing complete",
                memo: "Delivered on time",
                workList: "Client",
                shop: "Documents"
            },
            {
                woId: "PR001-N1-1",
                released: "6/15/2025",
                dueRev: "7/15/2025",
                closed: "",
                priority: "Prototype",
                nextShop: "Engineering",
                workLeader: "Donald Nelson",
                daysLate: 15,
                status: "Late",
                lastWorked: "7/20/2025",
                lastProcess: "1835: Make Prototype",
                firstPartNum: "PROTO-001",
                firstLineQty: 1,
                description: "Prototype Development...",
                instruction: "Build and test prototype",
                memo: "Prototype testing phase",
                workList: "Engineering",
                shop: "Engineering"
            },
            {
                woId: "PR002-N1-1",
                released: "6/20/2025",
                dueRev: "7/20/2025",
                closed: "",
                priority: "Prototype",
                nextShop: "Engineering",
                workLeader: "Calvin Bui",
                daysLate: 10,
                status: "Late",
                lastWorked: "7/25/2025",
                lastProcess: "1835: Make Prototype",
                firstPartNum: "PROTO-002",
                firstLineQty: 1,
                description: "Advanced Prototype...",
                instruction: "Second generation prototype",
                memo: "Enhanced features testing",
                workList: "Engineering",
                shop: "Engineering"
            },
            {
                woId: "RMA001-N1-1",
                released: "5/10/2025",
                dueRev: "5/20/2025",
                closed: "",
                priority: "RMA",
                nextShop: "Production Control",
                workLeader: "Juan Real",
                daysLate: 70,
                status: "Late",
                lastWorked: "6/15/2025",
                lastProcess: "1800: W/O Issued",
                firstPartNum: "RMA-5678",
                firstLineQty: 1,
                description: "Return Material Authorization...",
                instruction: "Process returned material",
                memo: "Customer return - late processing",
                workList: "Internal",
                shop: "Tronics"
            },
            {
                woId: "335257-N1-1",
                released: "4/24/2025",
                dueRev: "5/1/2025",
                closed: "5/2/2025",
                priority: "Client",
                nextShop: "Production Control",
                workLeader: "Carlos Salinas",
                daysLate: 0,
                status: "On-Time",
                lastWorked: "5/2/2025",
                lastProcess: "1890: 2 Next Shop",
                firstPartNum: "3304-01A",
                firstLineQty: 1,
                description: "Smart® Glovebox: Ac...",
                instruction: "Client specific requirements",
                memo: "Custom client configuration",
                workList: "Client",
                shop: "Documents"
            },
            {
                woId: "340556-N2-1",
                released: "7/22/2025",
                dueRev: "7/29/2025",
                closed: "",
                priority: "Custom",
                nextShop: "Production Control",
                workLeader: "Carlos Melchor",
                daysLate: 1,
                status: "Late",
                lastWorked: "7/29/2025",
                lastProcess: "1890: 2 Next Shop",
                firstPartNum: "1681-290-RH",
                firstLineQty: 1,
                description: "Glovebox: Series 100: P...",
                instruction: "Custom configuration required",
                memo: "Special customer modifications",
                workList: "Client",
                shop: "Documents"
            },
            {
                woId: "DOC001-N1-1",
                released: "7/10/2025",
                dueRev: "7/25/2025",
                closed: "7/20/2025",
                priority: "Standard",
                nextShop: "Administration",
                workLeader: "Anh Tran",
                daysLate: -5,
                status: "Early",
                lastWorked: "7/20/2025",
                lastProcess: "Documentation Complete",
                firstPartNum: "DOC-123",
                firstLineQty: 0,
                description: "Documentation Update...",
                instruction: "Update technical documentation",
                memo: "Documentation revised successfully",
                workList: "Documents",
                shop: "Documents"
            }
        ];

        let filteredData = [...workOrders];
        let currentSort = { column: -1, direction: 'asc' };
        let hiddenColumns = new Set();

        function toggleColumn(columnIndex) {
            const checkbox = document.getElementById(\`col-\${columnIndex}\`);
            const headers = document.querySelectorAll('.main-table th');
            const rows = document.querySelectorAll('.main-table tr');
            
            if (checkbox.checked) {
                hiddenColumns.delete(columnIndex);
                // Show column
                headers[columnIndex].classList.remove('hidden');
                rows.forEach(row => {
                    const cell = row.children[columnIndex];
                    if (cell) cell.classList.remove('hidden');
                });
            } else {
                hiddenColumns.add(columnIndex);
                // Hide column
                headers[columnIndex].classList.add('hidden');
                rows.forEach(row => {
                    const cell = row.children[columnIndex];
                    if (cell) cell.classList.add('hidden');
                });
            }
        }

        function showContextMenu(event) {
            event.preventDefault();
            const contextMenu = document.getElementById('contextMenu');
            contextMenu.style.display = 'block';
            contextMenu.style.left = event.pageX + 'px';
            contextMenu.style.top = event.pageY + 'px';
        }

        function hideContextMenu() {
            document.getElementById('contextMenu').style.display = 'none';
        }

        function sortTable(columnIndex) {
            const columns = ['woId', 'released', 'dueRev', 'closed', 'priority', 'nextShop', 'workLeader', 'daysLate', 'status', 'lastWorked', 'lastProcess', 'firstPartNum', 'firstLineQty', 'description', 'instruction', 'memo'];
            const column = columns[columnIndex];
            
            // Toggle sort direction: asc -> desc -> off -> asc
            if (currentSort.column === columnIndex) {
                if (currentSort.direction === 'asc') {
                    currentSort.direction = 'desc';
                } else if (currentSort.direction === 'desc') {
                    currentSort.direction = 'off';
                    currentSort.column = -1;
                } else {
                    currentSort.direction = 'asc';
                }
            } else {
                currentSort.direction = 'asc';
                currentSort.column = columnIndex;
            }
            
            // Remove all existing arrows first
            document.querySelectorAll('.sort-arrow').forEach(arrow => {
                arrow.remove();
            });
            
            // If sorting is off, don't sort and don't show arrow
            if (currentSort.direction === 'off') {
                applyFilters();
                return;
            }
            
            // Sort the filtered data
            filteredData.sort((a, b) => {
                let aVal = a[column];
                let bVal = b[column];
                
                // Handle numeric columns
                if (column === 'daysLate' || column === 'firstLineQty') {
                    aVal = parseInt(aVal) || 0;
                    bVal = parseInt(bVal) || 0;
                }
                
                // Handle date columns
                if (column === 'released' || column === 'dueRev' || column === 'lastWorked') {
                    aVal = new Date(aVal || '1900-01-01').getTime();
                    bVal = new Date(bVal || '1900-01-01').getTime();
                }
                
                // String comparison
                if (typeof aVal === 'string') {
                    aVal = aVal.toLowerCase();
                    bVal = bVal.toLowerCase();
                }
                
                if (aVal < bVal) return currentSort.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return currentSort.direction === 'asc' ? 1 : -1;
                return 0;
            });
            
            // Add sort arrow to the clicked column
            const headers = document.querySelectorAll('.main-table th');
            const targetHeader = headers[columnIndex];
            
            // Add new arrow
            const arrow = document.createElement('span');
            arrow.className = \`sort-arrow active \${currentSort.direction}\`;
            targetHeader.appendChild(arrow);
            
            renderTable();
        }

        function handleQuickFilter(filterId) {
            const btn = document.getElementById(filterId);
            btn.classList.toggle('active');
            applyFilters();
        }

        function toggleStatusFilter(element) {
            const filterType = element.dataset.filter;
            
            if (element.classList.contains(\`status-\${filterType}-selected\`)) {
                // Currently selected, deselect it (make it gray)
                element.classList.remove(\`status-\${filterType}-selected\`);
                element.style.background = '#f3f4f6';
                element.style.color = '#6b7280';
                element.style.borderColor = '#d1d5db';
            } else {
                // Currently gray, select it (make it colored)
                element.classList.add(\`status-\${filterType}-selected\`);
                
                // Apply colors directly with inline styles
                if (filterType === 'early') {
                    element.style.background = 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)';
                    element.style.color = '#166534';
                    element.style.borderColor = '#16a34a';
                } else if (filterType === 'late') {
                    element.style.background = 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)';
                    element.style.color = '#991b1b';
                    element.style.borderColor = '#dc2626';
                } else if (filterType === 'on-time') {
                    element.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
                    element.style.color = '#1e40af';
                    element.style.borderColor = '#2563eb';
                }
            }
            
            applyFilters();
        }

        function initializeStatusFilters() {
            const statusFilters = document.querySelectorAll('.status-item[data-filter]');
            statusFilters.forEach(element => {
                const filterType = element.dataset.filter;
                element.classList.add(\`status-\${filterType}-selected\`);
                
                // Apply initial colors
                if (filterType === 'early') {
                    element.style.background = 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)';
                    element.style.color = '#166534';
                    element.style.borderColor = '#16a34a';
                } else if (filterType === 'late') {
                    element.style.background = 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)';
                    element.style.color = '#991b1b';
                    element.style.borderColor = '#dc2626';
                } else if (filterType === 'on-time') {
                    element.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
                    element.style.color = '#1e40af';
                    element.style.borderColor = '#2563eb';
                }
            });
        }

        function renderTable() {
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';

            // Count status types
            let earlyCount = 0;
            let lateCount = 0;
            let onTimeCount = 0;

            filteredData.forEach(order => {
                const row = document.createElement('tr');
                
                // Count statuses
                if (order.status.toLowerCase() === 'early') earlyCount++;
                else if (order.status.toLowerCase() === 'late') lateCount++;
                else onTimeCount++;

                // Create status badge
                let statusBadge = '';
                let statusClass = '';
                if (order.status.toLowerCase() === 'early') {
                    statusBadge = \`<span class="status-badge status-badge-early">Early</span>\`;
                    statusClass = 'status-early-cell';
                } else if (order.status.toLowerCase() === 'late') {
                    statusBadge = \`<span class="status-badge status-badge-late">Late</span>\`;
                    statusClass = 'status-late-cell';
                } else {
                    statusBadge = \`<span class="status-badge status-badge-on-time">On-Time</span>\`;
                    statusClass = 'status-on-time-cell';
                }

                // Color-code Red Stock and FastTrak priorities
                let priorityText = order.priority;
                if (order.priority.toLowerCase().includes('red stock') || 
                    order.priority.toLowerCase().includes('fastrak')) {
                    priorityText = \`<span class="priority-red-stock">\${order.priority}</span>\`;
                }

                row.innerHTML = \`
                    <td title="\${order.woId}">\${order.woId}</td>
                    <td title="\${order.released}">\${order.released}</td>
                    <td title="\${order.dueRev}">\${order.dueRev}</td>
                    <td title="\${order.closed}">\${order.closed}</td>
                    <td title="\${order.priority}">\${priorityText}</td>
                    <td title="\${order.nextShop}">\${order.nextShop}</td>
                    <td title="\${order.workLeader}">\${order.workLeader}</td>
                    <td class="\${statusClass}" title="\${order.daysLate}" style="text-align: right;">\${order.daysLate}</td>
                    <td title="\${order.status}">\${statusBadge}</td>
                    <td title="\${order.lastWorked}">\${order.lastWorked}</td>
                    <td title="\${order.lastProcess}">\${order.lastProcess}</td>
                    <td title="\${order.firstPartNum}">\${order.firstPartNum}</td>
                    <td title="\${order.firstLineQty}">\${order.firstLineQty}</td>
                    <td title="\${order.description}">\${order.description}</td>
                    <td title="\${order.instruction}">\${order.instruction}</td>
                    <td title="\${order.memo}">\${order.memo}</td>
                \`;
                tbody.appendChild(row);
            });

            // Add total row
            const totalRow = document.createElement('tr');
            totalRow.className = 'total-row';
            totalRow.innerHTML = \`
                <td colspan="15">Total</td>
                <td>\${filteredData.length}</td>
            \`;
            tbody.appendChild(totalRow);

            // Update counts
            document.getElementById('workOrdersCount').textContent = filteredData.length;
            document.getElementById('earlyCount').textContent = earlyCount;
            document.getElementById('lateCount').textContent = lateCount;
            document.getElementById('onTimeCount').textContent = onTimeCount;
        }

        function applyFilters() {
            filteredData = workOrders.filter(order => {
                // Date filter
                const startDate = document.getElementById('startDate').value;
                const endDate = document.getElementById('endDate').value;
                
                if (startDate || endDate) {
                    const orderReleased = new Date(order.released);
                    const filterStart = startDate ? new Date(startDate) : new Date('1900-01-01');
                    const filterEnd = endDate ? new Date(endDate) : new Date('2100-12-31');
                    
                    if (orderReleased < filterStart || orderReleased > filterEnd) {
                        return false;
                    }
                }

                // Quick filters
                const prototypesActive = document.getElementById('prototypes-btn').classList.contains('active');
                const lateECRsActive = document.getElementById('late-ecrs-btn').classList.contains('active');
                const lateRMAsActive = document.getElementById('late-rmas-btn').classList.contains('active');
                const latePrototypesActive = document.getElementById('late-prototypes-btn').classList.contains('active');
                const priorityActive = document.getElementById('priority-btn').classList.contains('active');
                
                if (prototypesActive || lateECRsActive || lateRMAsActive || latePrototypesActive || priorityActive) {
                    let quickFilterMatch = false;
                    
                    if (prototypesActive && order.priority === 'Prototype') quickFilterMatch = true;
                    if (lateECRsActive && order.priority === 'ECR' && order.status === 'Late') quickFilterMatch = true;
                    if (lateRMAsActive && order.priority === 'RMA' && order.status === 'Late') quickFilterMatch = true;
                    if (latePrototypesActive && order.priority === 'Prototype' && order.status === 'Late') quickFilterMatch = true;
                    if (priorityActive && (order.priority === 'Client' || order.priority === 'FastTrak' || order.priority === 'Red Stock')) quickFilterMatch = true;
                    
                    if (!quickFilterMatch) return false;
                }

                // Open/closed filters
                const openCheckbox = document.getElementById('open-orders');
                const closedCheckbox = document.getElementById('closed-orders');
                const isOpen = !order.closed;
                const isClosed = !!order.closed;
                
                if (openCheckbox && closedCheckbox) {
                    if (!openCheckbox.checked && isOpen) return false;
                    if (!closedCheckbox.checked && isClosed) return false;
                }

                // Status toggle filters
                const earlySelected = document.querySelector('[data-filter="early"]').classList.contains('status-early-selected');
                const lateSelected = document.querySelector('[data-filter="late"]').classList.contains('status-late-selected');
                const onTimeSelected = document.querySelector('[data-filter="on-time"]').classList.contains('status-on-time-selected');
                
                let statusAllowed = false;
                if (earlySelected && order.status.toLowerCase() === 'early') statusAllowed = true;
                if (lateSelected && order.status.toLowerCase() === 'late') statusAllowed = true;
                if (onTimeSelected && order.status.toLowerCase() === 'on-time') statusAllowed = true;
                
                if (!statusAllowed) return false;

                // Check work list filters
                const workListIds = ['approval-drawings', 'client', 'documents', 'engineering', 'internal', 'stock'];
                const workListChecked = workListIds.some(id => {
                    const checkbox = document.getElementById(id);
                    if (!checkbox || !checkbox.checked) return false;
                    
                    // Map checkbox ID to work list value
                    const mappings = {
                        'approval-drawings': 'engineering',
                        'client': 'client',
                        'documents': 'documents',
                        'engineering': 'engineering',
                        'internal': 'internal',
                        'stock': 'stock'
                    };
                    
                    const filterValue = mappings[id];
                    return order.workList && order.workList.toLowerCase() === filterValue;
                });
                
                if (!workListChecked) return false;

                // Priority filters
                const priorityKey = order.priority.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                const priorityCheckbox = document.getElementById(\`priority-\${priorityKey}\`);
                if (priorityCheckbox && !priorityCheckbox.checked) return false;

                // Check shop filters
                const shopIds = ['shop-documents', 'shop-engineering', 'shop-tronics'];
                const shopChecked = shopIds.some(id => {
                    const checkbox = document.getElementById(id);
                    if (!checkbox || !checkbox.checked) return false;
                    
                    const filterValue = id.replace('shop-', '');
                    return order.shop && order.shop.toLowerCase() === filterValue;
                });
                
                if (!shopChecked) return false;

                // Check next shop filters
                if (order.nextShop) {
                    const nextShopKey = order.nextShop.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                    const nextShopCheckbox = document.getElementById(\`next-shop-\${nextShopKey}\`);
                    if (nextShopCheckbox && !nextShopCheckbox.checked) return false;
                }

                // Check work leader filters
                if (order.workLeader) {
                    const leaderKey = order.workLeader.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    const leaderCheckbox = document.getElementById(\`leader-\${leaderKey}\`);
                    if (leaderCheckbox && !leaderCheckbox.checked) return false;
                }

                return true;
            });

            // Re-apply current sort if active
            if (currentSort.column >= 0 && currentSort.direction !== 'off') {
                sortTable(currentSort.column);
            } else {
                renderTable();
            }
        }

        function clearAllFilters() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            
            // Clear quick filter buttons
            const quickBtns = document.querySelectorAll('.quick-filter-btn');
            quickBtns.forEach(btn => btn.classList.remove('active'));
            
            // Reset status filters to all selected
            initializeStatusFilters();
            
            applyFilters();
        }

        function setupEventListeners() {
            // Checkbox filters
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:not([id^="col-"])');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });

            // Date inputs
            document.getElementById('startDate').addEventListener('change', applyFilters);
            document.getElementById('endDate').addEventListener('change', applyFilters);

            // Navigation tabs
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    document.querySelector('.nav-tab.active').classList.remove('active');
                    this.classList.add('active');
                });
            });

            // Right-click context menu for table
            const table = document.getElementById('mainTable');
            table.addEventListener('contextmenu', showContextMenu);
            
            // Hide context menu when clicking elsewhere
            document.addEventListener('click', function(event) {
                if (!event.target.closest('#contextMenu')) {
                    hideContextMenu();
                }
            });

            // Prevent context menu from closing when clicking inside it
            document.getElementById('contextMenu').addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }

        // Initialize the dashboard
        renderTable();
        setupEventListeners();
        initializeStatusFilters();
    </script>
</body>
</html>
      `,
      }}
    />
  )
}
