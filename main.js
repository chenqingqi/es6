/**
 * 引入模块
 */
import Person from './Person.js';

class Main
{
    /**
     * 构造函数
     */
    constructor()
    {
        var p = new Person('学生');

        p.name = '小明';

        Person.age(12);

        console.log(p.say())
    }
}

new Main()

alert(1111)
