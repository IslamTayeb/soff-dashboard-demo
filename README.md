# Supply Chain Dashboard
This project is a Next.js application visualizing supply chain data through an interactive dashboard.  The dashboard features resizable panels for customizable viewing and includes various charts and reports.

## Resizeability
This dashboard utilizes the `react-resizable-panels` library to implement resizable panels.  The `<ResizablePanelGroup>` component, found in `code/components/ui/resizable.tsx`, acts as a container for the resizable panels.  These panels, defined using `<ResizablePanel>`, allow users to adjust their horizontal sizes via a draggable handle (`<ResizableHandle>`).  The `direction="horizontal"` prop in `<ResizablePanelGroup>` specifies the resizing orientation.  The application renders two panels side-by-side; the left showing supplier reports and the right displaying analytics data.  Each panel uses a `<ScrollArea>` component from `code/components/ui/scroll-area.tsx` to enable scrolling within its contents if they exceed the panel's size.  The minimum and maximum sizes for each panel are set using `minSize` and `maxSize` props within `<ResizablePanel>`, ensuring responsive behavior and preventing panels from becoming too small or large.

## Configuration
The project uses a `components.json` file to configure Shadcn UI components, specifying styling, component generation options, and aliases. The `next.config.js` file allows for Next.js specific configurations.  Tailwind CSS configuration is managed via the `tailwind.config.js` file (not explicitly shown but implied by the `components.json` and usage).

*README.md was made with [Etchr](https://etchr.dev)*