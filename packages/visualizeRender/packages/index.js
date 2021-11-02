const packVersion = '0.0.1-beta.4'
const r = ['color: #fff', 'border-top-left-radius:3px', 'border-bottom-left-radius:3px', 'background-color: #564b4f', 'padding: 5px'].join(';');
const i = ['color: #fff', 'border-top-right-radius:3px', 'border-bottom-right-radius:3px', 'background-color: #4fc08d', 'padding: 5px'].join(';');
console.log('%cvisualize-render %c'.concat(packVersion), r, i);
import 'visualize-components/lib/visualize-components.css'
import '@/styles/reset.css'
import '@/styles/animate.css'
import visualizeCompoents from 'visualize-components'
import visualizeRender from './Render'
const install = function (Vue, opt = []) {
  if (install.installed) return;
  if (opt)
  {
    opt.forEach(i => {
      Vue.component(i.name, i)
    })
  }
  Vue.use(visualizeCompoents)
  Vue.use(visualizeRender)
};
if (typeof window !== "undefined" && window.Vue)
{
  install(window.Vue);
}
export default {
  install,
};
