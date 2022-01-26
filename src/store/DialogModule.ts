import Dialog from "@/models/vue/Dialog";
import store from "@/store/store"
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";

@Module({dynamic: true, store, name: "DialogModule"})
export default class DialogMOdule extends VuexModule {

  enabled = false
  title = "No message"
  body = "No body"
  callback: any

  @Mutation
  setDialogEnabled(enabled: boolean): void {
    this.enabled = enabled
  }

  @Mutation
  setDialogTitle(title: string): void {
    this.title = title
  }

  @Mutation
  setDialogBody(body: string): void {
    this.body = body
  }

  @Action
  showDialog(dialog: Dialog): void {
    this.setDialogEnabled(true)
    this.setDialogTitle(dialog.title!)
    this.setDialogBody(dialog.body!)
    this.callback = dialog.callback
  }

}