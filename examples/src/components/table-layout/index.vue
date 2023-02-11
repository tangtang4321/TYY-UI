<template>
  <tyy-table-layout style="height: 500px">
    <template #headerLeft>
      <tyy-button>新增</tyy-button>
    </template>
    <template #headerRight>
      <tyy-button type="text">
        <template #icon><icon-download /> </template>
      </tyy-button>
    </template>
    <a-table :columns="columns" :data="data" />
  </tyy-table-layout>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Table as ATable } from "@arco-design/web-vue";
import { IconDownload } from "@arco-design/web-vue/es/icon";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const data = reactive([
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
]);
</script>
