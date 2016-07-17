import { SmartModel } from "meteor/zaku:smart-record"

Tag = class Tag extends SmartModel {
  static get schema() {
    return {
      text: {type: String}
    }
  }
}

export { Tag };
