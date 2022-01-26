import { Module, Mutation, VuexModule } from "vuex-module-decorators"
import store from "@/store/store"

@Module({dynamic: true, store, name: "DefaultModule"})
export default class DrawerModule extends VuexModule {
  
  drawer = false

  @Mutation
  toggle(){
      this.drawer = !this.drawer
  }
  @Mutation
  setDrawer(drawer:boolean){
      this.drawer = drawer
  }

}