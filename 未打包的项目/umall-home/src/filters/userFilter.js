import { Toast } from "vant"

export default (e)=>{
    if(!sessionStorage.getItem("user")){
        Toast.fail('您还没有登录');
        setTimeout(()=>{
             this.$router.push("/login")
        },1000);
        return 
    }
}