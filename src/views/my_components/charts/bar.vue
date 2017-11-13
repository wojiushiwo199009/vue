<template>
    <div class="bar" style="height:100%;">
        <Card style="height:100%;">
            <p slot="title">
                <Icon type="pie-graph"></Icon>
                柱状图
            </p>
            <div id="bar" style="height:90%;">

            </div>
        </Card>
    </div>
</template>
<script>
    const echarts = require('echarts');
    export default {
        name: "pie",
        mounted () {
            const option = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            };

            const pieCharts = echarts.init(document.getElementById('bar'));
            pieCharts.setOption(option);

            window.addEventListener('resize', function () {
                pieCharts.resize();
            });
        }
    }
</script>