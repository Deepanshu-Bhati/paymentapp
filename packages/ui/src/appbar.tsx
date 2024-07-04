import { Button } from "./button";
interface user{
  signin:any,
  signout:any,
  user?:{
    name?:string | null
  }
}
export const Appbar = ({signin,signout,user}:user) => {
  return (
    <div className="flex justify-between"> 
      <div className="text-3xl font-bold ml-5 mt-3">
        PayTm
        
      </div>
      <div>
        <Button  onClick={user?signout:signin}>{user?"Logout":"Login"}</Button>
      </div>
    </div>
  );
};
