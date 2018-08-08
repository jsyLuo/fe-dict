组件没有click事件
所以捕获不到

`<cut-col :sm="12" :md="8" :lg="8" class="my-col my-col-new" @click.native="handleAddClick">`

加上native就可以了

/////////////


Jafish 2018/7/26 19:45:59
写一个emit
你可以在组件里面
click


/////////////

加stop是什么鬼？
