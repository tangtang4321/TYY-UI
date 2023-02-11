<template>
  <div class="tyy-table-layout">
    <div class="tyy-table-layout-header">
      <div class="tyy-table-layout-header-left">
        <slot name="headerLeft"> </slot>
      </div>
      <div class="tyy-table-layout-header-right">
        <slot name="headerRight"> </slot>
      </div>
    </div>
    <div class="tyy-table-layout-body">
      <slot name="default"> </slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
