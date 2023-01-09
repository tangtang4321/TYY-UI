<template>
  <a-button :type="aType" class="tyy-button" :class="'tyy-ui-button-' + type">
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
  </a-button>
</template>
<script lang="ts" setup>
import { Button as AButton } from "@arco-design/web-vue";
import { IconSun } from "@arco-design/web-vue/es/icon";
import type { PropType } from "vue";
import { computed } from "vue";

const ATypeOptions = [
  "dashed",
  "text",
  "outline",
  "primary",
  "secondary",
] as const;
const TypeOptions = [...ATypeOptions, "plain", "textPlain"] as const; // 联合类型;
type AButtonTypes = (typeof ATypeOptions)[number];
type ButtonTypes = (typeof TypeOptions)[number];
const props = defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    default: "primary",
  },
});
const aType = computed(() => {
  const propType = props.type as AButtonTypes;
  return ATypeOptions.includes(propType) ? propType : "primary";
});

const emit = defineEmits(["click"]);
</script>
