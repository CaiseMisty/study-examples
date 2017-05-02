(() => {
    App = {
        /**
         * 页面初始化
         *
         * @return {undefined} 无返回值
         */
        init: function () {
            this._buttonBindFunc();
        },
        /**
         * 每个按钮绑定的函数
         *
         * @param {Object} event 事件对象
         * @return {undefined} 无返回值
         */
        _showModal: event => {
            alert(event.target.innerHTML);
        },
        /**
         * 按钮绑定函数
         *
         * @return {undefined} 无返回值
         */
        _buttonBindFunc: function () {
            // 没有做IE兼容
            // firfox
            // let allButton = [...document.getElementsByTagName("button")];
            // chrome
            let allButton = document.getElementsByTagName("button");
            allButton = Array.prototype.slice.call(allButton);
            allButton.forEach(item => {
                item.addEventListener('click', this._showModal);
            });
        }
    };
    window.App = App;
})();