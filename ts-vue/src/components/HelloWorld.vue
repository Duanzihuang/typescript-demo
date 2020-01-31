<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    英雄排行榜:
    <ul>
      <li
        style="display:block;"
        v-for="item in persons"
        :key="item.id"
      >{{item.name}} --- {{item.age}} --- {{item.address}}</li>
    </ul>
    <div>
      <button @click="addHero">添加英雄</button>
    </div>
    <div>英雄总数:{{totalCount}}</div>
    <hr />坏人排行榜
    <ul>
      <li
        style="display:block;"
        v-for="item in badMans"
        :key="item.id"
      >{{item.name}} --- {{item.age}} --- {{item.address}}</li>
    </ul>美女排行榜
    <ul>
      <li
        style="display:block;"
        v-for="item in girls"
        :key="item.id"
      >{{item.name}} --- {{item.skill}}</li>
    </ul>
    <button @click="testEmit">测试Emit</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import axios from "axios";

interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
}

interface Girl {
  id: number;
  name: string;
  skill: string;
}

interface Result<T> {
  data: T;
}

function getData<T>(): Result<T> {
  const badMans: any = [
    { id: 2001, name: "欧阳锋", age: 111, address: "西域" },
    { id: 2002, name: "成昆", age: 111, address: "光明顶" }
  ];

  return { data: badMans };
}

function getData2<T>(): Promise<Result<T>> {
  const badMans: any = [
    { id: 2001, name: "玄冥二老", age: 111, address: "未知" },
    { id: 2002, name: "金轮法王", age: 111, address: "草原" }
  ];

  return Promise.resolve<Result<T>>({ data: badMans });
}

@Component
export default class HelloWorld extends Vue {
  @Prop({type:String,required:true})
  private msg!: string

  // 属性相当于data选项
  private persons: Person[] = [
    { id: 1001, name: "张三丰", age: 666, address: "武当山" },
    { id: 1002, name: "张无忌", age: 555, address: "光明顶" }
  ];

  private badMans: Person[] = [];

  private girls: Girl[] = [];

  private addHero() {
    this.persons.push({
      id: 1003,
      name: "段誉",
      age: 777,
      address: "大理"
    });
  }

  constructor() {
    super();

    // this.badMans = getData<Person[]>().data;
  }

  async mounted() {
    this.badMans = (await getData2<Person[]>()).data;

    const res = await axios.get<Girl[]>("/api/girls");

    this.girls = res.data;
  }

  get totalCount() {
    return this.persons.length;
  }

  @Watch('msg',{deep:true})
  onMsgChange(val:string,oldVal:string){
    
  }

  @Emit('sendparent')
  private testEmit(){
    return '这是传递给父组件的值666'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
