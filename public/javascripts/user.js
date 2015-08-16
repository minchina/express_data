var ToDo = ToDo || {};

ToDo.User = function () {


    function getAllUsers() {
        return [{"name":"zhangsan","age":11},
            {"name":"lisi","age":12}
        ]
    }

    return {
        getAllUsers:getAllUsers
    }
};