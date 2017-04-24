/**
 * 类
 */
class Person
{

    /**
     * 构造函数
     */
    constructor(type)
    {

        if(Person.interface !== undefined)
        {
            return Person.interface;
        }

        Person.interface = this;

        this._type = type;
    }

    /**
     * GET方法
     */
    get name()
    {
        return this._name;
    }

    /**
     * SET方法
     */
    set name(value)
    {
        this._name = value;
    }

    /**
     * 普通方法
     */
    say()
    {
        return this._type +':'+ this._name;
    }

    /**
     * 静态方法
     */
    static age()
    {
        return 18;
    }
}

/**
 * 静态变量
 */
Person.interface;

/**
 * 公开类
 */
export default Person;