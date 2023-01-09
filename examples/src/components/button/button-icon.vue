<template>
  <tyy-button>
    <template #icon> <icon-plus /> </template>
  </tyy-button>
  <tyy-button shape="round">
    <template #icon> <icon-delete /> </template>
  </tyy-button>
  <tyy-button type="outline"> <icon-caret-left />上一页 </tyy-button>
  <tyy-button type="outline" shape="round">
    下一页
    <icon-caret-right />
  </tyy-button>
  <tyy-button type="text">
    <template #icon> <icon-download /> </template>
  </tyy-button>
  <tyy-button type="text">
    <template #icon> <icon-filter /> </template>
  </tyy-button>
</template>
<script lang="ts" setup>
import {
  IconPlus,
  IconDelete,
  IconCaretRight,
  IconCaretLeft,
  IconDownload,
  IconFilter,
} from "@arco-design/web-vue/es/icon";
</script>
