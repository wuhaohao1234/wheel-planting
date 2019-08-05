/**
 * 初始化样式
*/
class Init {
    init() {
        this.ulList = this.wrap.getElementsByTagName('ul')[0]
        this.liItem = this.ulList.getElementsByTagName('li')
        // 用来记录图片数量
        this.listLength = this.liItem.length
        /**
         * 适配移动端样式 
         * */
        for (let i = 0; i < this.listLength; i++) {
            this.liItem[i].style.width = this.wrap.clientWidth + 'px'
        }
        // 用来记录单个图片宽度
        this.targetWidth = this.wrap.clientWidth
        // 分别在开始与结尾添加图片
        $(this.ulList).append($(this.liItem[0]).clone())
        $(this.ulList).prepend($(this.liItem[this.listLength - 1]).clone())
        // 处理ul开始位置
        $($(this.ulList)).css({
            'marginLeft': -this.targetWidth + 'px'
        })
        
    }
}
class AddEvent extends Init {
    constructor() {
        super()
        this.pageLeft = -1
    }
    addEvent() {
        this.leftClick = this.wrap.getElementsByClassName('left')[0]
        this.rightClick = this.wrap.getElementsByClassName('right')[0]

        this.leftClick.addEventListener('click', (event) => {
            this.animated(true)
        })
        this.rightClick.addEventListener('click', (event) => {
            this.animated(false)
        })
    }
    animated(target) {
        target ? this.pageLeft ++ : this.pageLeft --
        this.switchKey()
        $(this.ulList).animate({
            'marginLeft': this.targetWidth * this.pageLeft  + 'px'
        })
    }
}
// 特殊情况处理位置
class SwitchKey extends AddEvent {
    constructor() {
        super()
    }
    switchKey() {
        if(this.pageLeft === 0) {
            this.pageLeft = - (this.listLength + 1)
            $(this.ulList).css({
                'marginLeft': this.pageLeft * this.targetWidth + 'px'
            })
            this.pageLeft ++
        }
        if(this.pageLeft === -(this.listLength + 1)) {
            this.pageLeft = 0
            $(this.ulList).css({
                'marginLeft': this.pageLeft * this.targetWidth + 'px'
            })
            this.pageLeft --
        }
    }
}

class WheelPlanting extends SwitchKey {
    constructor(wrap) {
        super()
        this.wrap = document.getElementsByClassName(wrap)[0]
        this.init()
        this.addEvent()
    }
}
