# Overview

## SUMMARY OF IMPROVEMENTS

- `SideNav` and `MainLayout` have been optimized for better performance.
- `SideNav` dynamically resizes based on screen size.
- `MainLayout` content resizes based on `SideNav` state.
- New page routes added and wrapped in `MainLayout`.
- Integrated Zustand for `SideNav` state management.
- Refactored `.prettierrc` for better formatting and code quality.
- Integrated Husky for better formatting and code quality.

## TASKS COMPLETED

### MainLayout (`main-layout.tsx`)

- Wrapped all page components inside `MainLayout` for a consistent UI structure.
- Dynamically adjusted `<main>` content width based on the SideNav state.
- Integrated `useSidenav()` to detect and apply responsive SideNav widths.
- Ensured smooth transitions when expanding/collapsing the SideNav.

### SideNav (`side-nav.tsx`)

- Added `menuItemsFooter` to position footer items at the bottom of the SideNav.
- Ensured the SideNav properly expands (`w-[260px]`) and collapses (`w-[72px]`) based on state.
- Used `flex flex-col` and `mt-auto` to align footer menu items correctly.
- Passed `menuItems` and `menuItemsFooter` as props to ensure modularity.
- Updated active route highlighting using `usePathname()`.
- Used Zustand (`useSidenavStore`) for global state management.

### Zustand Store (`useSidenavStore.ts`) (new)

- Implemented global SideNav state with Zustand for managing expansion/collapse.
- Created `setDevice()` to detect screen width and update `device`, `isExpanded`, and `width`.
- Used `toggleSidenav()` to smoothly switch between open and collapsed states.
- Logged state changes for debugging.

### Custom Hook (`useSidenav.ts`) (new)

- Created a custom hook to detect and update SideNav state based on window width.
- Runs `setDevice()` on mount and listens for resize events to update state dynamically.

### Layout Wrapper (`layout.tsx`) (new)

- Centralized layout for all pages using `MainLayout`.
- Wrapped the entire app structure for consistent UX across routes.

### New Pages (`pages/`)

- Created new route directories for all menu items with `page.tsx` files.
- Wrapped all pages inside `MainLayout` to ensure a consistent layout structure.
- Applied dynamic content width adjustments based on the SideNav state.

### chore: Install Zustand for state management

- Added `zustand` as a dependency for handling global SideNav state.
- Removed unnecessary local state in `side-nav.tsx` and `main-layout.tsx`.
- Improved performance by reducing unnecessary re-renders.

### fix: Resolve missing props issue in `side-nav.tsx`

- Passed `menuItems` and `menuItemsFooter` explicitly to prevent TypeScript errors.
- Ensured correct TypeScript typings for `SideNavProps`.

### optimize: SideNav component

- Memoized `renderMenuItem` function to prevent unnecessary re-renders.
- Consolidated rendering logic for main and footer menu items.
- Improved code structure and removed redundant logic.
- Enhanced type safety with explicit `React.FC` typing.
- Adjusted import order for better organization.

### optimize: MainLayout component

- Improved code structure and removed redundant logic.
- Enhanced type safety with explicit `React.FC` typing.
- Adjusted import order for better organization.
- Consolidated styling with Tailwind CSS classes.
- Improved responsiveness with dynamic width calculation.

### formatting: Update Prettier config

- Modified `.prettierrc` to remove empty lines between imports.
- Added `importOrderGroupNamespaceSpecifiers` and `importOrderParserPlugins`.
- Adjusted `importOrder` to prioritize React and Next.js imports.
- Updated import statements across the project for consistency.
- Improved code readability with more compact import blocks.