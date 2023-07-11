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
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material";

export const BASE_API_ROUTE = "https://assignment.abrnoc.com";
export const SideBarWidth = 220;
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

export const operatingSystemsLogos = {
  debian:
    "https://w7.pngwing.com/pngs/668/952/png-transparent-debian-arch-linux-computer-icons-desktop-linux-spiral-logo-magenta-thumbnail.png",
  Fedora:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fedora_icon_%282021%29.svg/512px-Fedora_icon_%282021%29.svg.png?20220308003156",
  Rocky:
    "https://seeklogo.com/images/R/rocky-linux-logo-88E2F3FB8C-seeklogo.com.png",
  CentOS:
    "https://seeklogo.com/images/C/centos-logo-494F57D973-seeklogo.com.png",
};

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(47,56,87)",
    color: "white",
    fontSize: "15px",
    borderRadius: "5px",
  },
}));
