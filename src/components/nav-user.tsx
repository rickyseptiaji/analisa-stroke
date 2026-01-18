"use client";

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/auth.store";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export function NavUser({ user }: { user: any }) {
  const { isMobile } = useSidebar();
  const router = useRouter();
  const { setTheme } = useTheme();
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    useAuthStore.getState().logout();
    router.push("/login");
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Image
                src="/assets/image/puskesmas-seeklogo.png"
                alt="Logo"
                width={25}
                height={10}
              />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user?.nama}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {user?.username}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Image
                src="/assets/image/puskesmas-seeklogo.png"
                alt="Logo"
                width={20}
                height={10}
              />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.nama}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user?.username}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {/* <DropdownMenuItem>
                <IconUserCircle />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconNotification />
                Notifications
              </DropdownMenuItem> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <DropdownMenuItem className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 dark:hidden" />
                      <Moon className="h-4 w-4 hidden dark:block" />
                      <span>Theme</span>
                    </div>
                    <IconDotsVertical className="h-4 w-4 text-muted-foreground" />
                  </DropdownMenuItem>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                logout();
              }}
            >
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
