window.dom={
    style(node,name,value){//用于修改style
        if(arguments.length===3){
            node.style[name]=value//dom.style(div,'color','red')
        }else if(arguments.length===2){
            if(typeof name==='string'){
                return node.style[name]//dom.style(div,'color')用于读取属性值
            }else if(name instanceof Object){//判断name是否是一个对象
                const object= name
                for(let key in object){
                    node.style[key]=object[key]//dom.style(div,{color:'red'})
                }
            }
        }
    },
    find(selector,scope){//用于获取标签或标签们
        return (scope||document).querySelectorAll(selector)
    },
    each(nodeList,fn){//用于遍历所有节点
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    }
};