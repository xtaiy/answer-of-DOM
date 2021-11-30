window.dom = {
    style (node, name, value) {
        if (arguments.length === 3) node.style[name] = value //dom.style(div,'color','red')
        ;
        else if (arguments.length === 2) {
            if (typeof name === 'string') return node.style[name] //dom.style(div,'color')用于读取属性值
            ;
            else if (name instanceof Object) {
                const object = name;
                for(let key in object)node.style[key] = object[key] //dom.style(div,{color:'red'})
                ;
            }
        }
    },
    find (selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    }
};

//# sourceMappingURL=index.26a40173.js.map
