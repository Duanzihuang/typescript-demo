<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>

<script lang="ts">
import {Prop, Vue} from 'vue-property-decorator'

function Component(options:any) {
    return function (target: any) {
        // 目标是：将传入options转换为vue组件构造函数
        return Vue.extend(options)
    }
}

@Component({
    props:{
        message: {type:String,default:''}
    }
})
export default class Decor extends Vue{

}
</script>