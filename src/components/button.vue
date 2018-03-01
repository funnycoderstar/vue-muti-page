<template>
   <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
       <span><slot></slot></span>
   </button>
</template>

<script>
    import { oneOf } from '../utils/assist';

    const prefixCls = 'ivu-btn';
    export default {
        name: 'Button',
        props: {
            type: {
                validator(value) {
                    return oneOf(value, [
                        'default',
                        'info',
                        'primary',
                        'disable',
                        'warning',
                        'unselected',
                    ]);
                },
            },
            size: {
                validator(value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
            },
            htmlType: {
                default: 'button',
                validator(value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                },
            },
        },
        data() {
            return {
                showSlot: true,
            };
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !this.type,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                    },
                ];
            },
        },
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            },
        },
    
    };
</script>

<style lang="less">

</style>

    