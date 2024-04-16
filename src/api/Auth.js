import axiosInstance from "@/plugins/axios.plugin"

const axios = axiosInstance
export default {
  async login(form_data) {
    let response = await axios({
      url: "auth/login",
      method: "post",
      data: form_data,
      
    }).then((res) => { return res })
    console.log(response)
    return response
  }
}
