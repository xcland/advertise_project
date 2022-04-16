import { makeObservable, observable, runInAction, action, computed } from 'mobx'
import searchPromotionApi from '../../api/search'

class SearchPromotionStore {
  constructor() {
    makeObservable(this)
  }

  // @observable modalShow: boolean = false
  @observable expiredPlanData = []
  @observable dataTrendData = []

  async getExpiredPlanList() {
    try {
      await searchPromotionApi.fetchExpiredPlan().then((res: any) => {
        // const expiredPlanList = res.data.data
        runInAction(() => {
          this.expiredPlanData = res.data.data
        })
      })
    } catch (e) {
      console.log('err', e)
    }
  }

  @computed get modalShow() {
    return this.expiredPlanData.length > 0
  }

  async getChartData() {
    try {
      await searchPromotionApi.fetchChartData().then((res: any) => {
        // const expiredPlanList = res.data.data
        runInAction(() => {
          this.dataTrendData = res.data.data
        })
      })
    } catch (e) {
      console.log('err', e)
    }
  }
}

export default new SearchPromotionStore()
