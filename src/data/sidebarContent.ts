export interface SidebarItem {
  icon?: string;
  mainTitle?: string;
  title?: string;
  firstChildren?: FirstChildren[];
}

export interface FirstChildren {
  title?: string;
  secondChildren?: SecondChildren[];
}

export interface ThirdChildren {
  title?: string;
}

export interface SecondChildren {
  title?: string;
  thirdChildren?: ThirdChildren[];
}

export interface FirstChildren {
  title?: string;
  secondChildren?: SecondChildren[];
}

export interface SidebarItem {
  icon?: string;
  mainTitle?: string;
  title?: string;
  firstChildren?: FirstChildren[];
}

export const contents: SidebarItem[] = [
  { mainTitle: "Apps" },
  {
    icon: "mdi mdi-gauge",

    title: "Dashboard",
    firstChildren: [
      { title: "Analytical" },

      { title: "eCommerce" },
      { title: "Crypto" },
    ],
  },
  {
    icon: "mdi mdi-calendar",
    title: "Calendar",
  },
  {
    icon: "mdi mdi-account-multiple-outline",
    title: "Contacts",
  },
  {
    icon: "mdi mdi-image-multiple-outline",
    title: "Gallery",
  },
  {
    icon: "mdi mdi-view-dashboard-outline",
    title: "Cards",
  },
  {
    icon: "mdi mdi-email-outline",
    title: "Mail",
  },
  {
    icon: "mdi mdi-cart-outline",
    title: "eCommerce",
    firstChildren: [
      { title: "Dashboard" },
      { title: "Shop" },
      {
        title: "Products",
      },
      { title: "Product Detail" },
      { title: "New Product" },
      { title: "My Account" },
      { title: "Cart" },
      { title: "Checkout" },
    ],
  },
  { mainTitle: "User interface" },
  {
    icon: "mdi mdi-view-compact-outline",
    title: "Layout",
    firstChildren: [
      { title: "Flexbox" },
      { title: "Blank page" },
      { title: "Page headers" },
      { title: "Sidebar right" },
      { title: "Sidebar left" },
      { title: "Tabbed page" },
    ],
  },
  {
    icon: "mdi mdi-format-color-fill",
    title: "Themes",
  },
  {
    icon: "mdi mdi-menu",
    title: "Multi level menu",
    firstChildren: [
      { title: "item one (1)" },
      { title: "item two (2)" },
      { title: "item three (3)" },
      {
        title: "item four (4)",
        secondChildren: [
          {
            title: "item one (4.1)",
            thirdChildren: [
              { title: "item one (4.1.1)" },
              { title: "item one (4.1.2)" },
              { title: "item one (4.1.3)" },
            ],
          },
          {
            title: "item one (4.2)",
            thirdChildren: [
              { title: "item two (4.2.1)" },
              { title: "item two (4.2.2)" },
              { title: "item two (4.2.3)" },
            ],
          },
        ],
      },
      { title: "item one (4-3)" },
      { title: "item one (4-4)" },
      { title: "item one(4-5)" },
      { title: "item one(4-6)" },
      { title: "item one(4-7)" },
    ],
  },
  {
    icon: "mdi mdi-folder-star-outline",
    title: "Icons",
  },
  {
    icon: "mdi mdi-translate",
    title: "Multi language",
  },
  {
    icon: "mdi mdi-format-font",
    title: "Typography",
  },
  {
    icon: "mdi mdi-help-circle-outline",
    title: "Helper Classes",
  },
  {
    icon: "mdi mdi-shape-outline",
    title: "Element",
    firstChildren: [
      { title: "Button" },
      { title: "Radio" },
      { title: "Checkbox" },
      { title: "Input" },
      { title: "Input Number" },
      { title: "Select" },
      { title: "Cascader" },
      { title: "Switch" },
      { title: "Slider" },
      { title: "Time Picker" },
      { title: "Date Picker" },
      { title: "Date Time Picker" },
      { title: "Upload" },
      { title: "Rate" },
      { title: "Color Picker" },
      { title: "Transfer" },
      { title: "Form" },
      { title: "Tag" },
      { title: "Progress" },
      { title: "Tree" },
      { title: "Pagination" },
      { title: "Badge" },
      { title: "Alert" },
      { title: "Loading" },
      { title: "Message" },
      { title: "Message Box" },
      { title: "Notification" },
      { title: "NavMenu" },
      { title: "Tabs" },
      { title: "Breadcrumb" },
      { title: "Dropdown" },
      { title: "Steps" },
      { title: "Dialog" },
      { title: "Tooltip" },
      { title: "Popover" },
      { title: "Card" },
      { title: "Carousel" },
      { title: "Collapse" },
      { title: "Timeline" },
    ],
  },
  { mainTitle: "Components" },
  {
    icon: "mdi mdi-table",
    title: "Tables",
    firstChildren: [
      { title: "Basic Table" },
      { title: "Element UI" },
      { title: "TUI Grid" },
    ],
  },
  {
    icon: "mdi mdi-map-outline",
    title: "Maps",
    firstChildren: [{ title: "Leaflet" }, { title: "Mapbox" }],
  },
  {
    icon: "mdi mdi-pencil-box-outline",
    title: "Editors",
    firstChildren: [
      { title: "Quill" },
      { title: "Pell" },
      { title: "Markdown" },
    ],
  },
  {
    icon: "mdi mdi-chart-line",
    title: "Charts",
    firstChildren: [
      { title: "Vue Chartkick" },
      { title: "Peity" },
      { title: "Echarts" },
    ],
  },
  { mainTitle: "Pages" },
  {
    icon: "mdi mdi-card-account-details-outline",
    title: "Profile",
  },
  {
    icon: "mdi mdi-lock-outline",
    title: "Authentication",
    firstChildren: [
      { title: "Login" },
      { title: "Login 2" },
      { title: "Register" },
      { title: "Forgot Password" },
    ],
  },
  {
    icon: "mdi mdi-file-document-edit-outline",
    title: "Invoice",
  },
  {
    icon: "mdi mdi-alert-octagon-outline",
    title: "404",
  },
];
