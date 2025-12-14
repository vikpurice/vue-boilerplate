<template>
  <aside
    class="w-[60px] flex flex-col items-center py-4 border-r border-white/10"
  >
    <div
      class="w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer"
      @click="navigateTo('DashboardHome')"
    >
      <img
        src="@/assets/images/logo.png"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </div>

    <div class="flex flex-col h-full justify-start mt-6 gap-6">
      <div class="flex flex-col gap-3 mt-2">
        <button
          @click="navigateTo('DashboardHome')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('DashboardHome')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5',
          ]"
        >
          <Home class="w-5 h-5" />
        </button>
        <button
          @click="navigateTo('Projects')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('Projects')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5',
          ]"
        >
          <Layers2 class="w-5 h-5" />
        </button>
        <button
          @click="navigateTo('Navigation')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('Navigation')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5',
          ]"
        >
          <Navigation class="w-5 h-5" />
        </button>
        <button
          @click="navigateTo('Settings')"
          :class="[
            'p-2 rounded-lg cursor-pointer transition-colors',
            isActive('Settings')
              ? 'bg-white/10 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5',
          ]"
        >
          <Settings class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Bottom Icons -->
    <div class="mt-auto flex flex-col gap-4 items-center">
      <button
        class="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
      >
        <Bell class="w-5 h-5" />
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button
            class="w-8 h-8 rounded-full bg-blue-500 overflow-hidden cursor-pointer outline-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img src="https://github.com/shadcn.png" alt="User" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-56 ml-2 bg-[#1a1a1a] text-white border-[#ffffff1a] shadow-lg rounded-xl"
          side="right"
          align="end"
          :side-offset="5"
        >
          <DropdownMenuLabel class="font-normal">
            <div class="flex flex-col !space-y-2">
              <p class="text-sm font-medium leading-none">jefe boss</p>
              <p
                class="text-xs leading-none text-muted-foreground text-white/60"
              >
                jefe@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator class="bg-[#ffffff1a]" />
          <DropdownMenuGroup>
            <DropdownMenuItem
              class="focus:bg-white/10 focus:text-white cursor-pointer"
            >
              <Settings2 class="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              class="focus:bg-white/10 focus:text-white cursor-pointer"
            >
              <BookOpen class="mr-2 h-4 w-4" />
              <span>Docs</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator class="bg-[#ffffff1a]" />
          <DropdownMenuItem
            @click="handleLogout"
            class="text-red-400 focus:text-red-400 focus:bg-red-900/20 cursor-pointer"
          >
            <LogOut class="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {
  Home,
  Navigation,
  Settings,
  Bell,
  Layers2,
  LogOut,
  Settings2,
  BookOpen,
} from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const route = useRoute();
const router = useRouter();

const navigateTo = (name: string) => {
  router.push({ name });
};

const isActive = (name: string) => {
  return route.name === name;
};

const handleLogout = () => {
  localStorage.removeItem("logged_in");
  router.push({ name: "Auth" });
};
</script>
