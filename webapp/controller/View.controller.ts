import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace sap.btp.helloworldts.controller
 */
export default class View extends Controller {

    public onInit(): void {

    }

    onPress(): void {
        // MessageToast.show("Button pressed");
        MessageBox.alert("You have been alerted");
    }
}