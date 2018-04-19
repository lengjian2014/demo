/**
 * Created by yunzhou.cao on 2018/4/18.
 */
(function(){

    let app = new Vue({
        el: '#list',
        data: {
            students:
            [
                {
                    id : '001',
                    name: '张小一',
                    num: '2103',
                    academy: '生命科学学院',
                    major: '环境管理',
                    grade: '环境管理一班',
                    course: '生化武器研究、雾霾治理、共享单车治理'
                },
                {
                    id : '004',
                    name: '鹤兰',
                    num: '502',
                    academy: '国防科学学院',
                    major: '反导弹研究',
                    grade: '反导弹一班',
                    course: '计算系统、局域网综合布线、GPS定位'
                },
                {
                    id : '007',
                    name: '平谷',
                    num: '783',
                    academy: '计算机学院',
                    major: '通信工程',
                    grade: '电子信息一班',
                    course: '计算系统、局域网综合布线、GPS定位'
                }
            ]
        },
        methods: {
            remove: function(event){
                $("input[name='choseStu']").filter(":checked").each(function(index, item){
                    $(item).parents("tr").first().remove();
                });
            }
        },
        mounted: function() {
            // console.log(this.students);
        }
    });
    let create = new Vue({
        el: '#addStuModal',
        data: {
            id: '',
            name: '',
            num: '',
            academy: '',
            major: '',
            grade: '',
            course: '',
            errorMsg: ''
        },
        methods: {
            add: function(event){
                let error = $("#errorAlert");
                let newItem = {};
                this.errorMsg = false;
                newItem.id = this.id || this.validate('id');
                newItem.name = this.name || this.validate('name');
                newItem.num = this.num || this.validate('num');
                newItem.academy = this.academy || this.validate('academy');
                newItem.major = this.major || this.validate('major');
                newItem.grade = this.grade || this.validate('grade');
                newItem.course = this.course || this.validate('course');

                if(this.errorMsg){
                    console.log(newItem);
                    error.removeClass('hide');
                    return false;
                }
                error.addClass('hide');
                // create new student
                $('#addStuModal').modal('toggle');
                this.createNode(newItem);
            },
            validate: function(key){
                if(!this[key]){
                    this.errorMsg = key + ' empty';
                    return false;
                }
                return true;
            },
            createNode: function(nodeData){
                let newTr = $('<tr></tr>');
                newTr.append('<td><input type="checkbox" name="choseStu"> </td>');
                newTr.append("<td>" + nodeData.id +"</td>")
                newTr.append("<td>" + nodeData.name +"</td>")
                newTr.append("<td>" + nodeData.num +"</td>")
                newTr.append("<td>" + nodeData.academy +"</td>")
                newTr.append("<td>" + nodeData.major+"</td>")
                newTr.append("<td>" + nodeData.grade +"</td>")
                newTr.append("<td>" + nodeData.course +"</td>")
                $("#dataTable").find("tr").last().after(newTr);
            }
        }
    });
})();
