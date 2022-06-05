<template>
  <div class="form-main">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="`${item.label}:`"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- 普通input输入-->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <!--选项列表-->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.selectOptions"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <!--日期选择器-->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IFormItem } from '@/base-ui/form';

export default defineComponent({
  name: 'Form',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '90px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      })
    }
  },
  emit: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });
    watch(
      formData,
      (newValue: any) => {
        console.log(newValue);
        emit('update:modelValue', newValue);
      },
      {
        deep: true
      }
    );
    //监听修改值事件
    // const handleValueChange = (value: any, field: string) => {
    //   emit('update:modelValue', { ...props.modelValue, [field]: value });
    // };
    return {
      formData
      // handleValueChange
    };
  }
});
</script>

<style scoped lang="less">
.form-main {
  padding-top: 18px;
  border-radius: 6px;
  background-color: #fff;
}
</style>
