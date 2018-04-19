/**
 * Created by yunzhou.cao on 2018/4/19.
 */
$(function(){
    let JobList = {
        template: '#job-list-temp',
        data: function(){
            return {
                jobs: [
                    {
                        img: 'img/3dmax.jpg',
                        title: '第7课时作业_2班_张小兰',
                        type: '.max'
                    },
                    {
                        img: 'img/3dxmax.jpg',
                        title: '第7课时作业_2班_陈晨',
                        type: '.max'
                    },
                    {
                        img: 'img/3dmax.jpg',
                        title: '第7课时作业_2班_李磊',
                        type: '.max'
                    },
                    {
                        img: 'img/3dmax.jpg',
                        title: '第7课时作业_2班_何蕾',
                        type: '.max'
                    },
                    {
                        img: 'img/3dmax.jpg',
                        title: '第7课时作业_2班_齐帆',
                        type: '.max'
                    },
                    {
                        img: 'img/3dxmax.jpg',
                        title: '第7课时作业_2班_柳依依',
                        type: '.max'
                    },
                    {
                        img: 'img/3dxmax.jpg',
                        title: '第7课时作业_2班_赵雷',
                        type: '.max'
                    },
                    {
                        img: 'img/3dxmax.jpg',
                        title: '第7课时作业_2班_臧一平',
                        type: '.max'
                    }
                ]
            };
        },
        mounted: function(){
            // console.log(this.jobs);
        }
    };

    let app = new Vue({
        el: '#jobMangeContainer',
        data: {
          message: 'job list page'
        },
        // 组件
        components: {
            "job-list": JobList
        }
    });
}());