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
                            <span style="font-size: 14px; font-weight: 500; margin-right: 4px;" id="onTimeCount">8</span>
                            <span>On-Time</span>
                        </div>
                        <div style="background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; border-radius: 14px; padding: 4px 8px; font-size: 12px; display: flex; align-items: center; height: 24px;">
                            <div style="width: 5px; height: 5px; background: #dc2626; border-radius: 50%; margin-right: 5px;"></div>
                            <span style="font-size: 14px; font-weight: 500; margin-right: 4px;" id="lateCount">4</span>
                            <span>Late</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="date-section">
                <div class="filter-title">WO Released Date</div>
                <div class="date-inputs">
                    <input type="date" value="2022-01-01" id="startDate">
                    <input type="date" value="2025-07-30" id="endDate">
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Quick Filters</div>
                <div class="quick-filters">
                    <button class="quick-filter-btn">Prototypes</button>
                    <button class="quick-filter-btn">Late ECRs</button>
                    <button class="quick-filter-btn">Late RMAs</button>
                    <button class="quick-filter-btn">Late Prototypes</button>
                    <button class="quick-filter-btn">Priority</button>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Open/Closed</div>
                <div class="status-filters">
                    <div class="status-item">
                        <input type="checkbox" id="openOrders" checked>
                        <label for="openOrders">Open</label>
                    </div>
                    <div class="status-item">
                        <input type="checkbox" id="closedOrders" checked>
                        <label for="closedOrders">Closed</label>
                    </div>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Filter by Status</div>
                <div class="filter-list">
                    <div class="filter-item">
                        <input type="checkbox" id="statusEarly" checked>
                        <label for="statusEarly">Early</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="statusOnTime" checked>
                        <label for="statusOnTime">On-Time</label>
                    </div>
                    <div class="filter-item">
                        <input type="checkbox" id="statusLate" checked>
                        <label for="statusLate">Late</label>
                    </div>
                </div>
            </div>

            <button class="clear-filters">Clear All Filters</button>
        </div>

        <div class="main-content">
            <table class="main-table">
                <thead>
                    <tr>
                        <th>WO ID #</th>
                        <th>Released</th>
                        <th>Due Rev</th>
                        <th>Priority</th>
                        <th>Work Leader</th>
                        <th>Days Late</th>
                        <th>Status</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TU13758-N2-1</td>
                        <td>7/23/2025</td>
                        <td>8/8/2025</td>
                        <td><span class="status-badge status-badge-early">R&D</span></td>
                        <td>Dishant Mehta</td>
                        <td class="status-early-cell">-9</td>
                        <td><span class="status-badge status-badge-early">Early</span></td>
                        <td>Weldnut: C1010 Steel: 3/...</td>
                    </tr>
                    <tr>
                        <td>P201378-N2-1</td>
                        <td>7/18/2025</td>
                        <td>7/24/2025</td>
                        <td><span class="status-badge status-badge-late">ECR</span></td>
                        <td>Sigfried Velasquez</td>
                        <td class="status-late-cell">6</td>
                        <td><span class="status-badge status-badge-late">Late</span></td>
                        <td>Universal MicroVac Vac...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="context-menu" id="contextMenu">
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>WO ID #</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Released</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Due Rev</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Priority</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Work Leader</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Days Late</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Status</span>
        </div>
        <div class="context-menu-item">
            <input type="checkbox" checked>
            <span>Description</span>
        </div>
    </div>

    <script>
        // Sample work orders data
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
                memo: "Due Orig first set to: 08/..."
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
                memo: "Due first set to: 09/..."
            }
        ];

        // Initialize the dashboard
        function renderTable() {
            // Table rendering logic would go here
        }

        function setupEventListeners() {
            // Event listener setup would go here
        }

        function initializeStatusFilters() {
            // Status filter initialization would go here
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
