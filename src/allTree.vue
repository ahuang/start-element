<template>
    <Split style="height: 500px;">
        <SplitArea :size="15">
          <el-tree
            :data="treeData"
            node-key="id"
            default-expand-all
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
            <el-button @click="visible = true">Button</el-button>
            <el-dialog :visible.sync="visible" title="Hello world">
              <p>Try Element</p>
            </el-dialog>
            <div contenteditable="true" > 
                    跑遍了牧场又绕过了村庄,他就站在街角的旧报摊,眼睛盯著隔壁里的橱窗,一把吉他 远远欣赏,木炭一箩筐,木炭一直放,木炭剩一半,火炉烫小铁匠存钱买期望,在流汗,
                    巴洛克建筑的街道旁,一家烟雾缭绕的酒馆,波兰的吟唱诗人在弹唱,小铁匠在门外,进不去在苦恼,他的铜板还太少,他真的真的想知道,（那首来自东欧的民谣和弦到底什么调）,
                    米兰的天空刚破晓,（那马碲铁还要敲多少吉他才能买得到）,他真的真的想知道,（他不知道怎么办才好睡不着）,他将那扑满打破了,（小小愿望就快实现了他在笑）,
                    ----------------------,
                    一群嗜血的蚂蚁 被腐肉所吸引,夜曲歌谱,夜曲歌谱,我面无表情 看孤独的风景,失去你 爱恨开始分明,失去你 还有什么事好关心,当鸽子不再象征和平,我终于被提醒,
                    广场上喂食的是秃鹰,我用漂亮的押韵,形容被掠夺一空的爱情,啊 乌云开始遮蔽 夜色不干净,公园里 葬礼的回音 在漫天飞行,送你的白色玫瑰,在纯黑的环境凋零,乌鸦在树枝上诡异的很安静,
                    静静听 我黑色的大衣,想温暖你日渐冰冷的回忆,走过的 走过的 生命,啊 四周弥漫雾气,我在空旷的墓地,老去后还爱你,为你弹奏肖邦的夜曲,纪念我死去的爱情,跟夜风一样的声音,心碎的很好听,
                    手在键盘敲很轻,我给的思念很小心,你埋葬的地方叫幽冥,为你弹奏肖邦的夜曲,纪念我死去的爱情,而我为你隐姓埋名,在月光下弹琴,对你心跳的感应,还是如此温热亲近,怀念你那鲜红的唇印,
                    那些断翅的蜻蜓 散落在这森林,而我的眼睛 没有丝毫同情,失去你 泪水混浊不清,失去你 我连笑容都有阴影,风在长满青苔的屋顶,嘲笑我的伤心,像一口没有水的枯井,我用凄美的字型,描绘后悔莫及的那爱情,
                    为你弹奏肖邦的夜曲,纪念我死去的爱情,跟夜风一样的声音,心碎的很好听,手在键盘敲很轻,我给的思念很小心,你埋葬的地方叫幽冥,为你弹奏肖邦的夜曲,纪念我死去的爱情,而我为你隐姓埋名,在月光下弹琴,
                    对你心跳的感应,还是如此温热亲近,怀念你那鲜红的唇印,一群嗜血的蚂蚁 被腐肉所吸引,我面无表情 看孤独的风景,失去你 爱恨开始分明,失去你 还有什么事好关心,当鸽子不再象征和平,我终于被提醒,
                    广场上喂食的是秃鹰,我用漂亮的押韵,形容被掠夺一空的爱情       
            </div>              
        </SplitArea>
    </Split>     
</template>

<script>
export default {
    name: 'allTree',
    data () {
        return {
            visible: false,
            treeData: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: 'aaa',
                    children: [{
                    id: 9,
                    label: 'bbb'
                    }, {
                    id: 10,
                    label: 'ccc  1-1-2-long-long-long-long-long-long-long-long-end'
                    }]
                }]
                }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: 'dddd'
                }, {
                    id: 6,
                    label: 'eeee'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }      
        }    
    },
    methods: {
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
  /* 导致chrome左侧拖拽带动右侧面板文字移动的原因 */
  /* position: relative; */  
  color: green;
  font-weight: bold;
}

/* 过长的目录不隐藏效果 */
/* .split{
  overflow: visible;
}
.el-tree-node>.el-tree-node__children{
  overflow: visible;
} */

/* 拖拽时，新增的内容，可能是插件用js写的 */

</style>
