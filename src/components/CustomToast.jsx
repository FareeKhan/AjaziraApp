import {  Toast} from "react-native-toast-notifications";
import { fonts } from "../constant/fonts";

  const CustomToast=(text,type)=>{
    Toast.show(text, {
        type: type || "normal", 
        placement: "bottom",
        duration: 4000,
        offset: 30,
        animationType: "zoom-in",
        textStyle:{fontFamily:fonts.regular}

        
      });
}

export default CustomToast;

