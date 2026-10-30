import BaseComponent from "sap/ui/core/UIComponent";
import { createDeviceModel } from "./model/models";
import Log from "sap/base/Log";

/**
 * @namespace sap.btp.helloworldts
 */
export default class Component extends BaseComponent {

	public static metadata = {
		manifest: "json",
        interfaces: [
            "sap.ui.core.IAsyncContentCreation"
        ]
	};

	public init() : void {
		// call the base component's init function
		super.init();

        // set the device model
        this.setModel(createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
        Log.info("Info");
        Log.debug("Debug");
        Log.warning("Warning");
        Log.error("Error");
        Log.fatal("Fatal");
	}
}