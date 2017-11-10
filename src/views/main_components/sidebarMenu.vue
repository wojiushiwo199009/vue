<style lang="less">
    @import './menu.less';
</style>
<template>
    <Menu ref="sideMenu" :active-name="$route.name" :open-names="openedSubmenuArr" :theme="$store.state.menuTheme" width="auto" @on-select="changeMenu">
        <template v-for="item in menuList">
            <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="item.path">
                <Icon :type="item.icon" :size="iconSize" :key="item.path"></Icon>
                <span class="layout-text" :key="item.path">{{ itemTitle(item) }}</span>
            </MenuItem>
            <Submenu v-if="item.children.length>1" :name="item.name" :key="item.path">
                <template slot="title">
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span class="layout-text">{{ itemTitle(item)}}</span>
                </template>
                <template v-for="child in item.children">
                     <MenuItem :name="child.path" :key="child.path" v-if="child.childrenItem==''">
                        <Icon :type="child.icon" :size="iconSize" :key="child.path"></Icon>
                        <span class="layout-text" :key="child.path" >{{itemTitle(child)}}{{child.children}}</span>
                     </MenuItem>
                    <Submenu v-if="child.childrenItem!=''" :name="child.name" :key="child.name">
                        <template slot="title">
                            <Icon :type="child.icon" :size="iconSize"></Icon>
                            <span class="layout-text">{{ itemTitle(child)}}</span>
                        </template>
                        <template v-for="menuItem in child.childrenItem" >
                            <MenuItem :name="menuItem.path" :key="menuItem.path" v-if="menuItem.childrenItemMenu==''" >
                                <Icon :type="menuItem.icon" :size="iconSize" :key="menuItem.path"></Icon>
                                <span class="layout-text" :key="menuItem.path">{{itemTitle(menuItem)}}</span>
                            </MenuItem>
                            <Submenu v-if="menuItem.childrenItemMenu!=''" :name="child.name" :key="child.name">
                                <template slot="title">
                                    <Icon :type="menuItem.icon" :size="iconSize"></Icon>
                                    <span class="layout-text">{{itemTitle(menuItem)}}</span>
                                </template>
                                <template v-for="menuChild in menuItem.childrenItemMenu">
                                    <MenuItem :name="menuChild.path" :key="menuChild.path">
                                        <Icon :type="menuChild.icon" :size="iconSize" :key="menuChild.path"></Icon>
                                        <span class="layout-text" :key="menuChild.path">{{itemTitle(menuChild)}}</span>
                                    </MenuItem>
                                </template>
                            </Submenu>
                        </template>
                    </Submenu>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>
<script>
import util from '@/libs/util';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
export default {
    data () {
        return {
            openedSubmenuArr: this.$store.state.openedSubmenuArr
        };
    },
    name: 'sidebarMenu',
    props: {
        slotTopClass: String,
        menuList: Array,
        iconSize: Number
    },
    computed: {
        tagsList () {
            return this.$store.state.tagsList;
        }
    },
    methods: {
        changeMenu (active) {
            if (active !== 'accesstest_index') {
                console.log(active)
                util.openNewPage(this, active);
                this.$router.push({
                    name: active
                });
            }
        },
        itemTitle (item) {
            if (typeof item.title === 'object') {
                console.log(item.title,9)
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    },
    watch: {
        '$route' (to) {
            localStorage.currentPageName = to.name;
        },
        currentPageName () {
            this.openedSubmenuArr = this.$store.state.openedSubmenuArr;
            this.$nextTick(() => {
                this.$refs.sideMenu.updateOpened();
            })
        }
    },
    updated () {
        this.$nextTick(() => {
            this.$refs.sideMenu.updateOpened();
        })
    }
};
</script>
