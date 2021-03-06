import Main from './views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录'
        },
        component: resolve => { require(['./views/login.vue'], resolve); }
};

export const page404 = {
        path: '/*',
        name: 'error_404',
        meta: {
            title: '404-页面不存在'
        },
        component: resolve => { require(['./views/error_page/404.vue'], resolve); }
};

export const page401 = {
        path: '/401',
        meta: {
            title: '401-权限不足'
        },
        name: 'error_401',
        component: resolve => { require(['./views/error_page/401.vue'], resolve); }
};

export const page500 = {
        path: '/500',
        meta: {
            title: '500-服务端错误'
        },
        name: 'error_500',
        component: resolve => { require(['./views/error_page/500.vue'], resolve); }
};

export const preview = {
        path: '/preview',
        name: 'preview',
        component: resolve => { require(['./views/form/article-publish/preview.vue'], resolve); }
};

export const locking = {
        path: '/locking',
        name: 'locking',
        component: resolve => { require(['./views/main_components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['./views/home/home.vue'], resolve); } },
{ path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['./views/own-space/own-space.vue'], resolve); } },
{ path: 'order/:order_id', title: '订单详情', name: 'order_info', component: resolve => { require(['./views/advanced-router/component/order-info.vue'], resolve); } },  // 用于展示动态路由
{ path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['./views/advanced-router/component/shopping-info.vue'], resolve); } },  // 用于展示带参路由
{ path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['./views/message/message.vue'], resolve); } }
]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: '权限管理', name: 'access_index', component: resolve => { require(['./views/access/access.vue'], resolve); }, childrenItem:[] }
]
},
{
    path: '/access-test',
        icon: 'lock-combination',
    title: '权限测试页',
    name: 'accesstest',
    access: 0,
    component: Main,
    children: [
    { path: 'index', title: '权限测试页', name: 'accesstest_index' , childrenItem:[] }
]
},
{
    path: '/international',
        icon: 'earth',
    title: {i18n: 'international'},
    name: 'international',
        component: Main,
    children: [
    { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: resolve => { require(['./views/international/international.vue'], resolve); }, childrenItem:[]  }
]
},
{
    path: '/component',
        icon: 'social-buffer',
    name: 'component',
    title: '组件',
    component: Main,
    children: [
    {
        path: 'aa',
        icon: 'compose',
        name: 'aa',
        title: '富文本编辑器',
        component: resolve => { require(['./views/my_components/image-editor/image-editor.vue'], resolve); },
        childrenItem:[
            {
                path: 'aa',
                icon: 'crop',
                name: 'aa',
                title: '子菜单1',
                component: resolve => { require(['./views/my_components/image-editor/image-editor.vue'], resolve); },
                childrenItemMenu:[
                    {
                        path: 'bar',
                        icon: 'compose',
                        name: 'bar',
                        title: '子菜单1的子菜单',
                        component: resolve => { require(['./views/my_components/image-editor/bar.vue'], resolve); },
                    }
                ]
            },
            {
                path: 'image-editor',
                    icon: 'arrow-move',
                name: 'image-editor',
                title: '子菜单2',
                component: resolve => { require(['./views/my_components/image-editor/image-editor.vue'], resolve); },
                childrenItemMenu:[]
            }
        ]
},
    {
        path: 'md-editor',
            icon: 'pound',
        name: 'md-editor',
        title: 'Markdown编辑器',
        component: resolve => { require(['./views/my_components/markdown-editor/markdown-editor.vue'], resolve); },
        childrenItem:[]
    },
    {
        path: 'image-editor',
            icon: 'crop',
        name: 'image-editor',
        title: '图片预览编辑',
        component: resolve => { require(['./views/my_components/image-editor/image-editor.vue'], resolve); },
        childrenItem:[]
    },
/*    {
        path: 'draggable-list',
            icon: 'arrow-move',
        name: 'draggable-list',
        title: '可拖拽列表1',
        component: resolve => { require(['./views/my_components/draggable-list/draggable-list.vue'], resolve); },
        childrenItem:[]
    },*/
    {
        path: 'file-upload',
            icon: 'android-upload',
        name: 'file-upload',
        title: '文件上传',
        component: resolve => { require(['./views/my_components/file-upload/file-upload.vue'], resolve); },
        childrenItem:[]
    },
    {
        path: 'count-to',
            icon: 'arrow-graph-up-right',
        name: 'count-to',
        title: '数字渐变',
        component: resolve => { require(['./views/my_components/count-to/count-to.vue'], resolve); },
        childrenItem:[]
    }
]
},
{
    path: '/form',
        icon: 'android-checkbox',
    name: 'form',
    title: '表单编辑',
    component: Main,
    children: [
    { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['./views/form/article-publish/article-publish.vue'], resolve); },
    childrenItem:[] },
    { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['./views/form/work-flow/work-flow.vue'], resolve); },
        childrenItem:[] }

]
},

 {
     path: '/charts',
     icon: 'ios-analytics',
     name: 'charts',
     title: '图表',
     component: Main,
     children: [
     { path: 'pie', title: '饼状图', name: 'pie', icon: 'arrow-move', component: resolve => { require(['./views/my_components/charts/pie.vue'], resolve); },
         childrenItem:[] },
         { path: 'bar', title: '柱状图', name: 'bar', icon: 'stats-bars', component: resolve => { require(['./views/my_components/charts/bar.vue'], resolve) },
             childrenItem: [] }
     ]
 },
{
    path: '/tables',
        icon: 'ios-grid-view',
    name: 'tables',
    title: '表格',
    component: Main,
    children: [
    { path: 'dragable-table', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['./views/tables/dragable-table.vue'], resolve); },
        childrenItem:[] },
    { path: 'editable-table', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['./views/tables/editable-table.vue'], resolve); },
        childrenItem:[] },
    { path: 'searchable-table', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['./views/tables/searchable-table.vue'], resolve); },
        childrenItem:[] },
    { path: 'exportable-table', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['./views/tables/exportable-table.vue'], resolve); },
        childrenItem:[] },
    { path: 'table-to-image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['./views/tables/table-to-image.vue'], resolve); },
        childrenItem:[] }
]
},
{
    path: '/advanced-router',
        icon: 'ios-infinite',
    name: 'advanced-router',
    title: '高级路由',
    component: Main,
    children: [
    { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: resolve => { require(['./views/advanced-router/mutative-router.vue'], resolve); },
    childrenItem:[] },
    { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: resolve => { require(['./views/advanced-router/argument-page.vue'], resolve); },
        childrenItem:[] }
]
},
{
    path: '/error-page',
        icon: 'android-sad',
    title: '错误页面',
    name: 'errorpage',
    component: Main,
    children: [
    { path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['./views/error_page/error-page.vue'], resolve); }, childrenItem: [] }
]
}
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
        loginRouter,
        otherRouter,
        preview,
        locking,
        ...appRouter,
    page500,
    page401,
    page404
];
