<template>
    <Split style="height: 500px;">
        <SplitArea :size="15">
            <el-button @click="refreshTree">刷新树</el-button>
          <el-tree
            node-key="id"
            lazy
            :props="defaultProps"
            :load="loadNode"
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            @node-click="handleNodeClick"
            @node-contextmenu="handleNodeRightClick"            
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag">
          </el-tree>
        </SplitArea>
        <SplitArea :size="85">
            <div contenteditable="true" > 
                <p>
                    现状: 刷新页面可以刷新树结构 <br>
                    期望：点击刷新按钮也可以刷新树结构
                </p>
                <h2>占位文字</h2> 
                <span style="color:gray">
                在雨中漫步,蓝色街灯渐露,相对望,无声紧拥抱着,为了找往日,寻温馨的往日,消失了,任雨洒我面,难分水点泪痕,心更乱,愁丝绕千百段,骤变的态度,无心伤她说话,收不了,
                冷雨夜我在你身边,盼望你会知,可知道我的心,比当初已改变,只牵强地相处,冷雨夜我不想归家,怕望你背影,只苦笑望雨点,须知要说清楚,可惜我没胆试,在雨中漫步,
                尝水中的味道,仿似是,情此刻的尽时,未了解结合,留低思忆片段,不经意,冷雨夜我在你身边,盼望你会知,可知道我的心,比当初已改变,只牵强地相处,冷雨夜我不想归家,怕望你背影,
                只苦笑望雨点,须知要说清楚,可惜我没胆试,冷雨夜我在你身边,盼望你会知,可知道我的心,比当初已改变,只牵强地相处,冷雨夜我不想归家,怕望你背影,
                只苦笑望雨点,须知要说清楚,可惜我没胆试
                ----------------------,
                前面是哪方,谁伴我闯荡,沿路没有指引,若我走上又是窄巷,寻梦像扑火,谁共我疯狂,长夜渐觉冰冻,但我只有尽量去躲,几多天真的理想,几多找到是颓丧,沉默去迎失望,
                几多心中创伤,只有淡忘,从前话说要如何,其实你与昨日的我,活到今天变化甚多,只有顽强,明日路纵会更彷徨,疲倦惯了再没感觉,别再可惜计较什么,Wo,谁愿夜探访,留在我身旁,
                陪伴渡过黑暗,为我驱散寂寞痛楚,寻觅没结果,谁伴我闯荡,期望暴雨飘去,便会冲破命运困锁,几多天真的理想,几多找到是颓丧,沉默去迎失望,几多心中创伤,只有淡忘,从前话说要如何,
                其实你与昨日的我,活到今天变化甚多,只有顽强,明日路纵会更彷徨,疲倦惯了再没感觉,别再可惜计较什么,只有淡忘,从前话说要如何,其实你与昨日的我,活到今天变化甚多,只有顽强,
                明日路纵会更彷徨,疲倦惯了再没感觉,别再可惜计较什么,始终上路过    
                </span>     
            </div>              
        </SplitArea>
    </Split>     
</template>

<script>
export default {
    name: 'lazyTree',
    data () {
        return {
            visible: false,
            defaultProps: {
                children: 'children',
                label: 'label',
                isLeaf: 'leaf'
            }
        }
    },
    methods: {
        refreshTree(){
            console.log('refreshTree');
        },
        // 懒加载树
        loadNode(node, resolve) {
            console.log('loadNode: ', node, node.level);
            if (node.level === 0) { // level 0
                return resolve([{ label: `随机数${((Math.random())*100).toFixed(2)}` }]);
            }else if(node.level === 1){    // level 1
                setTimeout(() => {
                    const data = [{
                        label: 'good',
                        leaf: true
                    }, {
                        label: 'ok'
                    }];
                    resolve(data);
                }, 500);
            }else if(node.level === 2){
                setTimeout(() => {
                    const data = [{
                        label: 'over?',
                        leaf: true
                    }, {
                        label: 'yes',
                        leaf: true
                    }];
                    resolve(data);
                }, 500);
            }else {
                return resolve([]);
            }
        },     

        handleDragStart(node, ev) {
            console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
        },
        allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === '二级 3-1') {
            return type !== 'inner';
            } else {
            return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        },
        handleNodeClick(data,node,com){
            console.log('左点击', node, data.label);
        },
        handleNodeRightClick(event,data,node,com){
            console.log('右点击', node, data.label);
        }
    }      
}
</script>


<style>
.el-tree-node__label{
  color: orange;
  font-weight: bold;
}


</style>
