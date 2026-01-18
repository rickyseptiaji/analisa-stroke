"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import useAuthStore from "@/store/auth.store";
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Pasien",
      url: "/pasien",
      icon: IconListDetails,
      // items: [
      //   { title: "Data Pasien", url: "/pasien" },
      //   { title: "Tambah Pasien", url: "/pasien/create" },
      // ],
    },
    {
      title: "Penyakit & Solusi",
      url: "#",
      icon: IconChartBar,
      items: [
        { title: "Penyakit", url: "/penyakit" },
        { title: "Solusi", url: "/solusi" },
      ],
    },
    {
      title: "Gejala",
      url: "/gejala",
      icon: IconChartBar,
      // items: [
      //   { title: "Data Gejala", url: "#" },
      //   { title: "Tambah Gejala", url: "#" },
      // ],
    },

    {
      title: "Pengetahuan",
      url: "/pengetahuan",
      icon: IconChartBar,
      // items: [
      //   { title: "Data Pengetahuan", url: "#" },
      //   { title: "Tambah Pengetahuan", url: "#" },
      // ],
    },
    // {
    //   title: "Aturan",
    //   url: "#",
    //   icon: IconChartBar,
    //   items: [
    //     { title: "Penyakit", url: "/rule/penyakit" },
    //     { title: "Gejala", url: "/rule/gejala" },
    //   ],
    // },
    {
      title: "Konsultasi",
      url: "/konsultasi",
      icon: IconChartBar,
      // items: [{ title: "Diagnosa Gejala", url: "#" }],
    },
    // {
    //   title: "Riwayat Pasien",
    //   url: "#",
    //   icon: IconFolder,
    // },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthStore();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <Image
                  src="/assets/image/puskesmas-seeklogo.png"
                  alt="Logo"
                  width={25}
                  height={50}
                />
                <span className="text-base font-semibold">Puskesmas</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
