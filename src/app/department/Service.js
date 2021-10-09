import { POST } from '@/axios';
import CommonService from '@/store/CommonService';
import API from '@/api/index';

class Service extends CommonService {
	getHomeBusinessData(params) {
		return POST(API.getHomeBusinessData, params);
	}
}

export default new Service();
