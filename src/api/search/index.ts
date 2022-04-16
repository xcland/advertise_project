import axios from 'axios'
import { ExpiredPlanReq } from './types'

const searchPromotionApi = {
  fetchExpiredPlan: (params?: ExpiredPlanReq) => axios.get('ad/plan/expired'),
  fetchChartData: (params?: any) => axios.get('/ad/plan/chart'),
}

export default searchPromotionApi
