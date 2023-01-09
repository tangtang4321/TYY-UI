<template>
  <a-button :type="type" class="tyy-button">
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <template #default>
      <icon-sun />
      <slot name="default"></slot>
    </template>
  </a-button>
</template>
<script lang="ts" setup>
import { Button as AButton } from "@arco-design/web-vue";
import { IconSun } from "@arco-design/web-vue/es/icon";
import type { PropType } from "vue";

type TypeOptions = "dashed" | "text" | "outline" | "primary" | "secondary"; // 联合类型;

const props = defineProps({
  type: { type: String as PropType<TypeOptions>, default: "primary" },
});
const emit = defineEmits(["click"]);
</script>
