<template>
  <t-layout-page>
    <t-layout-page-item>
      <t-query-condition :opts="opts" @submit="conditionEnter" @handle-event="handleEvent" :btnResetBind="{ size: 'small' }" />
    </t-layout-page-item>
  </t-layout-page>
</template>

<script setup lang="ts" name="baseQueryDemo">
let state = reactive({
  queryData: {
    phonenumber: null, // 手机号码
    workshopNum: null,
    date1: null
  },
  listTypeInfo: {
    sexList: [
      {
        dictLabel: "前纺一车间",
        dictValue: "W1"
      },
      {
        dictLabel: "前纺二车间",
        dictValue: "W2"
      }
    ]
  }
});
const opts = computed(() => {
  return {
    phonenumber: {
      label: "查询的网址",
      comp: "el-input"
    },
    workshopNum: {
      label: "车间",
      comp: "el-select",
      changeEvent: "change",
      type: "select-arr",
      list: "sexList",
      listTypeInfo: state.listTypeInfo
    },
    date1: {
      label: "日期",
      comp: "el-date-picker",
      bind: {
        valueFormat: "YYYY-MM-DD"
      }
    }
  };
});
// 最终参数获取
const getQueryData = computed(() => {
  const { phonenumber, workshopNum, date1 } = toRefs(state.queryData);
  console.log(444, phonenumber.value, date1.value);
  return {
    workshopNum: workshopNum.value,
    phonenumber: phonenumber.value,
    date1: date1.value
  };
});
// 查询条件change事件
const handleEvent = (type: any, val: any) => {
  // console.log(111, type, val)
  switch (type) {
    case "date":
      console.log("获取event==date的数据", val);
      break;
  }
};
// 点击查询按钮
const conditionEnter = (data: any) => {
  console.log(1122, data);
  state.queryData = data;
  console.log("最终参数", getQueryData.value);
};
</script>
