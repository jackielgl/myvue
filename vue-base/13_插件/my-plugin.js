(function(){
    var MyPlugin = {};

    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          // 逻辑..
          console.log("Vue函数对象的方法myGlobalMethod");
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive',function(el,binding) {
          //bind (el, binding, vnode, oldVnode) {
            // 逻辑。。
            el.innerHTML = binding.value.toUpperCase();
          }
        )
      
        // 3. 注入组件选项
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
          //...
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log("Vue实例对象的方法$myMethod");
        }
      }

      window.MyPlugin = MyPlugin;
})();