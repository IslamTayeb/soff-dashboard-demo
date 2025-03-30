"use client"

import { useState } from "react"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"

// Header data
const headerData = {
  title: "Supply Chain Operations Report",
  name: "John Doe",
  position: "Logistics Director",
  description: "Quarterly supply chain performance analysis and inventory management insights",
}

// Supplier reports data
const supplierReports = [
  {
    id: 1,
    title: "Raw Materials Inventory Status",
    date: "March 15, 2025",
    summary: "Current inventory levels and procurement forecasts for Q2 2025",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies.",
    highlightsTitle: "📦 Inventory Highlights:",
    highlights: [
      "Steel components at 78% capacity (15% above safety stock)",
      "Electronic components at 42% capacity (critical threshold)",
      "Packaging materials at 65% capacity (adequate)",
    ],
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cta: "View Inventory Details",
    notes: "Recommended action: Expedite electronic component orders from Supplier XYZ",
    preparedBy: "Inventory Management Team",
  },
  {
    id: 2,
    title: "Supplier Performance Review",
    date: "February 28, 2025",
    summary: "Quality, delivery, and cost performance metrics for top 10 suppliers",
    intro: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    highlightsTitle: "Supplier Ratings:",
    highlights: [
      "On-time delivery rate: 87% (3% improvement)",
      "Quality acceptance rate: 98.5% (1.2% improvement)",
      "Cost variance: +2.3% against forecast",
    ],
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    cta: "Review Supplier Details",
    notes: "Recommended action: Schedule performance review with Suppliers A and C",
    preparedBy: "Procurement Team",
  },
  {
    id: 3,
    title: "Distribution Center Efficiency",
    date: "January 10, 2025",
    summary: "Operational metrics for regional distribution centers",
    intro: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    highlightsTitle: "Distribution Metrics:",
    highlights: [
      "Order fulfillment rate: 94.8% (target: 95%)",
      "Average picking time: 3.2 minutes per order (5% below target)",
      "Shipping accuracy: 99.3% (0.2% above target)",
    ],
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    cta: "View Distribution Details",
    notes: "Recommended action: Implement new picking route optimization at Northeast DC",
    preparedBy: "Logistics Operations Team",
  },
]

// Analytics data
const analyticsData = {
  metrics: [
    {
      title: "Inventory Turnover",
      value: "4.8",
      change: "+0.3",
      isPositive: true,
    },
    {
      title: "Order Fulfillment",
      value: "94.6%",
      change: "+1.2%",
      isPositive: true,
    },
    {
      title: "Lead Time",
      value: "12.3 days",
      change: "-0.8 days",
      isPositive: true,
    },
  ],
  supplierPerformance: [
    {
      name: "Supplier A (Electronics)",
      value: "92%",
    },
    {
      name: "Supplier B (Raw Materials)",
      value: "87%",
    },
    {
      name: "Supplier C (Packaging)",
      value: "78%",
    },
    {
      name: "Supplier D (Components)",
      value: "95%",
    },
  ],
  inventoryStatus: [
    {
      category: "Raw Materials",
      value: "78%",
    },
    {
      category: "Work in Progress",
      value: "45%",
    },
    {
      category: "Finished Goods",
      value: "62%",
    },
  ],
  regionalPerformance: [
    {
      region: "North America",
      value: "92%",
    },
    {
      region: "Europe",
      value: "88%",
    },
    {
      region: "Asia Pacific",
      value: "76%",
    },
    {
      region: "Latin America",
      value: "82%",
    },
  ],
}

export default function SupplyChainDashboard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex items-center justify-center min-h-[100vh] w-full">
        <Button onClick={() => setOpen(true)} size="lg" className="text-lg">
          <Truck className="mr-2 h-5 w-5" />
          Open Supply Chain Dashboard
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[90vw] max-h-[90vh] p-0">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl">{headerData.title}</DialogTitle>
              <DialogDescription className="text-lg">
                {headerData.name}, {headerData.position}
              </DialogDescription>
              <p className="text-muted-foreground mt-2">{headerData.description}</p>
            </DialogHeader>

            <div className="mt-6 h-[calc(90vh-180px)]">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={40} minSize={30} maxSize={60}>
                  <div className="h-full rounded-md p-4">
                    <ScrollArea className="h-full">
                      <div className="space-y-4">
                        {supplierReports.map((report) => (
                          <div key={report.id} className="rounded-md p-4 bg-muted/30">
                            <h3 className="text-lg font-semibold">{report.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">Date: {report.date}</p>
                            <p className="text-sm font-medium mb-4">{report.summary}</p>
                            <div className="space-y-2">
                              <p>{report.intro}</p>
                              <div className="my-4 bg-primary/10 p-3 rounded-md">
                                <p className="font-medium">{report.highlightsTitle}</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                  {report.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                  ))}
                                </ul>
                              </div>
                              <p>{report.body}</p>
                              <div className="my-4 text-center">
                                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                                  {report.cta}
                                </div>
                              </div>
                              <p className="text-sm italic">{report.notes}</p>
                              <p className="mt-4 text-sm text-muted-foreground">Prepared by: {report.preparedBy}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </ResizablePanel>

                <ResizableHandle withHandle />

                <ResizablePanel defaultSize={60} minSize={40} maxSize={70}>
                  <div className="h-full rounded-md p-4">
                    <ScrollArea className="h-full">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {analyticsData.metrics.map((metric, index) => (
                            <div key={index} className="bg-muted/30 p-4 rounded-md">
                              <h4 className="text-sm font-medium text-muted-foreground">{metric.title}</h4>
                              <p className="text-2xl font-bold">{metric.value}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                <span className={metric.isPositive ? "text-green-500" : "text-red-500"}>
                                  {metric.isPositive ? "↑" : "↓"} {metric.change}
                                </span>{" "}
                                from last quarter
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-md p-4">
                          <h3 className="text-lg font-medium mb-4">Supplier Performance</h3>
                          <div className="space-y-4">
                            {analyticsData.supplierPerformance.map((supplier, index) => (
                              <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">{supplier.name}</span>
                                  <span className="text-sm font-medium">{supplier.value}</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div className="bg-primary h-2 rounded-full" style={{ width: supplier.value }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-md p-4">
                          <h3 className="text-lg font-medium mb-4">Inventory Status</h3>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                              <span>Category</span>
                              <span>Capacity</span>
                            </div>
                            {analyticsData.inventoryStatus.map((item, index) => (
                              <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">{item.category}</span>
                                  <span className="text-sm font-medium">{item.value}</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div className="bg-primary h-2 rounded-full" style={{ width: item.value }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-md p-4">
                          <h3 className="text-lg font-medium mb-4">Regional Performance</h3>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              {analyticsData.regionalPerformance.map((region, index) => (
                                <div key={index} className="space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm">{region.region}</span>
                                    <span className="text-sm font-medium">{region.value}</span>
                                  </div>
                                  <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: region.value }}></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
