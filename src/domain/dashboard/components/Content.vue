<template>
  <div class="flex-1 p-6 flex flex-col overflow-y-auto">
    <!-- Search & Actions -->
    <div class="flex items-center justify-between mb-8 gap-4">
      <div class="relative flex-1 max-w-md">
        <Search
          class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
        />
        <Input
          v-model="searchQuery"
          placeholder="Search tasks..."
          class="w-full h-[2.5rem] pl-[2.5rem] bg-white/5 border-white/10 rounded-[1rem] focus:bg-white/10 transition-colors text-sm"
        />
      </div>
      <Button
        @click="createNewTask"
        class="rounded-[1rem] bg-white text-black hover:bg-white/90 h-[2rem] px-3"
      >
        <Plus class="w-5 h-5 mr-0" />
        New Task
      </Button>
    </div>

    <!-- Content -->
    <div
      v-if="filteredTasks.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div
        v-for="task in filteredTasks"
        :key="task.id"
        class="group bg-white/5 border border-white/10 rounded-[1rem] p-5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 cursor-pointer flex flex-col gap-3"
      >
        <div class="flex items-start justify-between">
          <div class="flex flex-col gap-3">
            <span
              class="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded-md w-fit"
              >{{ task.category }}</span
            >
            <h3
              class="font-semibold text-lg leading-tight group-hover:text-blue-400 transition-colors mt-1"
            >
              {{ task.title }}
            </h3>
          </div>
          <div
            :class="getStatusColor(task.status)"
            class="w-2 h-2 rounded-full ring-4 ring-white/5"
          ></div>
        </div>

        <p class="text-white/60 text-sm line-clamp-2 leading-relaxed">
          {{ task.description }}
        </p>

        <div class="mt-auto pt-4 flex items-center justify-between">
          <div class="flex -space-x-2">
            <div
              v-for="i in 3"
              :key="i"
              class="w-7 h-7 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center text-[10px] text-white/50 font-medium"
            >
              {{ String.fromCharCode(64 + i) }}
            </div>
          </div>
          <span
            class="text-xs text-white/40 font-medium bg-white/5 px-2 py-1 rounded-md"
            >{{ task.date }}</span
          >
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500"
    >
      <div
        class="w-24 h-24 bg-neutral-800 from-white/5 to-transparent rounded-full flex items-center justify-center mb-6 border border-white/5"
      >
        <ClipboardList class="w-10 h-10 text-white/80" />
      </div>
      <h2 class="!text-[22px] font-semibold">No tasks found</h2>
      <p class="text-white/50 max-w-sm !my-[0.75rem] leading-relaxed">
        You haven't created any tasks yet. Start by creating a new task to track
        your progress.
      </p>
      <Button
        variant="secondary"
        @click="createNewTask"
        class="rounded-[1rem] bg-white/10 hover:bg-white/20 text-white border-0 h-[2.5rem] px-6"
      >
        Create your first task
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Search, Plus, ClipboardList } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const searchQuery = ref("");

const tasks = ref([
  {
    id: 1,
    title: "Redesign Dashboard",
    description:
      "Implement a new 3-column layout with sidebar, header, and main content area. Focus on dark mode aesthetics.",
    category: "Design",
    status: "in-progress",
    date: "Today",
  },
  {
    id: 2,
    title: "Fix Auth Validation",
    description:
      "The email validation regex is too strict. We need to update it to allow newer TLDs.",
    category: "Bug",
    status: "todo",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Update Dependencies",
    description:
      "Audit and update all npm packages to their latest stable versions to ensure security.",
    category: "Maintenance",
    status: "done",
    date: "Dec 5",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Connect the frontend dashboard to the new REST API endpoints for fetching real-time data.",
    category: "Backend",
    status: "todo",
    date: "Dec 4",
  },
  {
    id: 5,
    title: "Mobile Responsiveness",
    description:
      "Ensure the dashboard looks good on mobile devices. Fix the sidebar collapsing issue.",
    category: "Frontend",
    status: "in-progress",
    date: "Dec 3",
  },
]);

const filteredTasks = computed(() => {
  if (!searchQuery.value) return tasks.value;
  const query = searchQuery.value.toLowerCase();
  return tasks.value.filter(
    (task) =>
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query) ||
      task.category.toLowerCase().includes(query)
  );
});

const getStatusColor = (status: string) => {
  switch (status) {
    case "in-progress":
      return "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]";
    case "done":
      return "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]";
    default:
      return "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]";
  }
};

const createNewTask = () => {
  // Placeholder for create task logic
  console.log("Create new task");
};
</script>
