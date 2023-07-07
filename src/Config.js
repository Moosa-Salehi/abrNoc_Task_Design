import {
  DashboardOutlined,
  LocalHospitalOutlined,
  ContentCopyOutlined,
  VpnKeyOutlined,
  DnsOutlined,
  AttachMoneyOutlined,
  WifiOutlined,
  DescriptionOutlined,
  HeadphonesOutlined,
  HelpOutlineOutlined,
  LooksOneOutlined,
  LooksTwoOutlined,
  Looks3Outlined,
} from "@mui/icons-material";

export const BASE_API_ROUTE = "https://assignment.abrnoc.com";
export const SideBarWidth = 260;
export const SideBarOptions = [
  { name: "Dashboard", icon: DashboardOutlined, firstOption: true },
  { name: "Instances", icon: LocalHospitalOutlined },
  { name: "Snapshots", icon: ContentCopyOutlined },
  { name: "SSH Keys", icon: VpnKeyOutlined },
  { name: "Volume", icon: DnsOutlined, disabled: true, endOfGroup: true },
  {
    name: "Billing",
    icon: AttachMoneyOutlined,
    children: [
      { name: "item 1", icon: LooksOneOutlined },
      { name: "item 2", icon: LooksTwoOutlined },
      { name: "item 3", icon: Looks3Outlined },
    ],
  },
  { name: "Networking", icon: WifiOutlined },
  { name: "Report", icon: DescriptionOutlined },
  { name: "Support", icon: HeadphonesOutlined, bordered: true, spaceUp: true },
  { name: "Help", icon: HelpOutlineOutlined, bordered: true },
];
