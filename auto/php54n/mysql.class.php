<?php
/** 
*以下代码用于数据库操作类的封装
* 
* @author rex<rex.sp.li@aliyun.com> 
* @version 1.0
* @since 2015
*/


class Mysql{

    //数据库连接返回值
    public $conn;

    /**
    * [构造函数，返回值给$conn]
    * @param [string] $hostname [主机名]
    * @param [string] $username[用户名]
    * @param [string] $password[密码]
    * @param [string] $dbname[数据库名]
    * @param [string] $charset[字符集]
    * @return [null]

    */

    function __construct($hostname,$username,$password,$dbname,$charset="utf8mb4"){
        $conn=mysqli_connect($hostname,$username,$password);
        if(!$conn){
        echo '连接失败，请联系管理员';
        exit;
        }
        $this->hostname=$hostname;
        $this->username=$username;
        $this->password=$password;
        $this->dbname=$dbname;
        $this->conn=$conn;
        $res = mysqli_select_db($this->conn, $dbname);
        if(!$res){
        echo '连接失败，请联系管理员';
        exit;
        }
        mysqli_set_charset($this->conn, $charset);
    }
    function __destruct(){
    }
    /**
    * [getAll 获取所有信息]
    * @param [string] $sql [sql语句]
    * @return [array] [返回二维数组]
    */
    function getAll($sql){
        $this->conn=mysqli_connect($this->hostname,$this->username,$this->password);
        mysqli_select_db($this->conn, $this->dbname);
        mysqli_set_charset($this->conn,"utf8");
        $result = mysqli_query($this->conn,$sql);
        $data = array();
        if($result && mysqli_num_rows($result)>0){
            while($row = mysqli_fetch_assoc($result)){
                $data[] = $row;
            }
        }
        return $data;
    }
    /**
    * [getOne 获取单条数据]
    * @param [string] $sql [sql语句]
    * @return [array] [返回一维数组]
    */
    function getOne($sql){
        $this->conn=mysqli_connect($this->hostname,$this->username,$this->password);
        mysqli_select_db($this->conn,$this->dbname);
        mysqli_set_charset($this->conn,"utf8mb4");
        $result = mysqli_query($this->conn,$sql);
        $data = array();
        if($result && mysqli_num_rows($result)>0){
            $data = mysqli_fetch_assoc($result);
        }
        return $data;
    }

    /**
    * [getOne 获取单条数据]
    * @param [string] $table [表名]
    * @param [string] $data [由字段名当键，属性当键值的一维数组]
    * @return [type] [返回false或者插入数据的id]
    */

    function insert($table,$data){
        $this->conn=mysqli_connect($this->hostname,$this->username,$this->password);
        mysqli_select_db($this->conn,$this->dbname);
        mysqli_set_charset($this->conn,"utf8mb4");
        $tmpdata = [];
        foreach ($data as $k => $v){
            $tmpdata[$this->s($k)] = $this->s($v);
        }
        $data = $tmpdata;
        $str = '';
        $str .="INSERT INTO `$table` ";
        $str .="(`".implode("`,`",array_keys($data))."`) ";
        $str .=" VALUES ";
        $str .= "('".implode("','",$data)."')";
        $res = mysqli_query($this->conn,$str);
        if($res && mysqli_affected_rows($this->conn)>0){
            return mysqli_insert_id($this->conn);
        }else{
            return false;
        }
    }
    /**
    * [update 更新数据库]
    * @param [string] $table [表名]
    * @param [array] $data [更新的数据，由字段名当键，属性当键值的一维数组]
    * @param [string] $where [条件，‘字段名’=‘字段属性’]
    * @return [type] [更新成功返回影响的行数，更新失败返回false]
    */
    function update($table,$data,$where){
        $this->conn=mysqli_connect($this->hostname,$this->username,$this->password);
        mysqli_select_db($this->conn,$this->dbname);
        mysqli_set_charset($this->conn,"utf8mb4");
        $sql = 'UPDATE '.$table.' SET ';
        foreach($data as $key => $value){
            $key = $this->s($key);
            $value = $this->s($value);
            $sql .= "`{$key}`='{$value}',";
        }
        $sql = rtrim($sql,',');
        $sql .= " WHERE $where";
        $res = mysqli_query($this->conn,$sql);
        if($res && mysqli_affected_rows($this->conn)){
            return mysqli_affected_rows($this->conn);
        }else{
            return false;
        }
    }

    /**
    * [delete 删除数据]
    * @param [string] $table [表名]
    * @param [string] $where [条件，‘字段名’=‘字段属性’]
    * @return [type] [成功返回影响的行数，失败返回false]
    */
    function del($table,$where){
        $this->conn=mysqli_connect($this->hostname,$this->username,$this->password);
        mysqli_select_db($this->conn,$this->dbname);
        mysqli_set_charset($this->conn,"utf8mb4");
        $sql = "DELETE FROM `{$table}` WHERE {$where}";
        $res = mysqli_query($this->conn,$sql);
        if($res && mysqli_affected_rows($this->conn)){
            return mysqli_affected_rows($this->conn);
        }else{
            return false;
        }
    }

    /**
     * 转义字符串
     * @param mixed
     * @return mixed
     */
    function s($str){
        return mysqli_real_escape_string( $this->conn, $str );
    }
}




