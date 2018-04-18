/**
 * Created by yunzhou.cao on 2018/4/18.
 */
(function(){

    let StudentList = {
        data: function() {
            return {
                students: [
                    {
                        id : '001',
                        name: '张小一',
                        num: '2103',
                        academy: '生命科学学院',
                        major: '环境管理',
                        class: '环境管理一班',
                        course: '生化武器研究、雾霾治理、共享单车治理'
                    },
                    {
                        id : '004',
                        name: '鹤兰',
                        num: '502',
                        academy: '国防科学学院',
                        major: '反导弹研究',
                        class: '反导弹一班',
                        course: '计算系统、局域网综合布线、GPS定位'
                    }
                ]
            };
        },
        // 模板 从js引入
        template: "#studentListTemp",
        mounted: function(){
            console.log('asdfadfasdf');
        }
    };

    let app = new Vue({
        el: '#list',
        data: {
        },
        methods: {
            add: function(event){
                console.log(event);
            },
            remove: function(event){
                console.log(event);
            }
        },
        components: {
            'student-list': StudentList
        },
        mounted: function() {
            // console.log(this.students);
        }
    });
})();
