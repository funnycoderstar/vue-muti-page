<template>
    <div :class="classes">
        <label :class="[prefixCls + '-label']" :for="labelFor" :style="lableStyles" v-if="lable || $slots.lable">
            <slot name="lable">{{ label }}</slot>
        </label>
        <div :class="[prefixCls] + '-content'" :style="contentStyles">
            <slot></slot>
            <transition name="fade">
                <div :class="[prefixCls] + '-error-tip'" v-if="validateState === 'error' && showMessage && form.showMessage">
                    {{ validateMessage }}
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import AsyncValidator from 'async-validator';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-form-item';

    export default {
        name: 'FormItem',
        mixins: [Emitter],
        props: {
            lable: {
                type: String,
                default: '',
            },
            lableWidth: {
                type: Number,
            },
            prop: {
                type: String,
            },
            required: {
                type: Boolean,
                default: false,
            },
            rules: {
                type: [Object, Array],
            },
            error: {
                type: String,
            },
            validateStatus: {
                type: Boolean,
            },
            showMessage: {
                type: Boolean,
                default: true,
            },
            lableFor: {
                type: String,
            },
        },
        data() {
            return {
                prefixCls,
                isRequired: false,
                validateStatus: '',
                validateDisabled: false,
                validator: {},
            };
        },
        watch: {
            error(val) {
                this.validateMessage = val;
                this.validateStatus = val === '' ? '' : 'error';
            },
            validateStatus(val) {
                this.validateStatus = val;
            },
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-required`]: this.required || this.isRequired,
                        [`${prefixCls}-error`]: this.validateState === 'error',
                        [`${prefixCls}-validating`]: this.validateState === 'validating',
                    },
                ];
            },
            form() {
                let parent = this.$parent;
                while (parent.$options.name !== 'iForm') {
                    parent = parent.$parent;
                }
                return parent;
            },
            filedValue: {
                cache: false,
                get() {
                    const model = this.form.model;
                    if (!model || !this.prop) {
                        return;
                    }
                    let path = this.prop;
                    if (path.indexOf(':') !== -1) {
                        path = path.replace(/:/, '.');
                    }
                    return getPropByPath(model, path).v;
                },
            },
        },
    };

</script>
